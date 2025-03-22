import { Module } from '@nestjs/common';
import { FeatureFlagModule } from './core/feature-flag/feature-flag.module';

@Module({
  imports: [FeatureFlagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
