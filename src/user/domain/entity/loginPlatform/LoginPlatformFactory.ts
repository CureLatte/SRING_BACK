import DomainError from '../../../../common/entity/DomainError';
import KaKaoLoginPlatform from './KaKaoLoginPlatform';
import LoginPlatform from './LoginPlatform';
import { Inject, Injectable, Module } from '@nestjs/common';
import { ModuleRef, NestFactory } from '@nestjs/core';
import { UserModule } from '../../../user.module';
import KakaoAPI from '../../repository/KakaoAPI';
import KaKaoAPIImpl from '../../../infra/api/KaKaoAPIImpl';
import TestKaKaoAPI from '../../../../../test/TestKaKaoAPI';

@Injectable()
export default class LoginPlatformFactory {
	static getLoginPlatform(platform: string): LoginPlatform {
		let kakaoImpl: KakaoAPI = new KaKaoAPIImpl();

		if (process.env.NODE_ENV === 'test') {
			kakaoImpl = new TestKaKaoAPI();
		}

		const platformList: LoginPlatform[] = [
			new KaKaoLoginPlatform(kakaoImpl),
		];

		for (const loginPlatform of platformList) {
			if (platform === loginPlatform.name) {
				return loginPlatform;
			}
		}

		throw new DomainError('잘못된 플랫폼 입니다.');
	}
}
