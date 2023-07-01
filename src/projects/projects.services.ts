import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectDTO, ColorDTO } from './dto/create-project.dto';

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
					}
				}

			}
		});
	}

	async createProject(userId: string, dto: ProjectDTO) {
		console.log(typeof dto, 'type of the body received from AI');
		console.log(dto, 'the body received from AI');
		const colorData: any = dto.frontend.colorScheme.colorPalette.color.map((c: ColorDTO) => ({
			name: c.name,
			hex: c.hex,
			rgb: c.rgb,
		}));
		const backend = await this.prisma.backend.create({
			data: {
				todoList: dto.backend.todoList,
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
		const frontend = await this.prisma.frontend.create({
			data: {
				todoList: dto.frontend.toDoList,
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
		const project = await this.prisma.project.create({
			data: {
				userId: userId,
				idea: dto.idea,
				title: dto.title,
				summary: dto.summary,
				backendId: backend.id,
				frontendId: frontend.id
			}
		});
		return project;
	}
}
