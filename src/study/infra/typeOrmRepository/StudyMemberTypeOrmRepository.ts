import { Injectable } from '@nestjs/common';
import StudyMemberRepository from '../../domain/repository/StudyMemberRepository';
import { InjectRepository } from '@nestjs/typeorm';
import StudyMemberEntity from '../typeOrmEntity/StudyMember.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class StudyMemberTypeOrmRepository
	implements StudyMemberRepository
{
	constructor(
		@InjectRepository(StudyMemberEntity)
		private repository: Repository<StudyMemberEntity>,
	) {}
}
