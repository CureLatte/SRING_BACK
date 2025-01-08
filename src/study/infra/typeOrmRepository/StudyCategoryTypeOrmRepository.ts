import StudyCategoryRepository from '../../domain/repository/StudyCategoryRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import StudyCategoryEntity from '../typeOrmEntity/StudyCategory.entity';
import { Repository } from 'typeorm';
import StudyCategory from 'src/study/domain/entity/StudyCategory';

@Injectable()
export default class StudyCategoryTypeOrmRepository
	implements StudyCategoryRepository
{
	constructor(
		@InjectRepository(StudyCategoryEntity)
		private repository: Repository<StudyCategoryEntity>,
	) {}

	save(studyCategory: StudyCategory): Promise<StudyCategory> {
		throw new Error('Method not implemented.');
	}
}
