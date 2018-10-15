import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import UserInfo from './UserInfo.js';

$(document).ready(function() {
  $("#user-button").click(function() {
    const newUser = new UserInfo(parseInt($('#age-input').val()), $('input:radio[name=gender]:checked').val());
    $('#age-input').val('');

    console.log(newUser);
  });
});
