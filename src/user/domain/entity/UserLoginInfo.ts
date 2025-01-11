import BaseDomain from '../../../common/entity/BaseDomain';
import LoginPlatform from './loginPlatform/LoginPlatform';

export default class UserLoginInfo extends BaseDomain {
	userId: number;
	platform: LoginPlatform;
	accessToken: string;

	constructor(data: any) {
		super(data);
		this.userId = data.userId;
		this.platform = data.platform;
		this.accessToken = data.accessToken;
	}
}
