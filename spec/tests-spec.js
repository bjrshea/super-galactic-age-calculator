import UserInfo from './../src/UserInfo.js';

const newUserInfo = new UserInfo(28, 'female');

describe('UserInfo', function() {

  it('should calculate user input', function() {
    expect(newUserInfo.age).toEqual(28);
    expect(newUserInfo.gender).toEqual('female');
    expect(newUserInfo.gender).not.toEqual('male');
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
});
