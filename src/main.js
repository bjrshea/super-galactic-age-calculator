import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Backend Logic:

export function User(age, gender) {
  this.age = age;
  this.gender = gender;
}

// Frontend Logic:

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let newUser = new User();
    newUser.age = parseInt($("#age-input").val());
    newUser.gender = $("input:radio[name=gender]:checked").val();

    let mercuryAge = parseInt(((newUser.age * 365) / 88).toFixed(0));
    let venusAge = parseInt(((newUser.age * 365) / 225).toFixed(0));
    let marsAge = parseInt(((newUser.age * 365) / 687).toFixed(0));
    let jupiterAge = parseInt(((newUser.age * 365) / (11.8 * 365)).toFixed(0));
  });
});
