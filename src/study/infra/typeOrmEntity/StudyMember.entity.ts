import { Entity } from 'typeorm';
import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import StudyMember from '../../domain/entity/StudyMember';

@Entity('study_member')
export default class StudyMemberEntity extends TypeOrmBaseEntity {
	studyId: number;
	userId: number;
	roleId: number;

	toDomain() {
		return new StudyMember({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			studyId: this.studyId,
			userId: this.userId,
			roleId: this.roleId,
		});
	}

	static fromDomain(domain: StudyMember): StudyMemberEntity {
		const entity = new StudyMemberEntity();

		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.studyId = domain.studyId;
		entity.userId = domain.userId;
		entity.roleId = domain.roleId;

		return entity;
	}
}
