import UserController from './UserController';
import { Controller, Get, Inject, Next, Req, Res } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';
import ResponseDto from '../../common/entity/ResponseDto';
import BusinessError from '../../common/entity/BusinessError';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import UserFacade from '../application/UserFacade';

@ApiTags('User')
@Controller('/user')
export default class UserControllerImpl implements UserController {
	userFacade: UserFacade;

	constructor(@Inject('UserFacade') userFacade: UserFacade) {
		this.userFacade = userFacade;
	}

	@Get('/')
	@ApiOperation({
		summary: 'hello',
	})
	async test(
		@Req() req: Request,
		@Res() res: Response,
		@Next() next: NextFunction,
	): Promise<Response> {
		return res.status(200).json(
			new ResponseDto<{ userId: number }>(200, {
				userId: 2,
			}),
		);
	}
}
