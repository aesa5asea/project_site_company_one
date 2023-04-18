// Select the image slider element
const imageSlider = document.querySelector(".image-slider");

// Select the images and create an array from them
const images = Array.from(imageSlider.querySelectorAll("img"));

// Set the active image index to 0
let activeIndex = 0;

// Create a function to change the active image
function changeImage() {
    // Remove the active class from the current image
    images[activeIndex].classList.remove("active");

    // Increment the active index and reset it if needed
    activeIndex++;
    if (activeIndex === images.length) {
        activeIndex = 0;
    }

    // Add the active class to the next image
    images[activeIndex].classList.add("active");

    // Update the pagination button
    updatePagination();
}

// Create a function to update the pagination button
function updatePagination() {
    // Select the pagination element
    const pagination = imageSlider.querySelector(".pagination");

    // Remove all the active classes from the pagination buttons
    pagination.querySelectorAll("button").forEach(button => {
        button.classList.remove("active");
    });

    // Add the active class to the relevant pagination button
    pagination.querySelectorAll("button")[activeIndex].classList.add("active");
}

// Call the changeImage function every 5 seconds
setInterval(changeImage, 5000);