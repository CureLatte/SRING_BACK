import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLogger } from './common/Logger';

@Controller()
export class AppController {
	logger = new MyLogger(AppController.name);
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		this.logger.warn('warning!!');
		return this.appService.getHello();
	}
}
