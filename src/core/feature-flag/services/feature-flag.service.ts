import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeatureFlag } from '../feature-flag.entity';

@Injectable()
export class FeatureFlagService {
  constructor(
    @InjectRepository(FeatureFlag, 'feature-flag')
    private featureFlagRepository: Repository<FeatureFlag>,
  ) {}

  public async isFeatureEnabled(
    name: string,
    projectName: string,
  ): Promise<boolean> {
    const featureFlag = await this.featureFlagRepository.findOneBy({
      name,
      projectName,
    });

    return !!featureFlag?.value;
  }
}
