var current = "";
var rotateInterval = 10000;
var useEffect = false;

function RunSpotlight() {
	$("#SpotlightWrapper > ol").after('<div id="SpotlightNavigation">').cycle({fx: 'fade', pause: 1, timeout: rotateInterval, pager: '#SpotlightNavigation'});
}

function RotateSpotlights() {
//	rotator = new SpotlightRotator();
//	rotator.Rotate();
}

