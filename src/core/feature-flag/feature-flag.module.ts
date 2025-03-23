import { Module } from '@nestjs/common';
import { FeatureFlag } from './feature-flag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureFlagController } from './controllers/feature-flag.controller';
import { FeatureFlagService } from './services/feature-flag.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeatureFlag], 'feature-flag')],
  controllers: [FeatureFlagController],
  providers: [FeatureFlagService],
})
export class FeatureFlagModule {}
