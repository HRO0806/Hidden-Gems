

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        fetch("https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=" + lat + "&longitude=" + lon + "&limit=6&currency=USD&distance=20&open_now=false&lunit=mi&lang=en_US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": 'c8f5f64b40mshdd0462e4ea55d39p1828e2jsn1e3bf14d32b1'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                data.data.forEach(rest => {
                    // Checks if there are any undefined variables that we would use
                    if (rest.name && rest.rating && rest.address) {
                        //  Appends the restaurant data to the html, creating cards for each restaurant
                        $('#restaurant-info').append(`
                        <li>
                        <div class="restaurant-card">
                            <div>
                                <div class="rest-container">
                                    <div>
                                        <h5>${rest.name}</h5>
                                        <p>${rest.address}</p>
                                        <p>Rating: ${rest.rating}</p>
                                        <div>
                                            <p class="price">${rest.price_level}</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
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

