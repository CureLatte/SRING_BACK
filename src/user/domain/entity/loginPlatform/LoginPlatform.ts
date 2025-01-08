import UserLoginInfo from '../UserLoginInfo';
import User from '../User';

export default interface LoginPlatform {
	name: string;

	getTokenInfo(data: any): Promise<UserLoginInfo>;
	getUserInfo(data: any): Promise<User>;
}
