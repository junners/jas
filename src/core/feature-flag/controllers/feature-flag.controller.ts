import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeatureFlagService } from '../services/feature-flag.service';

@Controller('/services/v1/feature-flag')
@ApiTags('Feature Flag')
export class FeatureFlagController {
  constructor(private readonly service: FeatureFlagService) {}

  @Get(':projectName/:featureName')
  async getFeature(
    @Param('projectName') projectName: string,
    @Param('featureName') featureName: string,
  ): Promise<boolean> {
    return await this.service.isFeatureEnabled(featureName, projectName);
  }
}
