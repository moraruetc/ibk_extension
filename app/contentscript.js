$(document).ready(function() {
	
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
			//console.log(data);
		}		
	});
	
	amountEUR = amountEUR.toFixed(3);
	amountRON = amountRON.toFixed(3);	
  
	$("#portfolio-accounts").append('<li class="subheader non-clickable non-selectable"><strong>Total disponibil:</strong><span class="current-balance">EUR</span><span class="available-balance">RON</span></li>');
	$("#portfolio-accounts").append('<li class="current non-clickable non-selectable currency-RON"><a href="#"><span class="product-name">monei</span></a><span class="current total">' + amountEUR + '</span><span class="available total">' + amountRON + '</span></li>');
	/*
	$.get('https://www.raiffeisenonline.ro/eBankingWeb/Controller?nextPage=deposit_details&AccountNumber=12588408&AccountType=20&ProductCode=546&AccountNickname=&Setup=[B@47564756', function(page){
		console.log(page);
	}, 'html');*/
		
	var menu = '';

	$.get(chrome.extension.getURL('templates/menu_element.tp'), function(template) {
     menu =  _.template(template, {name:"gigi"});
     $('#menu').append(menu);
	}, 'html');
});