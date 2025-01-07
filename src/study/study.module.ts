import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import StudyControllerImpl from './interface/StudyControllerImpl';
import StudyFacade from './application/StudyFacade';
import StudyServiceImpl from './domain/service/StudyServiceImpl';
import StudyEntity from './infra/typeOrmEntity/Study.entity';
import StudyTypeOrmRepository from './infra/typeOrmRepository/StudyTypeOrmRepository';
import StudyContentEntity from './infra/typeOrmEntity/StudyContent.entity';
import StudyContentTypeOrmRepository from './infra/typeOrmRepository/StudyContentTypeOrmRepository';

Module({
	imports: [TypeOrmModule.forFeature([StudyEntity, StudyContentEntity])],
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
		{
			provide: 'StudyContentRepository',
			useClass: StudyContentTypeOrmRepository,
		},
	],
	exports: [TypeOrmModule],
});
export class StudyModule {}
