import FakeUserRepository from '@modules/users/repositories/fakes/FakeUser.repository';
import FakeActivitiesRepository from '@modules/activities/repositories/fakes/FakeActivities.respository';
import InsertActivityService from '../InsertActivity.service';

let fakeUserRepository: FakeUserRepository;
let fakeActivitiesRepository: FakeActivitiesRepository;
let insertActivityService: InsertActivityService;

describe('InsertActivityService', () => {
  beforeEach(() => {
    fakeActivitiesRepository = new FakeActivitiesRepository();
    fakeActivitiesRepository = new FakeActivitiesRepository();
    fakeUserRepository = new FakeUserRepository();

    insertActivityService = new InsertActivityService(fakeActivitiesRepository);
  });

    it('should be able to insert new activity', async () => {
      const user = await fakeUserRepository.create({
        fullname: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456789',
      });

      const activity = await insertActivityService.execute({
        user_id: user.id,
        time: '2:00',
        date: new Date(),
        type: 'run',
      });

      expect(activity).toHaveProperty('id');
    });
});
