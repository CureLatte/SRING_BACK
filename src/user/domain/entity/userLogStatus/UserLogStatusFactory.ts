import LoginStatus from './LoginStatus';
import LogoutStatus from './LogoutStatus';
import UserLogStatus from './UserLogStatus';

export default class UserLogStatusFactory {
	static getUserLoginStatus(status: string) {
		const statusLogList: UserLogStatus[] = [
			new LoginStatus(),
			new LogoutStatus(),
		];
		for (const userLog of statusLogList) {
			if (status === userLog.name) {
				return userLog;
			}
		}
	}
}
