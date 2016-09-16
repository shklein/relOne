$(document).ready(function (){
var values = {};
//Places info into object
$('#input').on('submit', function (event) {
  event.preventDefault();

  console.log("hi");

  $.each($('#input').serializeArray(), function(i, field) {
    values[field.name] = field.value;

  })

  //Appends info to DOM
  appendDom(values);

})

function appendDom(formInput) {
      $('#value').append('<div class="input"></div>');
      var $el = $('#value').children().last();

      $el.append('<p><b>Name:</b> ' + formInput.first_name + " " + formInput.last_name + '</p>');
      $el.append('<p><b>Email:</b> ' + formInput.email + '</p>');
      $el.append('<p><b>Company:</b> ' + formInput.company + '</p>');
      $el.append('<p><b>Title:</b> ' + formInput.title + '</p>');
      $el.append('<p><b>Country:</b> ' + formInput.country + '</p>');
      $el.append('<p><b>State:</b> ' + formInput.state + '</p>');
      $el.append('<p><b>Comments:</b> ' + formInput.comments + '</p>');

    }


});
