import UserLoginLog from '../entity/UserLoginLog';
import { Repository } from 'typeorm';
import UserLoginLogEntity from '../../infra/typeOrmEntity/UserLoginLog.entity';

export default interface UserLoginLogRepository {
	save(userLoginUser: UserLoginLog): Promise<UserLoginLog>;
	delete(userLoginUser: UserLoginLog): Promise<void>;
}
