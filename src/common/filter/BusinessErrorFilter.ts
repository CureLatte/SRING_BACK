import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch } from '@nestjs/common';
import BusinessError from '../entity/BusinessError';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { MyLogger } from '../Logger';

@Catch()
export default class BusinessErrorFilter extends BaseExceptionFilter {
	logger = new MyLogger(BusinessError.name);
	catch(exception: BusinessError, host: ArgumentsHost) {
		const ctx: HttpArgumentsHost = host.switchToHttp();
		const response = ctx.getResponse();

		let httpError = null;
		console.log(exception);

		this.logger.error(`\n[ERROR]\n${exception.stack.toString()}`);

		if (exception instanceof BusinessError) {
			// status: XXX, message: 'XXX' 형식의 에러인지 판단합니다.
			httpError = {
				status: exception.getStatus(), // throw new HttpError()로 던진 첫번째 매개변수 status 값
				message: exception.message, // throw new HttpError()로 던진 두번째 매개변수 message 값
			};
		} else {
			// XXXX() is not a function와 같은 서버 자체에서의 오류일때, 서버 오류로 처리합니다.
			httpError = {
				status: 500,
				message: '서버 오류입니다.',
			};
		}

		const { status, message } = httpError;
		// 클라이언트에게 응답을 넘겨줍니다. (위 조건분기에 따른 객체의 값들)
		return response.status(status).json({
			status: status,
			data: {
				message: message,
			},
		});
	}
}
