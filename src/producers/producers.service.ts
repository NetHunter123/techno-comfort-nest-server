import { Injectable } from '@nestjs/common';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { Producer } from 'src/producers/entities/producer.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProducersService {
  constructor(
    @InjectModel(Producer)
    private producerModel: typeof Producer,
  ) {}

  create(createProducerDto: CreateProducerDto) {
    return 'This action adds a new producer';
  }

  findAll() {
    return this.producerModel.findAndCountAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} producer`;
  }

  update(id: number, updateProducerDto: UpdateProducerDto) {
    return `This action updates a #${id} producer`;
  }

  remove(id: number) {
    return `This action removes a #${id} producer`;
  }
}
