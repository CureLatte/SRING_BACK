import LoginPlatform from 'src/user/domain/entity/loginPlatform/LoginPlatform';
import LoginPlatformRepository from '../../domain/repository/LoginPlatformRepository';
import KaKaoLoginPlatform from '../../domain/entity/loginPlatform/KaKaoLoginPlatform';
import { Inject, Injectable } from '@nestjs/common';
import KakaoAPI from './KakaoAPI';

@Injectable()
export default class LoginPlatformAPI implements LoginPlatformRepository {
	constructor(@Inject('KaKaoAPI') private readonly kakaoAPI: KakaoAPI) {}

	async getLoginPlatform(platform: string): Promise<LoginPlatform> {
		const platformList: LoginPlatform[] = [
			new KaKaoLoginPlatform(this.kakaoAPI),
		];

		for (const loginPlatform of platformList) {
			if (platform === loginPlatform.name) {
				return loginPlatform;
			}
		}
	}
}
