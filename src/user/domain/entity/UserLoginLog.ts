import BaseDomain from '../../../common/entity/BaseDomain';
import UserLogStatus from './userLogStatus/UserLogStatus';
import UserLogStatusFactory from './userLogStatus/UserLogStatusFactory';

export default class UserLoginLog extends BaseDomain {
	userId: number;
	status: UserLogStatus;

	constructor(data: any) {
		super(data);
		this.userId = data.userId;
		this.status = data.status;
	}
}
