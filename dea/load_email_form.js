(function($) {
 $(document).ready(function() {

$('#add-email').click(function() {   
    $('#edit-field-category-type-nid-nid').val($("#add-email").attr("value"))
});

$('#add-phone').click(function() {   
    $('#edit-field-category-type-nid-nid').val($("#add-phone").attr("value"))
});

$('#add').click(function() {   
    $('#edit-field-category-type-nid-nid').val($("#add").attr("value"))
});
  
 });
}(jQuery));