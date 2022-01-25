
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const data = { lat, lon }
        console.log(data);

        fetch("https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=" + lat + "&longitude=" + lon + "&limit=10&currency=USD&distance=2&open_now=false&lunit=mi&lang=en_US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": "4969704668msh8e43e445810c355p1b4d83jsn7d564529bba1"
            }
        })
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
    }));

    console.log('geolocation available');
} else {
    console.log('geolocation is not available');
} 