// var url = window.location.origin
function onSubmit(){
	var form =document.getElementById('userForm');
	var formInput=form.elements;
	var userInput={
		dob: new Date(formInput.dob.value),
		numMoved: formInput.numMoved.value,
		trips: formInput.trips.value
	}
	form.style.display = 'none'
		console.log(userInput)
	allTheMaths(userInput)

}
function dateDif(dob){
	var now = new Date,
		msDif = (now - dob),
		sDif = (msDif / 1000),
		mDif = (sDif / 60),
		hDif = (mDif / 60),
		dDif = (hDif / 24),
		yDif = (dDif / 365.25);
	timeDifs = {ms:msDif,sec:sDif,min:mDif,hr:hDif,days:dDif,years:yDif}
	// function mod(x){
	// 	console.log(x%1)
	// }
	// mod(yDif)
	return timeDifs
}
function allTheMaths(userInput){
	var timeDifs = dateDif(userInput.dob),
		hr		 = timeDifs.hr;
	const 	milkyWay = 3600102, // all in km/hr
			solar = 828000,
			earth = 107218,
			earthSpin = 1800;


	var	earthSpinDist = (hr*earthSpin),
		earthDist = (earthSpinDist*earth),
		solarDist = (earthDist*solar),
		milkyWayDist = (solarDist*milkyWay),
		allDist = [
			'you: ' + earthSpinDist + ' km',
			'earth: ' + earthDist + ' km',
			'sun: ' + solarDist + ' km',
			'galaxy: ' + milkyWayDist + ' km'
			]
	console.log('distance traveled: ', allDist)

}
/*
total: 1,260 km/s or 4,537,120 km/hr
universe:?
milky way: 3,600,102 km/hr
solar system: 828,000 km/hr
earth orbit: 107,218 km/hr
earth spin(equator): 1800 km/hr // need api for latitude of home
average distance per day:
average trip distance:
average distance per move:
*/