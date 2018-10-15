import UserInfo from './../src/UserInfo.js';

describe('UserInfo', function() {

  it('should calculate user input', function() {
    let newUserInfo = new UserInfo(28, 'male');
    expect(newUserInfo.age).toEqual(28);
    expect(newUserInfo.gender).toEqual('male');
    expect(newUserInfo.gender).not.toEqual('female');
  });

  it('should calculate user age in Mercury years', function () {
    let newUserInfo = new UserInfo(28);
    expect(newUserInfo.mercury).toEqual(117);
  });

  it('should calculate user age in Venus years', function () {
    let newUserInfo = new UserInfo(32);
    expect(newUserInfo.venus).toEqual(52);
  });

  it('should calculate user age in Mars years', function () {
    let newUserInfo = new UserInfo(21);
    expect(newUserInfo.mars).toEqual(11);
  });

  it('should calculate user age in Jupiter years', function () {
    let newUserInfo = new UserInfo(17);
    expect(newUserInfo.jupiter).toEqual(1);
  });

  it('should calculate remaining life expectancy on Earth for a male', function () {
    let newUserInfo = new UserInfo(28);
    expect(newUserInfo.maleExpectancy).toEqual(48);
  });

  it('should calculate remaining life expectancy on Earth for a female', function () {
    let newUserInfo = new UserInfo(28);
    expect(newUserInfo.femaleExpectancy).toEqual(53);
  });

  it('should calculate remaining life expectancy on all planets for a male', function () {
    let newUserInfo = new UserInfo(28, 'male');
    expect(newUserInfo.maleMercury).toEqual(200);
    expect(newUserInfo.maleVenus).toEqual(77);
    expect(newUserInfo.maleMars).toEqual(26);
    expect(newUserInfo.maleJupiter).toEqual(4);
  });

  it('should calculate remaining life expectancy on all planets for a female', function () {
    let newUserInfo = new UserInfo(28, 'female');
    expect(newUserInfo.femaleMercury).toEqual(221);
    expect(newUserInfo.femaleVenus).toEqual(85);
    expect(newUserInfo.femaleMars).toEqual(28);
    expect(newUserInfo.femaleJupiter).toEqual(4);
  });

  it('should show that the if/else statement only returns a value for male life expectancy', function () {
    let newUserInfo = new UserInfo(28, 'male');
    expect(newUserInfo.femaleMercury).toEqual(undefined);
    expect(newUserInfo.maleMercury).toEqual(200);
  });
});
