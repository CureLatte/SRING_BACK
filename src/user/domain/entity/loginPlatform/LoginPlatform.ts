import UserLoginInfo from '../UserLoginInfo';

export default interface LoginPlatform {
	name: string;

	setAccessToken(userLoginInfo: UserLoginInfo): void;
}
