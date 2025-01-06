import DefaultEntity from '../../../common/entity/DefaultEntity';
import UserStatus from './userStatus/UserStatus';
import UserStatusFactory from './userStatus/UserStatusFactory';

export default class User extends DefaultEntity {
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
		this.status.setStatus(this);
	}
}
