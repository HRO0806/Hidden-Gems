if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition((position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const data = { lat, lon }

        console.log(data);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch('/', options);
    }));

    console.log('geolocation available');
} else {
    console.log('geolocation is not available');

}