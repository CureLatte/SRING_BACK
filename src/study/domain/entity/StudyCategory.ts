import BaseDomain from '../../../common/entity/BaseDomain';

export default class StudyCategory extends BaseDomain {
	name: string;
	order: number;

	constructor(data: any) {
		super(data);
		this.name = data.name;
		this.order = data.order;
	}
}
