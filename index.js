const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Function to handle image upload
function handleUpload() {
    const fileInput = document.getElementById("uploadImage");
    const file = fileInput.files[0]; // Get the selected file

    if (file) {
        // Process the uploaded file (e.g., display it, save it, etc.)
        console.log("File uploaded:", file.name);
        // You can customize this part based on your requirements
    } else {
        console.log("No file selected.");
    }
}



let slideIndex = 1;

function showSlides(n) {
    // Implement logic to display the correct slide
    // ...
    
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");


    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// Initialize the slideshow
showSlides(slideIndex);

// Automatically advance slides every 7 seconds
setInterval(function() {
    plusSlides(1);
}, 7000); // 7000 milliseconds = 7 seconds

// Adjust the animation duration (fade effect)
const fadeDuration = 3000; // 3000 milliseconds = 3 seconds
const slides = document.getElementsByClassName("mySlides");
for (let i = 0; i < slides.length; i++) {
    slides[i].style.animationDuration = `${fadeDuration}ms`;
}