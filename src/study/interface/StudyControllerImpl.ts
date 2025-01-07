import StudyController from './StudyController';
import { Controller, Inject } from '@nestjs/common';
import AlarmFacade from '../../alarm/application/AlarmFacade';

@Controller('/study')
export default class StudyControllerImpl implements StudyController {
	constructor(
		@Inject('AlarmFacade') private readonly alarmFacade: AlarmFacade,
	) {}
}
