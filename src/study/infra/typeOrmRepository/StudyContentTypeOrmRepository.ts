import StudyContent from 'src/study/domain/entity/StudyContent';
import StudyContentRepository from '../../domain/repository/StudyContentRepository';
import { InjectRepository } from '@nestjs/typeorm';
import StudyContentEntity from '../typeOrmEntity/StudyContent.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class StudyContentTypeOrmRepository
	implements StudyContentRepository
{
	constructor(
		@InjectRepository(StudyContentEntity)
		private repository: Repository<StudyContentEntity>,
	) {}
	async save(studyContent: StudyContent): Promise<StudyContent> {
		const entity = await this.repository.save(
			StudyContentEntity.fromDomain(studyContent),
		);

		return entity.toDomain();
	}
}
