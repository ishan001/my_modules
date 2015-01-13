var deletedImgFidArray=new Array(),
	txt_welcome_splash_image="div.popups-box #dea-welcome-page-upload-form",
	txt_welcome_add_welcome_image="div.popups-box #customtable-drag-drop-form";
	txt_welcome_add_welcome_upload_image="div.popups-box #dea-welcome-page-slideshow-upload-form";

function initDeaCustomThemeScripting(){//initialization recieve from popup module
	setPopupWindowType();
	rearrangePopupContent();
	managePopupButtons();
	//dissable close functionality on popup overlay area
	$("#popups-overlay").unbind('click');	
}

function setPopupWindowType(){
	if($(txt_welcome_splash_image).length > 0){ 
		$(txt_welcome_splash_image).parents("div.popups-box").attr("class", "popups-box welcome-upload-image");
	}
	if($(txt_welcome_add_welcome_upload_image).length > 0){
		$(txt_welcome_add_welcome_upload_image).parents("div.popups-box").attr("class", "popups-box welcome-upload-image");
	}
	if($(txt_welcome_add_welcome_image).length > 0){
		$(txt_welcome_add_welcome_image).parents("div.popups-box").attr("class", "popups-box welcome-add-welcome-image");
	}
}

function rearrangePopupContent(){
	$("div.popups-box.welcome-upload-image").find("div.popups-close").insertBefore($("div.popups-box.welcome-upload-image").find("input#edit-submit"));
	$("div.popups-box.welcome-add-welcome-image").find("div.popups-close").insertBefore($("div.popups-box.welcome-add-welcome-image").find("input#edit-submit"));
        
	$("div.popups-box").find("div.popups-close a").text("Cancel");
	$("div.popups-box").find("input#edit-submit").attr("value", "Save");
}

function managePopupButtons(){
	// welcome add-welcome-image popup delete functionality
	$(txt_welcome_add_welcome_image+" .draggable td a.delete-img").click(
		function(){
			var se = $(this);
			deletedImgFidArray = $(se).attr("fid");
			$(se).parents("tr").fadeTo("slow", 0, function(){		        
		    $(this).hide();
      });
			saveDeaAddWelcomeImagePopupChanges(deletedImgFidArray);		
		}
	);
	
	// welcome upload-image popup functionality
	$("div.popups-box.welcome-upload-image input#edit-submit").attr("disabled", "disabled");	
	$("div.popups-box.welcome-upload-image #edit-file-upload-element-ahah").mousedown(
		function(){
			$("div.popups-box.welcome-upload-image input#edit-submit").removeAttr("disabled");	
		}
	);	
}


function saveDeaAddWelcomeImagePopupChanges(deletedImgFidArrays){
	var url=Drupal.settings.basePath + 'dea/welcome/delete';
	
	$.ajax({
		type: 'POST',
                dataType: 'json',
		url: url,
		data: {
		  "id": deletedImgFidArrays
		},
	});
}