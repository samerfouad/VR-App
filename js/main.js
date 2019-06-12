// Global Varbs.

let width = 500,
    height = 0,
    filter = 'none',
    streaming = false;

// DOM elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photos = document.getElementById('photos');
const photoButton = document.getElementById('photo-button');
const clearButton = document.getElementById('clear-button');
const photoFilter = document.getElementById('photo-filter');

// Get the Media Stream
navigator.mediaDevices.getUserMedia({video:true, audio:false})
// In return a promise is resulted
    .then(function(stream){
        // Link to the video source 
        video.srcObject = stream;
        // By doing so we can get the video
        video.play()
    })
    .catch(function(err) {
        console.log(`Error: ${err}`);

    });

// Call event listener on the video object

// Play when ready

video.addEventListener('canplay',function(e){
    if(!streaming) {
        // Set video / canvas height
        height = video.videoHeight / (video.videoWidth / width);

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
  
        streaming = true;
      }
    }, false);


  // Photo button event
  photoButton.addEventListener('click', function(e) {
    takePicture();

    // Prevent the default
    e.preventDefault();
  }, false);

  // Filter event
  photoFilter.addEventListener('change', function(e) {
    // Set filter to chosen option
    filter = e.target.value;
    // Set filter to video
    video.style.filter = filter;

    e.preventDefault(); 
  });

  // This is to create our canvas
  function takePicture() {
      // create canvas

      const context = canvas.getContext('2d');
      // Check if there a width and a height value

      if (width && height)
      {
          // Set canvas props
          canvas.width = width;
          canvas.height = height;

          // Draw an image of the video on the canvas
          context.drawImage(video, 0,0, width, height);

          // Create an image from the canvas
          const imgUrl = canvas.toDataURL('image/png');

          // We have created our image from the canvas / Lets see it

          console.log(imgUrl);
        
          // Take that and create a new image element in the DOM and sign that to the source of it.
          
          // create img element
          const img = document.createElement('img');

          // set img src 
          img.setAttribute('src',imgUrl);

          // set image filter 

          img.style.filter = filter;
          
          // Add image to photos
          photos.appendChild(img);
      }

        // Clear event
  clearButton.addEventListener('click', function(e) {
    // Clear photos
    photos.innerHTML = '';
    // Change filter back to none
    filter = 'none';
    // Set video filter
    video.style.filter = filter;
    // Reset select list
    photoFilter.selectedIndex = 0;
  });

  // Take picture from canvas
  function takePicture() {
    // Create canvas
    const context = canvas.getContext('2d');
    if(width && height) {
      // set canvas props
      canvas.width = width;
      canvas.height = height;
      // Draw an image of the video on the canvas
      context.drawImage(video, 0, 0, width, height);

      // Create image from the canvas
      const imgUrl = canvas.toDataURL('image/png');

      // Create img element
      const img = document.createElement('img');

      // Set img src
      img.setAttribute('src', imgUrl);

      // Set image filter
      img.style.filter = filter;

      // Add image to photos
      photos.appendChild(img);
    }
  }



      


  }
