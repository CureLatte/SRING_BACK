import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import { Entity } from 'typeorm';
import StudyMemberRole from '../../domain/entity/StudyMemberRole';

@Entity('study_member_role')
export default class StudyMemberRoleEntity extends TypeOrmBaseEntity {
	name: string;
	allowYn: boolean;

	toDomain() {
		return new StudyMemberRole({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,

			name: this.name,
			allowYn: this.allowYn,
		});
	}

	static fromDomain(domain: StudyMemberRole): StudyMemberRoleEntity {
		const entity = new StudyMemberRoleEntity();
		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.name = domain.name;
		entity.allowYn = domain.allowYn;

		return entity;
	}
}
