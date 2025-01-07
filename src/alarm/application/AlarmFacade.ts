import { Inject, Injectable } from '@nestjs/common';
import AlarmService from '../domain/service/AlarmService';

@Injectable()
export default class AlarmFacade {
	alarmService: AlarmService;
	constructor(@Inject('AlarmService') alarmService: AlarmService) {
		this.alarmService = alarmService;
	}
}
