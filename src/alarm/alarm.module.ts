import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AlarmControllerImpl from './interface/AlarmControllerImpl';
import AlarmFacade from './application/AlarmFacade';
import AlarmServiceImpl from './domain/service/AlarmServiceImpl';
import AlarmCenterEntity from './infra/typeOrmEntity/AlarmCenter.entity';
import AlarmCenterTypeOrmRepository from './infra/typeOrmRepository/AlarmCenterTypeOrmRepository';

@Module({
	imports: [TypeOrmModule.forFeature([AlarmCenterEntity])],
	controllers: [AlarmControllerImpl],
	providers: [
		{
			provide: 'AlarmFacade',
			useClass: AlarmFacade,
		},
		{
			provide: 'AlarmService',
			useClass: AlarmServiceImpl,
		},
		{
			provide: 'AlarmCenterRepository',
			useClass: AlarmCenterTypeOrmRepository,
		},
	],
	exports: [TypeOrmModule],
})
export class AlarmModule {}
