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

  it('should calculate user age in Mercury years', function () {
    let userAge = new UserAge(28);
    let userAgeInDays = userAge.age * 365;
    let mercuryAge = parseInt((userAgeInDays / 88).toFixed(0));
    expect(mercuryAge).toEqual(116);
  });

  it('should calculate user age in Venus years', function () {
    let userAge = new UserAge(28);
    let userAgeInDays = userAge.age * 365;
    let venusAge = parseInt((userAgeInDays / 225).toFixed(0));
    expect(venusAge).toEqual(45);
  });

  it('should calculate user age in Mars years', function () {
    let userAge = new UserAge(28);
    let userAgeInDays = userAge.age * 365;
    let marsAge = parseInt((userAgeInDays / 687).toFixed(0));
    expect(marsAge).toEqual(15);
  });

  it('should calculate user age in Jupiter years', function () {
    let userAge = new UserAge(28);
    let userAgeInDays = userAge.age * 365;
    let jupiterAge = parseInt((userAgeInDays / (11.8 * 365)).toFixed(0));
    expect(jupiterAge).toEqual(2);
  });

  it('should calculate the amount of years left to live on a specific planet', function () {
    let femaleLifeExpectancy = 81 * 365;
    let maleLifeExpectancy = 76 * 365;
    let userAge = new UserAge(28);
    let userAgeInDays = userAge.age * 365;
    let testLifeExpectancy = maleLifeExpectancy - userAgeInDays;
    let mercuryLifeExpectancy = parseInt((testLifeExpectancy / 88).toFixed(0));
    expect(mercuryLifeExpectancy).toEqual(199);
  });
});
