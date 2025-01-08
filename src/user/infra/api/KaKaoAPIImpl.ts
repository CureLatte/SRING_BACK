import { Inject, Injectable } from '@nestjs/common';
import KakaoAPI from '../../domain/repository/KakaoAPI';
import axios, { AxiosError } from 'axios';
import BusinessError from '../../../common/entity/BusinessError';
import { MyLogger } from '../../../common/Logger';

@Injectable()
export default class KaKaoAPIImpl implements KakaoAPI {
	clientKey: string = process.env.KAKAO_API_KEY;
	loginRedirectUrl: string = process.env.KAKAO_REDIRECT_URL;
	logger = new MyLogger('KaKaoAPIImpl');

	codeURl =
		'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=ec29249b22cef80108af80fca403ed73&redirect_uri=http://curelatte.co.kr:1996/user/signup/kakao';
	constructor() {}

	async getAccessToken(code: string): Promise<any> {
		try {
			console.log('accessToken', this.loginRedirectUrl);
			this.logger.log(`code: ${code}`);
			const response = await axios.post(
				'https://kauth.kakao.com/oauth/token',
				{
					grant_type: 'authorization_code',
					client_id: this.clientKey.toString(),
					redirect_uri: this.loginRedirectUrl.toString(),
					code: code,
				},
				{
					headers: {
						'Content-Type':
							'application/x-www-form-urlencoded;charset=utf-8',
					},
				},
			);

			return response.data;
		} catch (e) {
			this.logger.error(`error: ${e.message} `);
			if (e instanceof AxiosError) {
				// console.log(e.response.data);
				this.logger.error(
					`\ndata: ${JSON.stringify(e.response.data, null, ' ')}`,
				);
			} else {
				this.logger.error('[ERROR STACK]', e.stack);
			}

			throw new BusinessError(500, '서버에러입니다');
		}
	}
	async getUserInfo(accessToken: string): Promise<any> {
		try {
			const userInfoResponse = await axios.post(
				'https://kapi.kakao.com/v2/user/me',
				{},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Type':
							'application/x-www-form-urlencoded;charset=utf-8',
					},
				},
			);

			return userInfoResponse.data;
		} catch (err) {
			if (err instanceof AxiosError) {
				this.logger.error(
					`axiosResponse: ${JSON.stringify(err.response.data, null, ' ')}`,
				);
			} else {
				this.logger.error('[ERROR STACK]', err.stack);
			}

			throw new BusinessError(500, 'KAKAO API ERROR');
		}
	}
}
