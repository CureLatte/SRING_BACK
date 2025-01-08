import UserLoginInfo from '../UserLoginInfo';
import LoginPlatform from './LoginPlatform';

export default class KaKaoLoginPlatform implements LoginPlatform {
	name: string = 'KAKAO';

	setAccessToken(userLoginInfo: UserLoginInfo): void {}
}
