import DefaultEntity from '../../../common/entity/DefaultEntity';
import LoginPlatform from './loginPlatform/LoginPlatform';
import LoginPlatformFactory from './loginPlatform/LoginPlatformFactory';

export default class UserLoginInfo extends DefaultEntity {
	userId: number;
	platform: LoginPlatform;

	constructor(data: any) {
		super(data);
		this.platform = LoginPlatformFactory.getLoginPlatform(data.platform);
	}
}
