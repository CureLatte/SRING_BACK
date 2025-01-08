import AlarmController from './AlarmController';
import { Controller, Get, Inject, Next, Req, Res } from '@nestjs/common';
import AlarmFacade from '../application/AlarmFacade';
import { NextFunction, Response, Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Alarm')
@Controller('/alarm')
export default class AlarmControllerImpl implements AlarmController {
	alarmFacade: AlarmFacade;
	constructor(@Inject('AlarmFacade') alarmFacade: AlarmFacade) {
		this.alarmFacade = alarmFacade;
	}

	@Get('/')
	async alarmTest(
		@Req() req: Request,
		@Res() res: Response,
		@Next() next: NextFunction,
	): Promise<Response> {
		return res.status(200).json({
			ok: true,
		});
	}
}
