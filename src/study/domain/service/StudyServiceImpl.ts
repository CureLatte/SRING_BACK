import StudyService from './StudyService';
import { Inject, Injectable } from '@nestjs/common';
import StudyRepository from '../repository/StudyRepository';

@Injectable()
export default class StudyServiceImpl implements StudyService {
	constructor(
		@Inject('StudyRepository') private studyRepository: StudyRepository,
	) {}
}
