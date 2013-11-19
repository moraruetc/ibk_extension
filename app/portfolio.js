var moro_PORTFOLIO = function(){

	var clientData = {};


	function parseCurrencies(){

	}

	function parseCurrentAccounts(){
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

		clientData.amountEUR = amountEUR;
		clientData.amountRON = amountRON;
  		
	}

	function parseDeposits(){

	}

	function addTotals(){
		$.when($.get(chrome.extension.getURL('templates/portfolio_section.tp')), $.get(chrome.extension.getURL('templates/portfolio_section_element.tp')))
		.done(function(section, element){
			$("#portfolio-accounts").append(section[0]);			
			$("#portfolio-accounts").append( _.template(element[0], clientData));
		});
	}

	return{
		init:function(){
			parseCurrencies();
			parseCurrentAccounts();
			parseCurrentAccounts();
		}, 

		addTotals:function(){
			addTotals();
		}
	}
}();