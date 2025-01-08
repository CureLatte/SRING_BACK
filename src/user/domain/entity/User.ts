import BaseDomain from '../../../common/entity/BaseDomain';
import UserStatus from './userStatus/UserStatus';
import UserStatusFactory from './userStatus/UserStatusFactory';
import DeactivateUserStatus from './userStatus/DeactivateUserStatus';
import UserLoginLog from './UserLoginLog';

export default class User extends BaseDomain {
	name: string;
	profile: string;
	status: UserStatus;

	constructor(data: any) {
		super(data);
		this.id = data.id;
		this.name = data.name;
		this.profile = data.profile;
		// user Status
		this.status = UserStatusFactory.getUserStatus(data.status);
	}

	login() {
		this.status.login(this);
	}

	withdraw() {
		this.status = new DeactivateUserStatus();
	}
}
