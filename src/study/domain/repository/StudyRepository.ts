import Study from '../entity/Study';

export default interface StudyRepository {
	save(study: Study): Promise<Study>;
}
