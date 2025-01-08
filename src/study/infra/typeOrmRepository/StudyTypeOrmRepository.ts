import StudyRepository from '../../domain/repository/StudyRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import StudyEntity from '../typeOrmEntity/Study.entity';
import { Repository } from 'typeorm';
import Study from 'src/study/domain/entity/Study';

@Injectable()
export default class StudyTypeOrmRepository implements StudyRepository {
	constructor(
		@InjectRepository(StudyEntity)
		private repository: Repository<StudyEntity>,
	) {}

	async save(study: Study): Promise<Study> {
		const entity = await this.repository.save(
			StudyEntity.fromDomain(study),
		);

		return entity.toDomain();
	}
}
