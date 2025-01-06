import BaseDomain from '../../../common/entity/BaseDomain';
import LoginPlatform from './loginPlatform/LoginPlatform';
import LoginPlatformFactory from './loginPlatform/LoginPlatformFactory';

export default class UserLoginInfo extends BaseDomain {
	userId: number;
	platform: LoginPlatform;

	constructor(data: any) {
		super(data);
		this.userId = data.userId;
		this.platform = LoginPlatformFactory.getLoginPlatform(data.platform);
	}
}
