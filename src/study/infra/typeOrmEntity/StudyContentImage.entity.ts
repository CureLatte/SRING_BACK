import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import { Column, Entity } from 'typeorm';
import StudyContentImage from '../../domain/entity/StudyContentImage';

@Entity('study_content_image')
export default class StudyContentImageEntity extends TypeOrmBaseEntity {
	@Column()
	contentId: number;

	@Column()
	url: string;

	toDomain() {
		return new StudyContentImage({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			contentId: this.contentId,
			url: this.url,
		});
	}

	static fromDomain(domain: StudyContentImage): StudyContentImageEntity {
		const entity = new StudyContentImageEntity();

		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.contentId = domain.contentId;
		entity.url = domain.url;

		return entity;
	}
}
