import User from '../User';
import UserStatus from './UserStatus';
import BusinessError from '../../../../common/entity/BusinessError';

export default class LoginUserStatus implements UserStatus {
	name: string = 'LOGIN';
	login(user: User): void {
		throw new BusinessError(400, '이미 로그인 되었습니다!');
	}
}
