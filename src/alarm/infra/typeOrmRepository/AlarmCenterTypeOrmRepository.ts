import AlarmCenter from 'src/alarm/domain/entity/AlarmCenter';
import AlarmCenterRepository from '../../domain/repository/AlarmCenterRepository';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AlarmCenterEntity from '../typeOrmEntity/AlarmCenter.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class AlarmCenterTypeOrmRepository
	implements AlarmCenterRepository
{
	constructor(
		@InjectRepository(AlarmCenterEntity)
		repository: Repository<AlarmCenterEntity>,
	) {}
	save(alarmCenter: AlarmCenter): Promise<AlarmCenter> {
		throw new Error('Method not implemented.');
	}
}
