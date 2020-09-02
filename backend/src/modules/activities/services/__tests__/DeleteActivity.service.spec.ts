import FakeUserRepository from '@modules/users/repositories/fakes/FakeUser.repository';
import FakeActivitiesRepository from '@modules/activities/repositories/fakes/FakeActivities.respository';
import DeleteActivityService from '../DeleteActivity.service';

let fakeUserRepository: FakeUserRepository;
let fakeActivitiesRepository: FakeActivitiesRepository;
let deleteActivity: DeleteActivityService;

describe('DeleteActivityService', () => {
  beforeEach(() => {
    fakeActivitiesRepository = new FakeActivitiesRepository();
    fakeActivitiesRepository = new FakeActivitiesRepository();
    fakeUserRepository = new FakeUserRepository();

    deleteActivity = new DeleteActivityService(fakeActivitiesRepository);
  });

  it('should be able to delete activity', async () => {
    const user = await fakeUserRepository.create({
      fullname: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789',
    });

    const activity1 = await fakeActivitiesRepository.create({
      user_id: user.id,
      time: '2:00',
      date: new Date(),
      type: 'run',
    });

    const activity2 = await fakeActivitiesRepository.create({
      user_id: user.id,
      time: '2:00',
      date: new Date(),
      type: 'bike',
    });

    await deleteActivity.execute(activity2.id);
    const activities = await fakeActivitiesRepository.findByUserId(user.id);

    expect(activities).toEqual([activity1]);
  });
});
