import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  override: true,
});

const isJest = process.argv.some((arg) => arg.includes('jest'));

export const coreOrmOptions: TypeOrmModuleOptions = {
  url: process.env.PG_DATABASE_URL,
  type: 'postgres',
  logging: 'all',
  schema: 'core',
  entities: [`${isJest ? '' : 'dist/'}**/*.entity{.ts,.js}`],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: '_typeorm_migrations',
  metadataTableName: '_typeorm_generated_columns_and_materialized_views',
};

export const connectionSource = new DataSource(
  coreOrmOptions as DataSourceOptions,
);
