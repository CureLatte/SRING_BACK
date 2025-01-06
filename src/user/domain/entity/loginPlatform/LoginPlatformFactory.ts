import DomainError from '../../../../common/entity/DomainError';
import KaKaoLoginPlatform from './KaKaoLoginPlatform';
import LoginPlatform from './LoginPlatform';

export default class LoginPlatformFactory {
	public static getLoginPlatform(platform: string): LoginPlatform {
		const platformList: LoginPlatform[] = [new KaKaoLoginPlatform()];

		for (const loginPlatform of platformList) {
			if (platform === loginPlatform.name) {
				return loginPlatform;
			}
		}

		throw new DomainError('잘못된 플랫폼 입니다.');
	}
}
