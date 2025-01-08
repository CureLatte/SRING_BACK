import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import StudyContentComment from '../../domain/entity/StudyContentComment';
import { Entity } from 'typeorm';

@Entity('study_content_comment')
export default class StudyContentCommentEntity extends TypeOrmBaseEntity {
	memberId: number;
	contentId: number;
	comment: string;

	toDomain(): StudyContentComment {
		return new StudyContentComment({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			memberId: this.memberId,
			contentId: this.contentId,
			comment: this.comment,
		});
	}

	static fromDomain(domain: StudyContentComment): StudyContentCommentEntity {
		const entity = new StudyContentCommentEntity();

		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.contentId = domain.contentId;
		entity.memberId = domain.memberId;
		entity.comment = domain.comment;

		return entity;
	}
}
