import { IsString, IsBoolean } from 'class-validator';

export class Todo {
  @IsString()
  title: string;
 
  @IsBoolean()
  done: boolean;
}
