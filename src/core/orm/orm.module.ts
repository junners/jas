import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import databaseConfig from 'src/common/app-config/database.config';

@Module({
  // imports: [TypeOrmModule.forRootAsync(databaseConfig.asProvider())],
})
export class OrmModule {}
