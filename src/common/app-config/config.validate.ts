import { plainToInstance } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsString,
  validateSync,
  ValidationError,
} from 'class-validator';

class EnvironmentVariables {
  @IsString()
  DB_TYPE: string;
  @IsString()
  DB_HOST: string;
  @IsNumber()
  DB_PORT: number;
  @IsString()
  DB_USER: string;
  @IsString()
  DB_PASS: string;
  @IsString()
  DB_NAME: string;
  @IsBoolean()
  DB_SYNC: boolean;
  @IsNumber()
  APP_PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig: EnvironmentVariables = plainToInstance(
    EnvironmentVariables,
    config,
    {
      enableImplicitConversion: true,
    },
  );
  const errors: ValidationError[] = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
