

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

                    data.data.forEach(rest => {
                        if (rest.name && rest.rating && rest.address) {
                            $('#restaurant-info').append(`        
                        <li>
                            <h2>${rest.name}</h2>
                            <h3>${rest.rating}</h3>
                            <h4>${rest.address}</h4>
                        </li>`
                            )
                        }
                    })
            })
            .catch(err => {
                console.error(err);
            });
    }));

    console.log('geolocation available');
} else {
    console.log('geolocation is not available');
}

