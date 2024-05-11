import { Module } from '@nestjs/common';
import { ProducersService } from './producers.service';
import { ProducersController } from './producers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Producer } from 'src/producers/entities/producer.entity';

@Module({
  imports: [SequelizeModule.forFeature([Producer])],
  controllers: [ProducersController],
  providers: [ProducersService],
})
export class ProducersModule {}
