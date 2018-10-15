export default class UserInfo {

  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
    this.mercury = parseInt((this.age / .24).toFixed(0));
    this.venus = parseInt((this.age / .62).toFixed(0));
    this.mars = parseInt((this.age / 1.88).toFixed(0));
    this.jupiter = parseInt((this.age / 11.86).toFixed(0));
    this.maleExpectancy = 76 - this.age;
    this.femaleExpectancy = 81 - this.age;
  }

  // maleLifeExpectancy(age) {
  //   age
  // }
  //
  // demographic() {
  //   if (this.gender == 'male') {
  //     return maleLifeExpectancy();
  //   } else {
  //     return 'N/A'
  //   }
  // }
  //
  // function FemaleLifeExpectancy (mercury, venus, mars, jupiter) {
  //   this.mercury = mercury;
  //   this.venus = venus;
  //   this.mars = mars;
  //   this.jupiter = jupiter;
  // }
}
