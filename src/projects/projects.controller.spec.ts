import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectService } from './projects.services';
import { PrismaService } from '../../src/prisma/prisma.service';
import * as mocks from '../../test/mocks'

describe('ProjectsController', () => {
  let controller: ProjectsController;
  let service: ProjectService;

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
    controller = module.get<ProjectsController>(ProjectsController);
  });

  describe('getProjects', () => {
    let projects;
    beforeEach(() => {
      projects = [mocks.mockProject];
      findManyMock.mockResolvedValue(projects);
    });
    it('should return an array of projects', async () => {
      const result = await controller.getProjects(mocks.mockUserId);

      expect(result).toEqual([mocks.mockProject]);
    });
  });

});
