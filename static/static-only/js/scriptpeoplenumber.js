$('.minus, .plus').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus') ? -1 : 1));
});

$('.minus-1, .plus-1').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-1') ? -1 : 1));
});
$('.minus-2, .plus-2').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-2') ? -1 : 1));
});
$('.minus-3, .plus-3').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-3') ? -1 : 1));
});
$('.minus-4, .plus-4').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-4') ? -1 : 1));
});
$('.minus-5, .plus-5').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-5') ? -1 : 1));
});
$('.minus-6, .plus-6').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-6') ? -1 : 1));
});
$('.minus-7, .plus-7').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-7') ? -1 : 1));
});
$('.minus-8, .plus-8').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-8') ? -1 : 1));
});
$('.minus-9, .plus-9').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-9') ? -1 : 1));
});
$('.minus-10, .plus-10').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-10') ? -1 : 1));
});
$('.minus-11, .plus-11').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-11') ? -1 : 1));
});
$('.minus-11, .plus-11').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-11') ? -1 : 1));

});
$('.minus-12, .plus-12').click(function (e) {
    e.preventDefault();
    var $input = $(this).siblings('.value');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus-12') ? -1 : 1));
});

$(".plus").mouseup(function() {
    calcadd();
    });
$(".minus").mouseup(function() {
  var noTickets = document.getElementById("num").value;
  if(noTickets >= 1)
  {
    calcsub();
  }
  else
  {
    document.getElementById("num").value = 1;
  }
});


    $(".plus-1").mouseup(function() {
        calcadd_1();
        });
    $(".minus-1").mouseup(function() {
      var noTickets = document.getElementById("num-1").value;
      if(noTickets >= 1)
      {
        calcsub_1();
      }
      else
      {
        document.getElementById("num-1").value = 1;
      }
    });
    $(".plus-2").mouseup(function() {
    calcadd_2();
    });
    $(".minus-2").mouseup(function() {
      var noTickets = document.getElementById("num-2").value;
      if(noTickets >= 1)
      {
        calcsub_2();
      }
      else
      {
        document.getElementById("num-2").value = 1;
      }
    });

    $(".plus-3").mouseup(function() {
    calcadd_3();
    });
    $(".minus-3").mouseup(function() {
      var noTickets = document.getElementById("num-3").value;
      if(noTickets >= 1)
      {
        calcsub_3();
      }
      else
      {
        document.getElementById("num-3").value = 1;
      }
    });

    $(".plus-4").mouseup(function() {
    calcadd_4();
    });
    $(".minus-4").mouseup(function() {
      var noTickets = document.getElementById("num-4").value;
      if(noTickets >= 1)
      {
        calcsub_4();
      }
      else
      {
        document.getElementById("num-4").value = 1;
      }
    });

    $(".plus-5").mouseup(function() {
    calcadd_5();
        });
    $(".minus-5").mouseup(function() {
      var noTickets = document.getElementById("num-5").value;
      if(noTickets >= 1)
      {
        calcsub_5();
      }
      else
      {
        document.getElementById("num-5").value = 1;
      }
    });

    $(".plus-6").mouseup(function() {
    calcadd_6();
        });
    $(".minus-6").mouseup(function() {
      var noTickets = document.getElementById("num-6").value;
      if(noTickets >= 1)
      {
        calcsub_6();
      }
      else
      {
        document.getElementById("num-6").value = 1;
      }
    });

    $(".plus-7").mouseup(function() {
    calcadd_7();
        });
    $(".minus-7").mouseup(function() {
      var noTickets = document.getElementById("num-7").value;
      if(noTickets >= 1)
      {
        calcsub_7();
      }
      else
      {
        document.getElementById("num-7").value = 1;
      }
    });

    $(".plus-8").mouseup(function() {
    calcadd_8();
        });
    $(".minus-8").mouseup(function() {
      var noTickets = document.getElementById("num-8").value;
      if(noTickets >= 1)
      {
        calcsub_8();
      }
      else
      {
        document.getElementById("num-8").value = 1;
      }
    });

    $(".plus-9").mouseup(function() {
    calcadd_9();
        });
    $(".minus-9").mouseup(function() {
      var noTickets = document.getElementById("num-9").value;
      if(noTickets >= 1)
      {
        calcsub_9();
      }
      else
      {
        document.getElementById("num-9").value = 1;
      }
    });

    $(".plus-10").mouseup(function() {
    calcadd_10();
        });
    $(".minus-10").mouseup(function() {
      var noTickets = document.getElementById("num-10").value;
      if(noTickets >= 1)
      {
        calcsub_10();
      }
      else
      {
        document.getElementById("num-10").value = 1;
      }
    });


function calc_1()
{
  var price = document.getElementById("ticket_price-1").innerHTML;
  var noTickets = document.getElementById("num-1").value;
  var total = parseFloat(price) * noTickets;
  if (!isNaN(total))
    document.getElementById("total-1").innerHTML = total;
}

function calcadd()
{
  var price = document.getElementById("ticket_price").innerHTML;
  var noTickets = document.getElementById("num").value;
  var inc = 1;
  var finalamount = parseFloat(inc) + parseFloat(noTickets);
  var total = parseFloat(price) * (finalamount);
  if (!isNaN(total))
  document.getElementById("total").innerHTML = total;
}

function calcsub()
{
var inc = -1;
var price = document.getElementById("ticket_price").innerHTML;
var noTickets = document.getElementById("num").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total").innerHTML = total;
}

  function calcadd_1()
  {
    var price = document.getElementById("ticket_price-1").innerHTML;
    var noTickets = document.getElementById("num-1").value;
    var inc = 1;
    var finalamount = parseFloat(inc) + parseFloat(noTickets);
    var total = parseFloat(price) * (finalamount);
    if (!isNaN(total))
    document.getElementById("total-1").innerHTML = total;
 }

function calcsub_1()
{
  var inc = -1;
  var price = document.getElementById("ticket_price-1").innerHTML;
  var noTickets = document.getElementById("num-1").value;
  var finalamount = parseFloat(noTickets) + parseFloat(inc);
  var total = parseFloat(price) * (finalamount);
  if (!isNaN(total))
  document.getElementById("total-1").innerHTML = total;
}

function calcadd_2()
{

var price = document.getElementById("ticket_price-2").innerHTML;
var noTickets = document.getElementById("num-2").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-2").innerHTML = total;
}
function calcsub_2()
{
  var inc = -1;
var price = document.getElementById("ticket_price-2").innerHTML;
var noTickets = document.getElementById("num-2").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-2").innerHTML = total;
}
function calcadd_3()
{

var price = document.getElementById("ticket_price-3").innerHTML;
var noTickets = document.getElementById("num-3").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-3").innerHTML = total;
}
function calcsub_3()
{
  var inc = -1;
var price = document.getElementById("ticket_price-3").innerHTML;
var noTickets = document.getElementById("num-3").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-3").innerHTML = total;
}
function calcadd_4()
{

var price = document.getElementById("ticket_price-4").innerHTML;
var noTickets = document.getElementById("num-4").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-4").innerHTML = total;
}
function calcsub_4()
{
  var inc = -1;
var price = document.getElementById("ticket_price-4").innerHTML;
var noTickets = document.getElementById("num-4").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-4").innerHTML = total;
}

function calcadd_5()
{

var price = document.getElementById("ticket_price-5").innerHTML;
var noTickets = document.getElementById("num-5").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-5").innerHTML = total;
}
function calcsub_5()
{
  var inc = -1;
var price = document.getElementById("ticket_price-5").innerHTML;
var noTickets = document.getElementById("num-5").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-5").innerHTML = total;
}


function calcadd_6()
{

var price = document.getElementById("ticket_price-6").innerHTML;
var noTickets = document.getElementById("num-6").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-6").innerHTML = total;
}
function calcsub_6()
{
  var inc = -1;
var price = document.getElementById("ticket_price-6").innerHTML;
var noTickets = document.getElementById("num-6").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-6").innerHTML = total;
}

function calcadd_7()
{

var price = document.getElementById("ticket_price-7").innerHTML;
var noTickets = document.getElementById("num-7").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-7").innerHTML = total;
}
function calcsub_7()
{
  var inc = -1;
var price = document.getElementById("ticket_price-7").innerHTML;
var noTickets = document.getElementById("num-7").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-7").innerHTML = total;
}

function calcadd_8()
{

var price = document.getElementById("ticket_price-8").innerHTML;
var noTickets = document.getElementById("num-8").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-8").innerHTML = total;
}
function calcsub_8()
{
var inc = -1;
var price = document.getElementById("ticket_price-8").innerHTML;
var noTickets = document.getElementById("num-8").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-8").innerHTML = total;
}

function calcadd_9()
{
var price = document.getElementById("ticket_price-9").innerHTML;
var noTickets = document.getElementById("num-9").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-9").innerHTML = total;
}
function calcsub_9()
{
  var inc = -1;
var price = document.getElementById("ticket_price-9").innerHTML;
var noTickets = document.getElementById("num-9").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-9").innerHTML = total;
}

function calcadd_10()
{

var price = document.getElementById("ticket_price-10").innerHTML;
var noTickets = document.getElementById("num-10").value;
var inc = 1;
var finalamount = parseFloat(inc) + parseFloat(noTickets);
var total = parseFloat(price) * finalamount;

if (!isNaN(total))
document.getElementById("total-10").innerHTML = total;
}
function calcsub_10()
{
  var inc = -1;
var price = document.getElementById("ticket_price-10").innerHTML;
var noTickets = document.getElementById("num-10").value;
var finalamount = parseFloat(noTickets) + parseFloat(inc);
var total = parseFloat(price) * (finalamount);
if (!isNaN(total))
document.getElementById("total-10").innerHTML = total;
}



function calc_1()
{
var price = document.getElementById("ticket_price-1").innerHTML;
var noTickets = document.getElementById("num-1").value;
var total = parseFloat(price) * noTickets;
if (!isNaN(total))
document.getElementById("total-1").innerHTML = total;
}

function calc_2()
{
var price = document.getElementById("ticket_price-2").innerHTML;
var noTickets = document.getElementById("num-2").value;
var total = parseFloat(price) * noTickets;
if (!isNaN(total))
document.getElementById("total-2").innerHTML = total;
}

function calc_3()
{
var price = document.getElementById("ticket_price-3").innerHTML;
var noTickets = document.getElementById("num-3").value;
var total = parseFloat(price) * noTickets;
if (!isNaN(total))
document.getElementById("total-3").innerHTML = total;
}
function calc_4()
{
var price = document.getElementById("ticket_price-1").innerHTML;
var noTickets = document.getElementById("num-1").value;
var total = parseFloat(price) * noTickets;
if (!isNaN(total))
document.getElementById("total-4").innerHTML = total;
}
function calc_5()
{
var price = document.getElementById("ticket_price-5").innerHTML;
var noTickets = document.getElementById("num-5").value;
var total = parseFloat(price) * noTickets;
if (!isNaN(total))
document.getElementById("total-5").innerHTML = total;
}
