import StudyMemberRole from 'src/study/domain/entity/StudyMemberRole';
import StudyMemberRoleRepository from '../../domain/repository/StudyMemberRoleRepository';
import { InjectRepository } from '@nestjs/typeorm';
import StudyMemberRoleEntity from '../typeOrmEntity/StudyMemberRole.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class StudyMemberRoleTypeOrmRepository
	implements StudyMemberRoleRepository
{
	constructor(
		@InjectRepository(StudyMemberRoleEntity)
		private repository: Repository<StudyMemberRoleEntity>,
	) {}

	save(studyRole: StudyMemberRole): Promise<StudyMemberRole> {
		throw new Error('Method not implemented.');
	}
}
