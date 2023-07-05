import { IsString, IsNotEmpty, IsUrl, ValidateNested, IsArray, ArrayNotEmpty, IsBoolean } from 'class-validator';

class FrameworkDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  whyGoodOption: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  link: string;
}
class ColorPaletteDTO {
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @IsArray()
  colors: ColorDTO[];
}

class ColorSchemeDTO {
  @IsString()
  whyGoodOption: string;
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @IsArray()
  colorPalette: ColorPaletteDTO;
}

export class ColorDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  hex: string;

  @IsString()
  @IsNotEmpty()
  rgb: string;
}

class FrontendDTO {
  @ValidateNested()
  framework: FrameworkDTO;

  @ValidateNested()
  colorScheme: ColorSchemeDTO;

  @IsString()
  projectId: string;

  @IsArray()
  todoList: string; 
}

class DatabaseDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  whyGoodOption: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  link: string;

  @IsString()
  @IsNotEmpty()
  schema: string;
}

class BackendDTO {
  @ValidateNested()
  framework: FrameworkDTO;

  @ValidateNested()
  database: DatabaseDTO;

  @IsArray()
  todoList: string; 
}

export class ProjectDTO {
  @IsString()
  @IsNotEmpty()
  idea: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  summary: string;

  @ValidateNested()
  frontend: FrontendDTO;

  @ValidateNested()
  backend: BackendDTO;
}

export class Todo {
  @IsString()
  title: string;
 
  @IsBoolean()
  done: boolean;

  backendId: string;
  frontendId: string
}

