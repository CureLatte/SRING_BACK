import { Inject, Injectable } from '@nestjs/common';
import AlarmService from './AlarmService';
import AlarmCenterRepository from '../repository/AlarmCenterRepository';

@Injectable()
export default class AlarmServiceImpl implements AlarmService {
	alarmCenterRepository: AlarmCenterRepository;

	constructor(
		@Inject('AlarmCenterRepository')
		alarmCenterRepository: AlarmCenterRepository,
	) {
		this.alarmCenterRepository = alarmCenterRepository;
	}
}
