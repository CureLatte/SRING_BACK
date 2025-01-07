import BaseDomain from '../../../common/entity/BaseDomain';

export default class AlarmCenter extends BaseDomain {
	userId: number;
	content: string;
	location: string;
	readYn: boolean;

	constructor(data: any) {
		super(data);

		this.userId = data.userId;
		this.content = data.content;
		this.location = data.location;
		this.readYn = data.readYn;
	}
}
