import StudyService from './StudyService';
import { Inject, Injectable } from '@nestjs/common';
import StudyRepository from '../repository/StudyRepository';
import StudyContentRepository from '../repository/StudyContentRepository';

@Injectable()
export default class StudyServiceImpl implements StudyService {
	constructor(
		@Inject('StudyRepository') private studyRepository: StudyRepository,
		@Inject('StudyContentRepository')
		private studyContentRepository: StudyContentRepository,
	) {}
}
