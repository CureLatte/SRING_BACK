import axios from 'axios';

describe('UserService', () => {
	test('kakaoLogin', async () => {
		const response = await axios.get(
			'https://kauth.kakao.com/oauth/authorize',
			{
				params: {
					client_id: 'ec29249b22cef80108af80fca403ed73',
					redirect_uri: 'https://curelatte.com:1996/user/kakaoLogin',
					response_type: 'code',
				},
			},
		);

		console.log(response.data);
	});
});
