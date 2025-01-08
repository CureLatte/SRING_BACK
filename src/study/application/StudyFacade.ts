import { Inject, Injectable } from '@nestjs/common';
import AlarmService from '../../alarm/domain/service/AlarmService';

@Injectable()
export default class StudyFacade {
	constructor(@Inject('AlarmService') private alarmService: AlarmService) {}
}
