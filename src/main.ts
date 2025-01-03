import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { MyLogger } from './common/Logger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: new MyLogger(),
	});

	// swagger Setting
	const config = new DocumentBuilder()
		.setTitle('Cats example')
		.setDescription('The cats API description')
		.setVersion('1.0')
		.addTag('cats')
		.build();
	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('/api', app, documentFactory);

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
