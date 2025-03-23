import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v7 as uuidv7 } from 'uuid';

@Entity({ name: 'featureFlag', schema: 'feature-flag' })
@Unique('IndexOnNameAndProjectUnique', ['name', 'projectName'])
export class FeatureFlag {
  @PrimaryColumn('varchar', { length: 36 })
  id: string = uuidv7();

  @Column({ nullable: false, type: 'text' })
  @ApiProperty()
  name: string;

  @Column({ nullable: false, type: 'text' })
  @ApiProperty()
  projectName: string;

  @Column({ nullable: false })
  value: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
