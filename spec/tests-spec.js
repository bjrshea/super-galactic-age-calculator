import { UserAge } from './../src/backend.js';

describe('User Age', function() {

  it('should calculate user age', function() {
    let userAge = new UserAge(28);
    expect(userAge.age).toEqual(28);
  });

  it('should multiply user age by 365', function () {
    let userAge = new UserAge(28);
    let userAgeInDays = userAge.age * 365;
    expect(userAgeInDays).toEqual(10220);
  });

  it('should multiply user age by 365', function () {
    let userAge = new UserAge(28);
    let userAgeInDays = userAge.age * 365;
    let mercuryAge = parseInt((userAgeInDays / 88).toFixed(0));
    expect(mercuryAge).toEqual(117);
  });

});
