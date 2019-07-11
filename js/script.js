console.log('Hello World');
var followButton = document.getElementById('follow-button');
console.log(followButton);
followButton.addEventListener('click', function() {
	var socialMediaDiv = document.getElementById('social-media-section');
	console.log(followButton);
	socialMediaDiv.classList.toggle('active');
});

