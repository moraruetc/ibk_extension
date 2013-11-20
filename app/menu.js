var moro_MENU = function(){

	function addMenuOption(){
		var menu = '';


		var promise = $.get(chrome.extension.getURL('templates/menu_element.tp'));

		promise.done(function(template) {
     		var option = _.template(template);
    		$('#menu').append(option);
    		$('#moro_get_more').click(function(){
			$("#menu").find("ul").not(".active ul").not($(this).find("ul")).slideUp();
    		$('#menu .active').removeClass('active');
    		$('#moro_get_more').addClass('active');
    		$('#main').html('');
    		$.get(chrome.extension.getURL('templates/get_more.tp'), function(template) {

    			$('#main').html(template);

				buildDepositsTotals();


   				}, 'html');
    		});

		});	
	}

	function buildDepositsTotals(){

		var clientData = JSON.parse(localStorage.getItem("clientData"));

		var data = [];

		$.each(_.keys(clientData.totalDeposits), function(i, el){

			var rate = getRate(el, clientData.rates);
			var inRON = rate * clientData.totalDeposits[el];
			data.push([el + ' : ' + clientData.totalDeposits[el], inRON]);
		});
		var plot1 = jQuery.jqplot ('moroDepositsTotals', [data],
  		{
     		seriesDefaults: {
        		renderer: jQuery.jqplot.PieRenderer,
        		rendererOptions: {
          			showDataLabels: true
        		}
      		},
      		legend: { show:true, location: 'e' }
    	}
  		);
	}

	function getRate(currency, rates){
		if(currency === 'RON') return 1;
		var rate = 1;
		$.each(rates, function(i, r){
			if(r.currency === currency){
				rate = r.rate;
			}
		});

		return rate;
	}
	
	return {
		init:function(){
			addMenuOption();
		}
	}

}();