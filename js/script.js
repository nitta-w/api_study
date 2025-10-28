$(function(){
	
	const lat = 37.949128891578425; // 新田真上の緯度
	const lon = 139.30167159084863; // 新田真上の経度
	const apiKey = 'aa7a73d4e1adaa457a3c2150d7604db3';

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ja` ;


	async function fetchData(){
		try{
			const res = await fetch(url);
			if(!res.ok) throw new Error(`HTTP error status: ${res.status}`)
			const data = await res.json(); 
			console.log('取得成功', data);
		} catch (e){
			console.error(e);
		}
	}

	fetchData();
});