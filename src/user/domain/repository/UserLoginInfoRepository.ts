import UserLoginInfo from '../entity/UserLoginInfo';
import { Repository } from 'typeorm';

export default interface UserLoginInfoRepository {
	save(userLoginInfo: UserLoginInfo): Promise<UserLoginInfo>;
}
