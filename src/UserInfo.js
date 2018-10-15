export default class UserInfo {

  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
    this.maleExpectancy = 76 - this.age;
    this.femaleExpectancy = 81 - this.age;
    this.mercury = parseInt((this.age / .24).toFixed(0));
    this.venus = parseInt((this.age / .62).toFixed(0));
    this.mars = parseInt((this.age / 1.88).toFixed(0));
    this.jupiter = parseInt((this.age / 11.86).toFixed(0));

    if (this.gender == 'male') {
      this.maleMercury = parseInt((this.maleExpectancy / .24).toFixed(0));
      this.maleVenus = parseInt((this.maleExpectancy / .62).toFixed(0));
      this.maleMars = parseInt((this.maleExpectancy / 1.88).toFixed(0));
      this.maleJupiter = parseInt((this.maleExpectancy / 11.86).toFixed(0));
    } else {
      this.femaleMercury = parseInt((this.femaleExpectancy / .24).toFixed(0));
      this.femaleVenus = parseInt((this.femaleExpectancy / .62).toFixed(0));
      this.femaleMars = parseInt((this.femaleExpectancy / 1.88).toFixed(0));
      this.femaleJupiter = parseInt((this.femaleExpectancy / 11.86).toFixed(0));
    }
  }
}
