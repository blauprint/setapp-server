import { Module } from '@nestjs/common';

@Module({})
export class ClerkModuleMock {

  static forRoot(): typeof ClerkModuleMock {
    return ClerkModuleMock;
  }
  // get(id: string): string {
  //   return 'mocked response';
  // }

}