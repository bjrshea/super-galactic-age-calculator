import { UserAge } from './../src/backend.js';

describe('User Age', function() {

  it('should calculate user age', function() {
    let userAge = new UserAge(28);
    expect(userAge.age).toEqual(28);
  });

});
