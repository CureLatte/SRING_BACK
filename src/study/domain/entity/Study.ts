import BaseDomain from '../../../common/entity/BaseDomain';

export default class Study extends BaseDomain {
	categoryId: number;
	name: string;
	contactType: string;
	explain: string;
	memberShip: number;

	constructor(data: any) {
		super(data);
		this.categoryId = data.categoryId;
		this.name = data.name;
		this.contactType = data.contactType;
		this.explain = data.explain;
		this.memberShip = data.memberShip;
	}
}
