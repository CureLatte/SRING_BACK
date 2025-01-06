import BusinessError from './BusinessError';

export default class DomainError extends BusinessError {
	domainMessage: string;
	constructor(message: string) {
		super(500, '서버 에러입니다');
		this.domainMessage = message;
	}
}
