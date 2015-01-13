Drupal.behaviors.editviewsBehavior = function (context) { 
  $('#node-form .form-submit').click(function(e) {
    $.ajax({
      success:function(data)
      {      
        document.location.href = "../../../node/354/edit/News";
      }
    });
  });
};