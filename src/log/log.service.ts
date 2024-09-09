import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './log.entity';

@Injectable()
export class LogService {
  constructor(@InjectRepository(Log) private logRepo: Repository<Log>) {}

  async logAction(action: string, description: string) {
    const log = this.logRepo.create({ action, description });
    await this.logRepo.save(log);
  }
}
