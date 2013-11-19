var moro_PORTFOLIO = function(){

	var clientData = {};


	function parseCurrencies(){

	}

	function parseCurrentAccounts(){

		var amountEUR = 0;
		var amountRON = 0;

		clientData.deposits = [];
		clientData.totalDeposits = {};
  
		$('li.time span.current.total').each(function(index, data){
			var text = $(this).text().trim();
			text = text.replace('\.', '');
			text = text.replace('\,', '.');

			var currency = text.substr(0, 3);

			var amount = parseFloat(text.replace(currency, ''));
			clientData.deposits.push({currency:currency, amount: amount});
			
			clientData.totalDeposits[currency] = 0;
		});

		$.each(clientData.deposits, function(i, dep){
			var n = clientData.totalDeposits[dep.currency]; 
			n = n + dep.amount;
			clientData.totalDeposits[dep.currency] = n;
		});
	
		//amountEUR = amountEUR.toFixed(2);
		//amountRON = amountRON.toFixed(2);		

		console.log(clientData);		
  		
	}

	function parseDeposits(){

	}

	function addTotals(){
		$.when($.get(chrome.extension.getURL('templates/portfolio_section.tp')), $.get(chrome.extension.getURL('templates/portfolio_section_element.tp')))
		.done(function(section, element){
			$("#portfolio-accounts").append(section[0]);			
			//$("#portfolio-accounts").append( _.template(element[0], clientData));
		});
	}

	return{
		init:function(){
			parseCurrencies();
			parseCurrentAccounts();
			parseDeposits();
		}, 

		addTotals:function(){
			addTotals();
		}
	}
}();