import UserController from './UserController';
import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';
import ResponseDto from '../../common/entity/ResponseDto';
import BusinessError from '../../common/entity/BusinessError';

@Controller('/user')
export default class UserControllerImpl implements UserController {
	@Get('/')
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
