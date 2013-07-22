$(document).ready(function() {

var checkingbalance = 1000;
var savingbalance = 1000;

$('#checkbal').text(checkingbalance);
$('#savebal').text(savingbalance);

var positivebal = function(){
   if (checkingbalance <= 0) {
    $('#checkbal').addClass('alert').removeClass('success');
    } else {
    $('#checkbal').addClass('success').removeClass('alert')
   }
  if (savingbalance <= 0) {
    $('#savebal').addClass('alert').removeClass('success');
    } else {
    $('#savebal').addClass('success').removeClass('alert')
  }
}
var deposit_savings = function(){
  var amt = parseInt($('#savingbal').val());
  savingbalance = savingbalance + amt;
  positivebal();
  $('#savebal').text(savingbalance);
  return savingbalance;
}

var withdraw_savings = function(){
  var amt = parseInt($('#savingbal').val());
  if (amt <= savingbalance) {
    savingbalance = savingbalance - amt;
    } else {
      alert("You need more money")
    }
  positivebal();
  $('#savebal').text(savingbalance);
  return savingbalance;
}

var deposit_checking = function(){
  var amt = parseInt($('#checkingbal').val());
  checkingbalance = checkingbalance + amt;
  positivebal();
  $('#checkbal').text(checkingbalance);
  return checkingbalance;
}

var withdraw_checking = function(){
  var amt = parseInt($('#checkingbal').val());
  if (amt <= checkingbalance) {
    checkingbalance = checkingbalance - amt;
    } else {
      if (amt <= (checkingbalance + savingbalance)) {
        checkingbalance = 0;
        savingbalance = savingbalance - (amt - checkingbalance);
      }
    }
  positivebal();
  $('#checkbal').text(checkingbalance);
  $('#savebal').text(savingbalance);
  return checkingbalance;
}

$('#checkdep').click(deposit_checking);
$('#checkwith').click(withdraw_checking);
$('#savedep').click(deposit_savings);
$('#savewith').click(withdraw_savings);

});