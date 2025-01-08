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
import StudyMemberTypeOrmRepository from './infra/typeOrmRepository/StudyMemberTypeOrmRepository';
import StudyMemberEntity from './infra/typeOrmEntity/StudyMember.entity';
import StudyMemberRoleEntity from './infra/typeOrmEntity/StudyMemberRole.entity';
import StudyMemberRoleTypeOrmRepository from './infra/typeOrmRepository/StudyMemberRoleTypeOrmRepository';

Module({
	imports: [
		TypeOrmModule.forFeature([
			StudyEntity,
			StudyContentEntity,
			StudyCategoryEntity,
			StudyPhotoEntity,
			StudyMemberEntity,
			StudyMemberRoleEntity,
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
		{
			provide: 'StudyMemberRepository',
			useClass: StudyMemberTypeOrmRepository,
		},
		{
			provide: 'StudyRoleRepository',
			useClass: StudyMemberRoleTypeOrmRepository,
		},
	],
	exports: [TypeOrmModule],
});
export class StudyModule {}
