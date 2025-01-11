import { Repository } from 'typeorm';

export default interface BaseTypeOrmRepository<T> {
	repository: Repository<T>;
}
