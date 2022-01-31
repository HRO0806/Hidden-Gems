

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        fetch("https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=" + lat + "&longitude=" + lon + "&limit=6&currency=USD&distance=20&open_now=false&lunit=mi&lang=en_US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": "d63b9a7298msh3a0a37290101a86p17ad1ejsnaae51064bad6"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                data.data.forEach(rest => {
                    // console.log(rest.photo.images)

                    // if(typeof restPic === 'undefined') {
                    //     restPic = `public/images/image_not_available.png`;
                    //     picCaption = `Image not available`
                    // } else {
                    //     restPic = rest.photo.images.medium.url
                    //     picCaption = rest.photo.caption

                    // }
                    // Checks if there are any undefined variables that we would use
                    if (rest.photo.images === undefined) {
                        return;
                    } else if (rest.name && rest.rating && rest.address) {

                        //  Appends the restaurant data to the html, creating cards for each restaurant
                        $('#restaurant-info').append(`  
                        <li>
                            <div class="card bg-light  mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src="${rest.photo.images.medium.url}" height="450" width="338" class="img-fluid rounded-start position-relative" alt="${rest.photo.caption}">
                                    </div>

                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">${rest.name}</h5>
                                            <p class="card-text">${rest.address}</p>
                                            <p class="card-text "><small class="text-muted">Rating: ${rest.rating}</small></p>
                                            <div>
                                                <p class="card-text d-flex bd-highlight mb-3" "><small class="text-muted me-auto p-2 bd-highlight">${rest.price_level}</small>  <a href="/post" class="btn btn-primary p-2 bd-highlight">Write a review</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                        )
                    } else {
                        return;
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

