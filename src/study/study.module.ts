import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import StudyControllerImpl from './interface/StudyControllerImpl';
import StudyFacade from './application/StudyFacade';
import StudyServiceImpl from './domain/service/StudyServiceImpl';
import StudyEntity from './infra/typeOrmEntity/Study.entity';
import StudyTypeOrmRepository from './infra/typeOrmRepository/StudyTypeOrmRepository';
import StudyContentEntity from './infra/typeOrmEntity/StudyContent.entity';
import StudyContentTypeOrmRepository from './infra/typeOrmRepository/StudyContentTypeOrmRepository';
import StudyCategoryTypeOrmRepository from './infra/typeOrmRepository/StudyCategoryTypeOrmRepository';
import StudyCategoryEntity from './infra/typeOrmEntity/StudyCategory.entity';
import StudyPhotoEntity from './infra/typeOrmEntity/StudyPhoto.entity';
import StudyPhotoTypeOrmRepository from './infra/typeOrmRepository/StudyPhotoTypeOrmRepository';

Module({
	imports: [
		TypeOrmModule.forFeature([
			StudyEntity,
			StudyContentEntity,
			StudyCategoryEntity,
			StudyPhotoEntity,
		]),
	],
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
		{
			provide: 'StudyCategoryRepository',
			useClass: StudyCategoryTypeOrmRepository,
		},
		{
			provide: 'StudyPhotoRepository',
			useClass: StudyPhotoTypeOrmRepository,
		},
	],
	exports: [TypeOrmModule],
});
export class StudyModule {}
