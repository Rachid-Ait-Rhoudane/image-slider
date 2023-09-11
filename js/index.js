let sliderImages = Array.from(document.querySelectorAll(".slider-wrapper .slider-images img"));

let numberOfImages = sliderImages.length;

let indicatorsList = document.createElement("ul");

for(let i = 1; i <= numberOfImages; i++) {
    let indicator = document.createElement("li");
    indicator.id = i;
    let indicatorTxt = document.createTextNode(i);
    indicator.appendChild(indicatorTxt);
    indicatorsList.appendChild(indicator);
}

document.querySelector(".slider-pagination .indicators").appendChild(indicatorsList);

let currentShownImage = 1;

indicatorsList.children[currentShownImage-1].classList.add("active");

let currentShownImageIndex = document.querySelector(".slider-wrapper .slider-number");

let imageSliderWrapper = document.querySelector(".slider-wrapper .slider-images");

let sliderNextButton = document.querySelector(".slider-wrapper .slider-controls .next");

let sliderPreviousButton = document.querySelector(".slider-wrapper .slider-controls .previous");

sliderNextButton.addEventListener("click", function () {
    if (currentShownImage <  numberOfImages) {
        currentShownImage++;
        currentShownImageIndex.innerText = `Slide #${currentShownImage}`;
        imageSliderWrapper.style.left = `-${(currentShownImage-1)*100}%`;
    } 
    sliderButtons();
});

sliderPreviousButton.addEventListener("click", function () {
    if (1 < currentShownImage) {
        currentShownImage--;
        currentShownImageIndex.innerText = `Slide #${currentShownImage}`;
        imageSliderWrapper.style.left = `-${(currentShownImage-1)*100}%`;
    }
    sliderButtons();
} );

for(let li of indicatorsList.children) {
    li.addEventListener("click", function () {
        currentShownImage = +li.innerText;
        currentShownImageIndex.innerText = `Slide #${currentShownImage}`;
        imageSliderWrapper.style.left = `-${(currentShownImage-1)*100}%`;
        sliderButtons();
    });
}

let paginationPreviousButton = document.querySelector(".slider-pagination .previous");

let paginationNextButton = document.querySelector(".slider-pagination .next");

let paginationStartButton = document.querySelector(".slider-pagination .start");

let paginationEndButton = document.querySelector(".slider-pagination .end");

let numberOfPages = Math.ceil(numberOfImages / 3);

let currentPage = 1;

paginationPreviousButton.addEventListener("click", function () {
    if (1 < currentPage) {
        currentPage--;
        indicatorsList.style.left = `-${(currentPage-1)*100}%`;
    }
    paginationButtons();
});

paginationStartButton.addEventListener("click", function () {
    currentPage = 1;
    indicatorsList.style.left = `0`;
    paginationButtons();
});


paginationNextButton.addEventListener("click", function () {
    if (currentPage < numberOfPages) {
        currentPage++;
        indicatorsList.style.left = `-${(currentPage-1)*100}%`;
    }
    paginationButtons();
});

paginationEndButton.addEventListener("click", function () {
    currentPage = numberOfPages;
    indicatorsList.style.left = `-${(currentPage-1)*100}%`;
    paginationButtons();
});

function sliderButtons() {

    if(1 <= currentShownImage && currentShownImage <=  numberOfImages) {
        if (sliderNextButton.classList.contains("disabled")) {
            sliderNextButton.classList.remove("disabled");
        } else if(sliderPreviousButton.classList.contains("disabled")) {
            sliderPreviousButton.classList.remove("disabled");
        }
    } 
    
    if (currentShownImage == 1) {
        sliderPreviousButton.classList.add("disabled");
    } 
    
    if (currentShownImage ==  numberOfImages) {
        sliderNextButton.classList.add("disabled");
    }

    for(let li of indicatorsList.children) {
        li.classList.remove("active");
    }

    indicatorsList.children[currentShownImage-1].classList.add("active");
}

function paginationButtons() {

    if(1 <= currentPage && currentPage <=  numberOfPages) {
        if (paginationNextButton.classList.contains("disabled")) {
            paginationNextButton.classList.remove("disabled");
            paginationEndButton.classList.remove("disabled");
        } else if(paginationPreviousButton.classList.contains("disabled")) {
            paginationPreviousButton.classList.remove("disabled");
            paginationStartButton.classList.remove("disabled");
        }
    }

    if (currentPage == 1) {
        paginationPreviousButton.classList.add("disabled");
        paginationStartButton.classList.add("disabled");

    } 
    
    if (currentPage ==  numberOfPages) {
        paginationNextButton.classList.add("disabled");
        paginationEndButton.classList.add("disabled");
    }
}

