import FakeUserRepository from '@modules/users/repositories/fakes/FakeUser.repository';
import FakeActivitiesRepository from '@modules/activities/repositories/fakes/FakeActivities.respository';
import GetActivitiesService from '../GetActivities.service';

let fakeUserRepository: FakeUserRepository;
let fakeActivitiesRepository: FakeActivitiesRepository;
let getActivitiesService: GetActivitiesService;

describe('GetActivitiesService', () => {
  beforeEach(() => {
    fakeActivitiesRepository = new FakeActivitiesRepository();
    fakeActivitiesRepository = new FakeActivitiesRepository();
    fakeUserRepository = new FakeUserRepository();

    getActivitiesService = new GetActivitiesService(fakeActivitiesRepository);
  });

  it('should be able to get activities', async () => {
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

    const activities = await getActivitiesService.execute(user.id);

    expect(activities).toEqual([activity1, activity2]);
  });
});
