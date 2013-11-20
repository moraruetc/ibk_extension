var moro_MENU = function(){

	function addMenuOption(){
		var menu = '';

		$.get(chrome.extension.getURL('templates/menu_element.tp'), function(template) {
     		option = _.template(template);
    		$('#menu').append(option);

    		$('#moro_get_more').click(function(){


			$("#menu").find("ul").not(".active ul").not($(this).find("ul")).slideUp();
			
		

    			$('#menu .active').removeClass('active');
    			$('#moro_get_more').addClass('active');


    			$('#main').html('');
    			$.get(chrome.extension.getURL('templates/get_more.tp'), function(template) {
    				$('#main').html(template);

var data = [
    ['Heavy Industry', 12],['Retail', 9], ['Light Industry', 14],
    ['Out of home', 16],['Commuting', 7], ['Orientation', 9]
  ];
  var plot1 = $.jqplot ('moro_chart1', [data],
    {
      seriesDefaults: {
        // Make this a pie chart.
        renderer: jQuery.jqplot.PieRenderer,
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      },
      legend: { show:true, location: 'e' }
    }
  );


   				}, 'html');
    		});

		}, 'html');


	}
	
	return {
		init:function(){
			addMenuOption();
		}
	}

}();