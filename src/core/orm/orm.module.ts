import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { coreOrmOptions } from './datasources/core.datasource';

const coreOrmFactory = (): TypeOrmModuleOptions => ({
  ...coreOrmOptions,
  name: 'core',
});

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: coreOrmFactory,
      name: 'feature-flag',
    }),
  ],
  exports: [OrmModule],
  providers: [],
})
export class OrmModule extends TypeOrmModule {}
