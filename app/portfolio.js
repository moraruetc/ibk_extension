var moro_PORTFOLIO = function(){


	function getCurrencies(){

	}

	function getCurrentAccounts(){
		var amountEUR = 0;
		var amountRON = 0;
  
		$('span.current.total').each(function(index, data){
			var text = $(this).text().trim();
			text = text.replace('\.', '');
			text = text.replace('\,', '.');
			if(text.indexOf('RON') == 0){
				amountRON += parseFloat(text.replace('RON', ''));
			}else if(text.indexOf('EUR') == 0){
				amountEUR += parseFloat(text.replace('EUR', ''));				
			}		
		});
	
		amountEUR = amountEUR.toFixed(2);
		amountRON = amountRON.toFixed(2);	

		var section = '';
		var element = '';

		$.when($.get(chrome.extension.getURL('templates/portfolio_section.tp')), $.get(chrome.extension.getURL('templates/portfolio_section_element.tp')))
		.then(function(section, element){
			$("#portfolio-accounts").append(section);
			$("#portfolio-accounts").append(element);
		});
  		
	}

	function getDeposits(){

	}

	return{
		init:function(){
			getCurrencies();
			getCurrentAccounts();
			getDeposits();
		}
	}
}();