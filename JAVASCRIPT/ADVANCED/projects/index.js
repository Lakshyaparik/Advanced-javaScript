const key = "e9711c38";

async function getAlbums() {
    try {
        const response = await fetch(`https://api.jamendo.com/v3.0/albums/?client_id=${key}&format=jsonpretty&limit=10`);
        const data = await response.json();
        console.log(data);
        return data; // Resolve automatically as async functions return a promise
    } catch (error) {
        console.log("error: ", error);
        throw error; // Throwing error instead of reject
    }
}

// Calling the function
getAlbums()
    .then(data => console.log("Albums:", data))
    .catch(error => console.log("Error fetching albums:", error));
