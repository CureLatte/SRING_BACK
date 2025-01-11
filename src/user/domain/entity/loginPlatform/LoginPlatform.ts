import UserLoginInfo from '../UserLoginInfo';
import User from '../User';
import { LoginToken, UserProfileInfo } from '../../dto/UserDto';

export default interface LoginPlatform {
	name: string;

	getTokenInfo(data: any): Promise<LoginToken>;
	getUserInfo(data: LoginToken): Promise<UserProfileInfo>;
}
