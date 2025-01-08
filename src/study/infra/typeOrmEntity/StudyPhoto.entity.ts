import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import { Entity } from 'typeorm';
import StudyPhoto from '../../domain/entity/StudyPhoto';

@Entity('study_photo')
export default class StudyPhotoEntity extends TypeOrmBaseEntity {
	studyId: number;
	sequence: number;
	url: string;

	toDomain(): StudyPhoto {
		return new StudyPhoto({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			studyId: this.studyId,
			url: this.url,
			sequence: this.sequence,
		});
	}

	static fromDomain(domain: StudyPhoto): StudyPhotoEntity {
		const entity = new StudyPhotoEntity();
		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.studyId = domain.studyId;
		entity.url = domain.url;
		entity.sequence = domain.sequence;

		return entity;
	}
}
