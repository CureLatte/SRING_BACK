import StudyContentImage from 'src/study/domain/entity/StudyContentImage';
import StudyContentImageRepository from '../../domain/repository/StudyContentImageRepository';
import { InjectRepository } from '@nestjs/typeorm';
import StudyContentImageEntity from '../typeOrmEntity/StudyContentImage.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class StudyContentImageTypeOrmRepository
	implements StudyContentImageRepository
{
	constructor(
		@InjectRepository(StudyContentImageEntity)
		private repository: Repository<StudyContentImageEntity>,
	) {}
	async save(
		studyContentImage: StudyContentImage,
	): Promise<StudyContentImage> {
		throw new Error('Method not implemented.');
	}
}
