export default class UserInfo {
  
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
    this.mercury = parseInt(((this.age * 365) / 88).toFixed(0));
    this.venus = parseInt(((this.age * 365) / 225).toFixed(0));
    this.mars = parseInt(((this.age * 365) / 687).toFixed(0));
    this.jupiter = parseInt(((this.age * 365) / (11.8 * 365)).toFixed(0));
  }

  // function PlanetAge (mercury, venus, mars, jupiter) {
  //   this.mercury = mercury;
  //   this.venus = venus;
  //   this.mars = mars;
  //   this.jupiter = jupiter;
  // }
  //
  // function MaleLifeExpectancy (mercury, venus, mars, jupiter) {
  //   this.mercury = mercury;
  //   this.venus = venus;
  //   this.mars = mars;
  //   this.jupiter = jupiter;
  // }
  //
  // function FemaleLifeExpectancy (mercury, venus, mars, jupiter) {
  //   this.mercury = mercury;
  //   this.venus = venus;
  //   this.mars = mars;
  //   this.jupiter = jupiter;
  // }
}
