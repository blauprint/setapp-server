import { BadRequestException, InternalServerErrorException, createParamDecorator } from "@nestjs/common";
import { Request } from "express";

export const GetUserId = createParamDecorator((request: Request) => { 
 let authHeader: string | undefined; 
  try {
    authHeader = request.headers['authorization'];
  } catch(error) {
    throw new BadRequestException('Invalid authorization header');
  }
  const auth = authHeader ? JSON.parse(authHeader) : null;
  return auth && auth.userId ? auth.userId : null;
});
