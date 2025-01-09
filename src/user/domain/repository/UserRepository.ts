import User from '../entity/User';

export default interface UserRepository {
	create(): Promise<User>;
	save(user: User): Promise<User>;
	delete(user: User): Promise<void>;
}
