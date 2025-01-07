import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import StudyControllerImpl from './interface/StudyControllerImpl';
import StudyFacade from './application/StudyFacade';
import StudyServiceImpl from './domain/service/StudyServiceImpl';
import StudyEntity from './infra/typeOrmEntity/Study.entity';
import StudyTypeOrmRepository from './infra/typeOrmRepository/StudyTypeOrmRepository';

Module({
	imports: [TypeOrmModule.forFeature([StudyEntity])],
	controllers: [StudyControllerImpl],
	providers: [
		{
			provide: 'StudyFacade',
			useClass: StudyFacade,
		},
		{
			provide: 'StudyService',
			useClass: StudyServiceImpl,
		},
		{
			provide: 'StudyRepository',
			useClass: StudyTypeOrmRepository,
		},
	],
	exports: [TypeOrmModule],
});
export class StudyModule {}
