import UserInfo from './../src/UserInfo.js';

const newUserInfo = new UserInfo(28, 'male');

describe('UserInfo', function() {

  it('should calculate user input', function() {
    expect(newUserInfo.age).toEqual(28);
    expect(newUserInfo.gender).toEqual('male');
    expect(newUserInfo.gender).not.toEqual('female');
  });

  it('should calculate user age in Mercury years', function () {
    expect(newUserInfo.mercury).toEqual(117);
  });

  it('should calculate user age in Venus years', function () {
    expect(newUserInfo.venus).toEqual(45);
  });

  it('should calculate user age in Mars years', function () {
    expect(newUserInfo.mars).toEqual(15);
  });

  it('should calculate user age in Jupiter years', function () {
    expect(newUserInfo.jupiter).toEqual(2);
  });

  it('should calculate remaining life expectancy for a male', function () {
    expect(newUserInfo.maleExpectancy).toEqual(48);
  });

  it('should calculate remaining life expectancy for a female', function () {
    expect(newUserInfo.femaleExpectancy).toEqual(53);
  });

  // it('should calculate the amount of years left to live on a specific planet', function () {
  //   let femaleLifeExpectancy = 81 * 365;
  //   let maleLifeExpectancy = 76 * 365;
  //   let testLifeExpectancy = maleLifeExpectancy - newUserInfoInDays;
  //   let mercuryLifeExpectancy = parseInt((testLifeExpectancy / 88).toFixed(0));
  //   expect(mercuryLifeExpectancy).toEqual(199);
  // });
});
