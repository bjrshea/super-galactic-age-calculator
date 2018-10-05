import { UserAge } from './../src/backend.js';

describe('User Age', function() {

  beforeEach(function() {
    userAge = new UserAge(28);
    userAgeInDays = userAge.age * 365;
  });

  it('should calculate user age', function() {
    expect(userAge.age).toEqual(28);
  });

  it('should multiply user age by 365', function () {
    expect(userAgeInDays).toEqual(10220);
  });
});
