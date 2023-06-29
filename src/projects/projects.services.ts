import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import projectMock from '../../mocks/project';

@Injectable()
export class ProjectService {
	constructor(private prisma: PrismaService) { }
	//NOTE: this is an example of service call that needs to be implemented.
	async getProjects() {
		return await this.prisma.project.findMany({
			where: {
				userId: "user_2RjcGR6PvUylQ1e1Lx1Z9y6lrmQ"
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

	async createProject() {
		const colorData: any = projectMock.frontend.colorScheme.colorPalette.map((palette) => ({
			name: palette.name,
			hex: palette.hex,
			rgb: palette.rgb,
		}));
		const backend = await this.prisma.backend.create({
			data: {
				todoList: projectMock.backend.todoList,
				framework: {
					create: {
						name: projectMock.backend.framework.name,
						whyGoodOption: projectMock.backend.framework.whyGoodOption,
						description: projectMock.backend.framework.description,
						link: projectMock.backend.framework.link
					}
				},
				database: {
					create: {
						name: projectMock.backend.database.name,
						whyGoodOption: projectMock.backend.database.whyGoodOption,
						description: projectMock.backend.database.description,
						schema: projectMock.backend.database.schema,
						link: projectMock.backend.database.link,
					}
				}
			}
		});
		const frontend = await this.prisma.frontend.create({
			data: {
				todoList: projectMock.frontend.toDoList,
				framework: {
					create: {
						name: projectMock.frontend.framework.name,
						whyGoodOption: projectMock.frontend.framework.whyGoodOption,
						description: projectMock.frontend.framework.description,
						link: projectMock.frontend.framework.link
					},
				},
				colorScheme: {
					create: {
						whyGoodOption: projectMock.frontend.colorScheme.whyGoodOption,
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
				userId: "user_2RjcGR6PvUylQ1e1Lx1Z9y6lrmQ",
				idea: projectMock.idea,
				title: projectMock.title,
				summary: projectMock.summary,
				backendId: backend.id,
				frontendId: frontend.id
			}
		});
		return project;
	}
}
