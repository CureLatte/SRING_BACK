import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../src/app.module';
import TestKaKaoAPI from '../../TestKaKaoAPI';

export const getUserModule = async (): Promise<TestingModule> => {
	const module = await Test.createTestingModule({
		imports: [AppModule],
	})
		.overrideProvider('KaKaoAPI')
		.useClass(TestKaKaoAPI)

		.compile();

	return module;
};
