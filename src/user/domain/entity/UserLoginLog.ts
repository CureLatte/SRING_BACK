import BaseDomain from '../../../common/entity/BaseDomain';

export default class UserLoginLog extends BaseDomain {
	userId: number;
	status: string;

	constructor(data: any) {
		super(data);
		this.userId = data.userId;
		this.status = data.status;
	}
}
