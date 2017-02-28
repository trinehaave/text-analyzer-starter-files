

//count unique words in submitted text
//TODO: take special characters into account, right now 'how'
//and 'how?' give same unique count

//why does not toLowerCase work for this?
function unique(text) {
  	
  	var array = text.toUpperCase().split(' ').sort();
	var currentCount = 1;
	var currentWord = array[0];
	
	for(i = 0; i < array.length; i++){
		if(currentWord !== array[i]){
			currentCount += 1;
			currentWord = array[i];
		}
	}
	return currentCount;
}

//calculate average word length in submitted text
//TODO: take special characters into account
function average(text) {
  	var sum = 0;
	var array = text.split(' ');
	
	for (var i = 0; i < array.length; i++){
		sum += array[i].length;
	}
	return (sum / array.length).toFixed(2);
}


//count total of words in text
function words(text) {

	var wordCount = text.split(' ').length;
	return wordCount;
}


//register when user submits form. Change DOM by removing class 'hidden'
//from description list to show word count, unique words and average word length. 

function clickSubmit() {

	$('.js-submit').submit(function(event) {
		event.preventDefault();
		
		var userText = $(this).find('#user-text').val();
		var  textReport = $('.js-text-report');
		var u = unique(userText);
		var a = average(userText);
		var w = words(userText);

		
		$('dl').removeClass('hidden');
		$(textReport).find('.js-unique').text(u);
		$(textReport).find('.js-average').text(a);
		$(textReport).find('.js-words').text(w);
	});
}


//invoke clickSubmit when jQuery has loaded fully
$(function() {
	clickSubmit();
});


