import { INestApplication, createParamDecorator } from "@nestjs/common"
import * as mocks from '../test/mocks'
import { Test } from "@nestjs/testing";
import { ClerkModule } from "../src/auth/auth.module";
import { ClerkModuleMock } from "./clerk.mock";
import * as request from 'supertest';


// export const MockUserId = createParamDecorator((data, req) => {
//   return '1';
// })


describe('Projects', () => {
  let app: INestApplication;
  let clerkModule: ClerkModule;

  beforeAll(async () => {

    const moduleRef = await Test.createTestingModule({
      imports: [ClerkModule],
      providers: [ClerkModule]
    })
      .overrideModule(ClerkModule)
      .useModule(ClerkModuleMock)
      .compile()


    clerkModule = moduleRef.get<ClerkModule>(ClerkModule);

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('/GET projects', () => {
    it('should return projects for the authenticated user', async () => {
      let projects = [mocks.mockProject];

      console.log(app.getHttpServer());
      const response = await request(app.getHttpServer())
        .get('/projects')
        .expect(200)

      expect(response.body).toEqual(projects)
    })

  });


  afterAll(async () => {
    await app.close();
  });

});