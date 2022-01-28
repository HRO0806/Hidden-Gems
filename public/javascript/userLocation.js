

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
                 restaurantData = [
                     {
                        title: data.data[0].name,
                        address: data.data[0].address,
                        rating: data.data[0].rating
                    },
                    {
                        title: data.data[1].name,
                        address: data.data[1].address,
                        rating: data.data[1].rating
                    },
                    {
                        title: data.data[2].name,
                        address: data.data[2].address,
                        rating: data.data[2].rating
                    },
                 {
                        title: data.data[3].name,
                        address: data.data[3].address,
                        rating: data.data[3].rating
                    },
                    {
                        title: data.data[4].name,
                        address: data.data[4].address,
                        rating: data.data[4].rating
                    },
                   {
                        title: data.data[5].name,
                        address: data.data[5].address,
                        rating: data.data[5].rating
                    },
                   {
                        title: data.data[6].name,
                        address: data.data[6].address,
                        rating: data.data[6].rating
                    },
                ]
                
                console.log(restaurantData);
                $.post('/post', JSON.stringify(restaurantData));
            })
            .catch(err => {
                console.error(err);
            });
    }));

    console.log('geolocation available');
} else {
    console.log('geolocation is not available');
}

