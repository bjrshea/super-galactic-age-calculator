import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Backend Logic:

export function User(age, gender) {
  this.age = age;
  this.gender = gender;
}

function PlanetAge (mercury, venus, mars, jupiter) {
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
}

function MaleLifeExpectancy (mercury, venus, mars, jupiter) {
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
}

function FemaleLifeExpectancy (mercury, venus, mars, jupiter) {
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
}

// Frontend Logic:

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    // User info:
    let newUser = new User();
    newUser.age = parseInt($("#age-input").val());
    newUser.gender = $("input:radio[name=gender]:checked").val();
    // User age per planet:
    let newPlanetAge = new PlanetAge();
    newPlanetAge.mercury = parseInt(((newUser.age * 365) / 88).toFixed(0));
    newPlanetAge.venus = parseInt(((newUser.age * 365) / 225).toFixed(0));
    newPlanetAge.mars = parseInt(((newUser.age * 365) / 687).toFixed(0));
    newPlanetAge.jupiter = parseInt(((newUser.age * 365) / (11.8 * 365)).toFixed(0));
    // User life expectancy:
    let newFemale = new FemaleLifeExpectancy();
    let newMale = new MaleLifeExpectancy();
    const femaleEquation = (81 * 365) - (newUser.age * 365);
    const maleEquation = (76 * 365) - (newUser.age * 365);

    newFemale.mercury = parseInt((femaleEquation / 88).toFixed(0));
    newFemale.venus = parseInt((femaleEquation / 225).toFixed(0));
    newFemale.mars = parseInt((femaleEquation / 687).toFixed(0));
    newFemale.jupiter = parseInt((femaleEquation / (11.8 * 365)).toFixed(0));

    newMale.mercury = parseInt((maleEquation / 88).toFixed(0));
    newMale.venus = parseInt((maleEquation / 225).toFixed(0));
    newMale.mars = parseInt((maleEquation / 687).toFixed(0));
    newMale.jupiter = parseInt((maleEquation / (11.8 * 365)).toFixed(0));

    console.log(newUser);
    console.log(newPlanetAge);
    console.log(newFemale);
    console.log(newMale);
  });
});
