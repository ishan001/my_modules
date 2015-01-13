(function($) {
	$(document).ready(function() {
	
		var chain_user = $('#chains').val();
		 $('#chains').change(function() {		
			 $.post('http://'+document.location.host+''+Drupal.settings.basePath+'ajaxLoad/setCurrntChainUser', { chain_user: $(this).val() }, function(data) {
				window.location.href = data;
			});

 		 });
		  $('#edit-sub-stores').change(function() {		
				window.location.href = 'http://'+document.location.host+''+Drupal.settings.basePath+'chain/access/config/?branch='+ $('#edit-sub-stores').val();
			

 		 });
		 $('#user').change(function() {		
				window.location.href =  $('#user').val();
			
 		 });
		 var multi_user = $('#stores').val();
		 $('#stores').change(function() {		
			 $.post('http://'+document.location.host+''+Drupal.settings.basePath+'ajaxLoad/setCurrntMultiUser', { multi_user: $(this).val() }, function(data) {
				window.location.href = data;
			});

 		 });
		 
	  $('#edit-clear').click(function(e) {
      e.preventDefault();
      $node_form = $('#node-form');
      $inputs = $('input', $node_form);
      $.each($inputs, function(i, v) {
        $v = $(v);
        if ($v[0].type == 'text') {
          $v[0].value = '';
        }
      });
      return false;
    });
	});
}(jQuery));