import { Module } from '@nestjs/common';
import { FeatureFlagModule } from './core/feature-flag/feature-flag.module';
// import { OrmModule } from './core/orm/orm.module';
import { AppConfigModule } from './common/app-config/app-config.module';

@Module({
  imports: [AppConfigModule, FeatureFlagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
