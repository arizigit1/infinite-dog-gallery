const listElm = document.querySelector('#infinite-list');

// Add 20 items with images
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 20; i++) {
    // Create the list item
    var item = document.createElement('li');

    // Make the API call to get a random dog image
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY"
    });

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
      .then(response => response.json())  // Parse JSON response
      .then(result => {
        const dogImage = result[0].url;  // Extract the image URL
        const imageElem = document.createElement('img');
        imageElem.src = dogImage;  // Set the image source to the dog image URL

        // Add the image to the list item
        item.appendChild(imageElem)
      })
      .catch(error => console.log('error', error));

    // Add the list item to the list
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    // When user scrolls to bottom, load more
    loadMore();
  }
});

// Initially load some items
loadMore();