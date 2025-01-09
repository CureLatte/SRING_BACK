import BaseDomain from '../../../common/entity/BaseDomain';
import UserStatus from './userStatus/UserStatus';
import UserStatusFactory from './userStatus/UserStatusFactory';
import DeactivateUserStatus from './userStatus/DeactivateUserStatus';
import UserLoginLog from './UserLoginLog';
import { UserProfileInfo } from '../dto/UserDto';

export default class User extends BaseDomain {
	name: string;
	nickName: string;
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

	profileUpdate(profileInfo: UserProfileInfo) {
		this.name = profileInfo.name;
		this.profile = profileInfo.profile;
		this.nickName = profileInfo.nickName;
	}

	login() {
		this.status.login(this);
	}

	withdraw() {
		this.status = new DeactivateUserStatus();
	}
}
