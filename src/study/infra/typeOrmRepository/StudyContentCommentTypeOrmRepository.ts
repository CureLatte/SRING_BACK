import StudyContentCommentRepository from '../../domain/repository/StudyContentCommentRepository';
import { InjectRepository } from '@nestjs/typeorm';
import StudyContentCommentEntity from '../typeOrmEntity/StudyContentComment.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import StudyContentComment from 'src/study/domain/entity/StudyContentComment';

@Injectable()
export default class StudyContentCommentTypeOrmRepository
	implements StudyContentCommentRepository
{
	constructor(
		@InjectRepository(StudyContentCommentEntity)
		private repository: Repository<StudyContentCommentEntity>,
	) {}

	save(
		studyContentComment: StudyContentComment,
	): Promise<StudyContentComment> {
		throw new Error('Method not implemented.');
	}
}
