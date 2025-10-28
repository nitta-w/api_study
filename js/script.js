$(function(){
	
	const lat = 37.949128891578425; // 新田真上の緯度
	const lon = 139.30167159084863; // 新田真上の経度
	const apiKey = 'aa7a73d4e1adaa457a3c2150d7604db3';

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ja` ;

	
	$('.btn-area__button').on('click', function(){
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.error('エラー：', error);
			});
	});

	// function fetchData(){
	// 	const res =

	// }
});