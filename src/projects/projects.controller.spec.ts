import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectService } from './projects.services';
import { PrismaService } from '../../src/prisma/prisma.service';
import * as mocks from '../../test/mocks'

describe('ProjectsController', () => {
  let controller: ProjectsController;
  let service: ProjectService;
  // let prisma: PrismaService;

  let findManyMock: jest.Mock;

  beforeEach(async () => {
    findManyMock = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        ProjectService,
        {
          provide: PrismaService,
          useValue: {
            project: {
              findMany: findManyMock
            }
          }
        }]
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    // prisma = module.get<PrismaService>(PrismaService);
    controller = module.get<ProjectsController>(ProjectsController);

    // prisma = new PrismaService();
    // service = new ProjectService(prisma);
    // controller = new ProjectsController(service);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  describe('getProjects', () => {
    let projects;
    beforeEach(() => {
      projects = [mocks.mockProject];
      findManyMock.mockResolvedValue(projects);
    });
    it('should return an array of projects', async () => {
      // const result = [mocks.mockProject];
      const result = await controller.getProjects(mocks.mockUserId);
      // jest.spyOn(service, 'getProjects').mockImplementation(() => result);

      expect(result).toEqual([mocks.mockProject]);
    });
  });

});
