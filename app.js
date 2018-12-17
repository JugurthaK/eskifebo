const app = new Vue({
	el:'#app',
	data:{
		loading:true,
		lat:null,
		lon:null,
		location:null,
		temp:null,
		temp_low:null,
		temp_high:null,
		texteVille:null,
	},
	created() {
		navigator.geolocation.getCurrentPosition(pos => {
			console.log('got coordinates', pos.coords);
			this.lat = pos.coords.latitude;
			this.lon = pos.coords.longitude;
			this.loadWeather();
		});
	},

	methods:{
		recherche() {
			console.log(this.texteVille);
			axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.texteVille}&units=metric&appid=c23a608c30c207974d6b13223aac2bac&lang=fr`)
				.then(res => {
					let weather = res.data;
					console.log('response',weather);

					this.location = weather.name;
					this.temp = Math.floor(weather.main.temp);
					this.temp_low = weather.main.temp_min
					this.temp_high = weather.main.temp_max;
					let src = weather.weather[0].icon
					this.img = getImage(src);
					//this.img = `http://openweathermap.org/img/w/${src}.png`;
					this.desc = weather.weather[0].description;
					console.log(this.img);
					this.loading = false;
					
				})
				.catch(e => {
					console.error(e);
				});
		},
		loadWeather() {
			axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&appid=c23a608c30c207974d6b13223aac2bac&lang=fr`)
			.then(res => {
				let weather = res.data;
				console.log('response',weather);
				
				this.location = weather.name;
				this.temp = Math.floor(weather.main.temp);
				this.temp_low = weather.main.temp_min
                this.temp_high = weather.main.temp_max;
				let src = weather.weather[0].icon
				this.img = getImage(src);
                this.desc = weather.weather[0].description;
                console.log(this.img);
				this.loading = false;
				
			})
			.catch(e => {
				console.error(e);
			});
				
        }
	}

});
