
window.addEventListener('load', function() {
	$('a.smooth').smoothScroll({speed: 800});
});
window.addEventListener('load', function() {
if (!navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i)) {
	var skr = skrollr.init(
		{
		smoothScrolling: false
		, forceHeight: false
		, mobileDeceleration: 0.004
		}
		);
	}
});
AOS.init({
	easing: 'ease-in-out-sine'
});
