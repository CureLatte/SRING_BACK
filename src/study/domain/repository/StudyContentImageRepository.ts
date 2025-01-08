import StudyContentImage from '../entity/StudyContentImage';

export default interface StudyContentImageRepository {
	save(studyContentImage: StudyContentImage): Promise<StudyContentImage>;
}
