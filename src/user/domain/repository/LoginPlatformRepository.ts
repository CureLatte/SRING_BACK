import LoginPlatform from '../entity/loginPlatform/LoginPlatform';
import { Repository } from 'typeorm';

export default interface LoginPlatformRepository {
	getLoginPlatform(platform: string): Promise<LoginPlatform>;
}
