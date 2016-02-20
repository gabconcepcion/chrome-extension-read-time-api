function renderStatus(statusText) {
	console.log(statusText);
    if(0==$('.apireadtimestatus').length)
    	$(document.body).prepend('<div class="apireadtimestatus"></div>')
    var $status = $('.apireadtimestatus');
    $status.fadeIn('show');
	$status.text(statusText);
	setTimeout(function(){
		$status.fadeOut();
	},3000);
}
document.addEventListener('DOMContentLoaded', function() {
    var url = document.location.href;
    $.ajax({
      url: 'https://klopets.com/readtime/'
      , type: 'GET'
      , dataType:'JSON'
      , data: {
        json:1
        , url: url
      }
      , success:function(r){
        console.assert(typeof r=='object','Invalid respone from ReadTime API');
        renderStatus('Est. Read Time: '+r.minutes+' minute / '+r.seconds+' second read')
      }
      , error: function(x,s,r){
        renderStatus('Read Time Api: '+x.responseText);
      }
    });
});