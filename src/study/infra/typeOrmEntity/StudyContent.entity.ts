import { Column, Entity } from 'typeorm';
import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import StudyContent from '../../domain/entity/StudyContent';

@Entity('study_content')
export default class StudyContentEntity extends TypeOrmBaseEntity {
	@Column()
	studyId: number;

	@Column()
	memberId: number;

	@Column()
	title: string;
	@Column()
	type: string;
	@Column()
	fixYn: boolean;

	@Column()
	publicYn: boolean;

	toDomain() {
		return new StudyContent({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			studyId: this.studyId,
			memberId: this.memberId,
			title: this.title,
			type: this.type,
			fixYn: this.fixYn,
		});
	}

	static fromDomain(domain: StudyContent): StudyContentEntity {
		const entity = new StudyContentEntity();
		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.studyId = domain.studyId;
		entity.memberId = domain.memberId;
		entity.title = domain.title;
		entity.type = domain.type;
		entity.fixYn = domain.fixYn;

		return entity;
	}
}
