import StudyCategory from '../entity/StudyCategory';

export default interface StudyCategoryRepository {
	save(studyCategory: StudyCategory): Promise<StudyCategory>;
}
