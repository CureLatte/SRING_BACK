import { Column, Entity } from 'typeorm';
import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import StudyCategory from '../../domain/entity/StudyCategory';
import Study from '../../domain/entity/Study';

@Entity('study_category')
export default class StudyCategoryEntity extends TypeOrmBaseEntity {
	@Column()
	name: string;

	@Column()
	order: number;

	toDomain(): StudyCategory {
		return new StudyCategory({
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			name: this.name,
			order: this.order,
		});
	}

	static fromDomain(domain: StudyCategory): StudyCategoryEntity {
		const entity = new StudyCategoryEntity();

		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.name = domain.name;
		entity.order = domain.order;

		return entity;
	}
}
