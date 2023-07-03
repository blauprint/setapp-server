import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectDTO, ColorDTO } from './dto/create-project.dto';
import { Todo } from './dto/update-project-todolist.dto';

@Injectable()
export class ProjectService {
	constructor(private prisma: PrismaService) { }
	async getProjects(userId: string) {
		return await this.prisma.project.findMany({
			where: {
				userId: userId,
			},
			include: {
				frontend: {
					include: {
						framework: true,
						todoList: true,
						colorScheme: {
							include: {
								colorPalette: {
									include: {
										color: true,
									}
								}
							}
						}
					},
				},
				backend: {
					include: {
						database: true,
						framework: true,
						todoList: true
					}
				}
			}
		});
	}

	async createProject(userId: string, dto: ProjectDTO) {
		const colorData: any = dto.frontend.colorScheme.colorPalette.color.map((c: ColorDTO) => ({
			name: c.name,
			hex: c.hex,
			rgb: c.rgb,
		}));
		const backend = await this.prisma.backend.create({
			data: {
				framework: {
					create: {
						name: dto.backend.framework.name,
						whyGoodOption: dto.backend.framework.whyGoodOption,
						description: dto.backend.framework.description,
						link: dto.backend.framework.link
					}
				},
				database: {
					create: {
						name: dto.backend.database.name,
						whyGoodOption: dto.backend.database.whyGoodOption,
						description: dto.backend.database.description,
						schema: dto.backend.database.schema,
						link: dto.backend.database.link,
					}
				}
			}
		});
		//NOTE: We receive the todo list from AI in form of an array of strings
		// We then transform each string into an object with properties 'title': string
		// and 'done': boolean
		for (let todo of dto.backend.todoList) {
			await this.prisma.todoList.create({
				data: {
					title: todo,
					done: false,
					backend: {
						connect: {
							id: backend.id

						}
					}
				}
			});
		}
		const frontend = await this.prisma.frontend.create({
			data: {
				framework: {
					create: {
						name: dto.frontend.framework.name,
						whyGoodOption: dto.frontend.framework.whyGoodOption,
						description: dto.frontend.framework.description,
						link: dto.frontend.framework.link
					},
				},
				colorScheme: {
					create: {
						whyGoodOption: dto.frontend.colorScheme.whyGoodOption,
						colorPalette: {
							create: {
								color: {
									create: colorData,
								}
							}
						}
					}
				}
			}
		});
		for (let todo of dto.frontend.todoList) {
			await this.prisma.todoList.create({
				data: {
					title: todo,
					done: false,
					frontend: {
						connect: {
							id: frontend.id
						}
					}
				}
			})
		}
		const project = await this.prisma.project.create({
			data: {
				userId: userId,
				idea: dto.idea,
				title: dto.title,
				summary: dto.summary,
				backendId: backend.id,
				frontendId: frontend.id
			},
			include: {
				frontend: {
					include: {
						framework: true,
						todoList: true,
						colorScheme: {
							include: {
								colorPalette: {
									include: {
										color: true,
									}
								}
							}
						}
					},
				},
				backend: {
					include: {
						database: true,
						framework: true,
						todoList: true
					}
				}
			}
		});
		return project;
	}
	async createBackendTodo(backendId: string, todo: Todo) {
		const createdTodo = await this.prisma.todoList.create({
			data: {
				title: todo.title,
				done: false,
				backend: {
					connect: { id: backendId }
				},
			}
		});
		return createdTodo;
	}
	async createFrontendTodo(frontendId: string, todo: Todo) {
		console.log(todo, 'from service')
		const createdTodo = await this.prisma.todoList.create({
			data: {
				title: todo.title,
				done: false,
				frontend: {
					connect: { id: frontendId },
				},
			},
		});
		return createdTodo;
	}
	async updateTodoById(todoId: string, dto: Todo) {
		const updatedTodo = await this.prisma.todoList.update({
			where: { id: todoId },
			data: {
				title: dto.title,
				done: dto.done,
			},
		});

		return updatedTodo;
	}
	async deleteTodoById(todoId: string) {
		const deletedTodo = await this.prisma.todoList.delete({
			where: {
				id: todoId
			}
		});
		return deletedTodo;
	}
}
