import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectService } from './projects.services';
import { PrismaService } from '../../src/prisma/prisma.service';
import * as mocks from '../../test/mocks'
import { PrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';


describe('ProjectsController', () => {
  let controller: ProjectsController;
  // let pri: PrismaClient = new PrismaClient();
  let pri: PrismaClient = mockDeep<PrismaClient>();
  let prisma: PrismaService = new PrismaService();
  let service: ProjectService = new ProjectService(pri);

  let findManyMock: jest.Mock;
  let findUniqueMock: jest.Mock;
  let createProjectMock: jest.Mock;

  beforeEach(async () => {
    findManyMock = jest.fn(service.getProjects);
    findUniqueMock = jest.fn(service.getProjectById);
    createProjectMock = jest.fn(service.createProject);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        ProjectService,
        {
          provide: PrismaService,
          useValue: {
            project: {
              findMany: findManyMock,
              findUnique: findUniqueMock,
              create: createProjectMock,
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

  describe('getProjectById', () => {
    let project;
    beforeEach(() => {
      project = mocks.mockProject;
      findUniqueMock.mockResolvedValue(project);
    });

    it('should return a project', async () => {
      const result = await controller.getProjectById(mocks.mockProjectId);

      expect(result).toEqual(mocks.mockProject);
    });
  });

  describe('createProject', () => {
    let projectToCreate;
    beforeEach(() => {
      projectToCreate = mocks.mockProjectToCreate;
      createProjectMock.mockResolvedValue(projectToCreate);
    });

    it('should create a new project', async () => {
      const result = await controller.createProject('1', mocks.mockProjectToCreate);
      console.log(result, 'result');
      expect(result.backend.database).toHaveProperty("schema");
    });

  });

});
