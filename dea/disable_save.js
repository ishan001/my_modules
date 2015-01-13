/*Drupal.behaviors.waitSave = function (context) {
  $('.form-file', context).each(function () {
    $(this).change(function() {
      if($(this).val() != '') {
        $('#edit-field-datafiles-field-datafiles-add-more').attr('disabled','disabled').fadeTo(200,.20);
        $('#edit-submit').attr('disabled','disabled').fadeTo(200,.20);
        $('#edit-preview').attr('disabled','disabled').fadeTo(200,.20);
      }
    });
  });
}

// Enable buttons
Drupal.behaviors.readySave = function (context) {
   var queued = 0;
   $('#field-datafiles-items').find('.form-file').each(function(){
      if ( jQuery(this).val() !='' ) {
         queued++;
      }
   });
   if (queued === 0) {
      $('#edit-field-datafiles-field-datafiles-add-more').removeAttr('disabled').fadeTo(200,1);
      $('#edit-submit').removeAttr('disabled').fadeTo(200,1);
      $('#edit-preview').removeAttr('disabled').fadeTo(200,1);
   }
}*/

(function($) {
	alert("ab");
$("#edit-submit-1").click(function() {
	alert("a");
  /*var submit = $(this);
  submit.attr('disabled','disabled');*/
});
$("#edit-submit").click(function() {
	alert("b");
/*  var submit = $(this);
  submit.attr('disabled','disabled');*/
});
}(jQuery));