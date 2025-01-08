import { Entity } from 'typeorm';
import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import StudyMember from '../../domain/entity/StudyMember';

@Entity('study_member')
export default class StudyMemberEntity extends TypeOrmBaseEntity {
	studyId: number;
	userId: number;
	roleId: number;

	toDomain() {
		throw new Error('Method not implemented.');
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
