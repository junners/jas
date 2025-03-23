import { plainToInstance } from 'class-transformer';
import {
  IsNumber,
  IsString,
  validateSync,
  ValidationError,
} from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  APP_PORT: number;

  @IsString()
  PG_DATABASE_URL: string;
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
