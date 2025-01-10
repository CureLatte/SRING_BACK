import User from '../entity/User';
import { Repository } from 'typeorm';

export default interface UserRepository {
	create(): Promise<User>;
	save(user: User): Promise<User>;
	delete(user: User): Promise<void>;
}
