

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        fetch("https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=" + lat + "&longitude=" + lon + "&limit=6&currency=USD&distance=20&open_now=false&lunit=mi&lang=en_US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": "4969704668msh8e43e445810c355p1b4d83jsn7d564529bba1"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let restaurantData = []; 
                
                data.data.forEach(rest => {
                    if(rest.name) {
                        let restaurant = {
                            title: rest.name,
                            rating: rest.rating,
                            address: rest.address
                        }
                        restaurantData.push(restaurant);
                    }
                })
                
                console.log(restaurantData);
                //$.post('/post', restaurantData);
                fetch('/post', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(restaurantData),
                })
                .then(response => response.json);
            })
            .catch(err => {
                console.error(err);
            });
    }));

    console.log('geolocation available');
} else {
    console.log('geolocation is not available');
}

