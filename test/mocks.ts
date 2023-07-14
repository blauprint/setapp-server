import { ProjectDTO } from "src/projects/dto";

export const mockProject = {
  id: '1',
  userId: '1',
  summary: 'idea',
  idea: 'mock idea',
  title: 'mock',
  forontendId: '1',
  frontend: {
    id: '1',
    projectId: '1',
    todoList: ['test1'],
    frameworkId: '1',
    framework: {
      name: 'test',
      whyGoodOption: 'test',
      description: 'test',
      link: 'test'
    },
    colorSchemeId: '1',
    colorScheme: {
      whyGoodOption: 'test',
      colorPalette: {
        colors: []
      }
    },
  },
  backendId: '1',
  backend: {
    id: '1',
    projectId: '1',
    todoList: ['test1'],
    frameworkId: '1',
    framework: {
      name: 'test',
      whyGoodOption: 'test',
      description: 'test',
      link: 'test'
    },
    databaseId: '1',
    database: {
      name: 'test',
      whyGoodOption: 'test',
      description: 'test',
      link: 'test',
      schema: 'test'
    },
  },
  createdAt: 0
}

export const mockProjectToCreate = {
  summary: 'idea',
  idea: 'mock idea',
  title: 'mock',
  frontend: {
    todoList: ['test1'],
    framework: {
      name: 'test',
      whyGoodOption: 'test',
      description: 'test',
      link: 'test'
    },
    colorScheme: {
      whyGoodOption: 'test',
      colorPalette: {
        colors: []
      }
    },
  },
  backend: {
    todoList: ['test1'],
    framework: {
      name: 'test',
      whyGoodOption: 'test',
      description: 'test',
      link: 'test'
    },
    database: {
      name: 'test',
      whyGoodOption: 'test',
      description: 'test',
      link: 'test',
      schema: 'test'
    },
  },
}

export const mockUserId = '1';

export const mockProjectId = '1';