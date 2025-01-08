import { Column, Entity } from 'typeorm';
import TypeOrmBaseEntity from '../../../common/entity/TypeOrmBaseEntity';
import Study from '../../domain/entity/Study';

@Entity('study')
export default class StudyEntity extends TypeOrmBaseEntity {
	@Column()
	categoryId: number;

	@Column()
	name: string;

	@Column()
	contactType: string;

	@Column()
	explain: string;

	@Column()
	memberShip: number;

	toDomain(): Study {
		return new Study({
			id: this.id,
			categoryId: this.categoryId,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
			name: this.name,
			contactType: this.contactType,
			explain: this.explain,
			memberShip: this.memberShip,
		});
	}

	static fromDomain(domain: Study): StudyEntity {
		const entity = new StudyEntity();

		entity.id = domain.id;
		entity.createdAt = domain.createdAt;
		entity.updatedAt = domain.updatedAt;
		entity.deletedAt = domain.deletedAt;

		entity.name = domain.name;
		entity.categoryId = domain.categoryId;
		entity.explain = domain.explain;
		entity.contactType = domain.contactType;
		entity.memberShip = domain.memberShip;

		return entity;
	}
}
