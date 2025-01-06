import DefaultEntity from '../../../common/entity/DefaultEntity';
import UserStatus from './userStatus/UserStatus';

export default class User extends DefaultEntity {
	name: string;
	profile: string;
	status: UserStatus;

	constructor(data: any) {
		super(data);
		this.id = data.id;
		this.name = data.name;
		this.profile = data.profile;
		this.status = data.status;
	}
}
