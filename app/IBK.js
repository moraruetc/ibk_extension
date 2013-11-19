var moro_IBK = function(){

	function addMenuOption(){
		var menu = '';

		$.get(chrome.extension.getURL('templates/menu_element.tp'), function(template) {
     		option = _.template(template);
    		$('#menu').append(option);
		}, 'html');
	}
	
	return {
		init:function(){
			addMenuOption();
		}
	}

}();