import AlarmCenter from '../entity/AlarmCenter';

export default interface AlarmCenterRepository {
	save(alarmCenter: AlarmCenter): Promise<AlarmCenter>;
}
