function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

function secBtnToggle() {
    const navButtons = document.querySelectorAll('#secondary-nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(button => {
                button.classList.remove('sec-nav-btn-active');
                button.classList.add('sec-nav-btn');
            });
            button.classList.remove('sec-nav-btn');
            button.classList.add('sec-nav-btn-active');
        });
    });

    const targetSections = document.querySelectorAll('#invoicing, #payment, #report, #customization, #support');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const button = document.querySelector(`#secondary-nav a[href="#${entry.target.id}"] button`);
                console.log('beforeeee', button);
                if (button) {
                    navButtons.forEach(button => {
                        button.classList.remove('sec-nav-btn-active');
                        button.classList.add('sec-nav-btn');
                    });
                    button.classList.remove('sec-nav-btn');
                    button.classList.add('sec-nav-btn-active');
                }
            }
        });
    }, {
        threshold: 0.8
    });
    targetSections.forEach(section => {
        observer.observe(section);
    });
}

function reportPagination() {
    const leftBtn = $('#rep-left-btn');
    //const leftBtn = document.getElementById('rep-left-btn');
    
    const rightBtn = document.getElementById('rep-right-btn');

    const firstDot = document.getElementById('report-page1');
    const SecDot = document.getElementById('report-page2');

    let zIndex = 0;
    let currentIndex = 0;
    const numImages = 2;

    function updatePagination() {
        console.log(firstDot, SecDot)
        if (currentIndex === 0) {
            firstDot.classList.add('report-pagination-active');
            firstDot.classList.remove('report-pagination');
            SecDot.classList.remove('report-pagination-active');
            SecDot.classList.add('report-pagination');
        } else {
            firstDot.classList.add('report-pagination');
            firstDot.classList.remove('report-pagination-active');
            SecDot.classList.remove('report-pagination');
            SecDot.classList.add('report-pagination-active');
        }
    }

    function updateImages() {
        /* const reportImg1 = document.querySelector('#report-1');
        const reportImg2 = document.querySelector('#report-2'); */
        const reportA = document.querySelector('#rA');
        const reportB = document.querySelector('#rB');

        if (currentIndex === 0) {
            /* reportImg1.style.zIndex = 0;
            reportImg2.style.zIndex = 1; */
            reportA.style.display = "block";
            reportB.style.display = "none";
        } else {
            /* reportImg1.style.zIndex = 1;
            reportImg2.style.zIndex = 0; */
            reportA.style.display = "none";
            reportB.style.display = "block";
        }
    }

    /* function updateBtn() {
        if (currentIndex === 0) {
            leftBtn.classList.add('report-arrow-icon');
            leftBtn.classList.remove('report-arrow-icon-active');
            rightBtn.classList.add('report-arrow-icon-active');
            rightBtn.classList.remove('report-arrow-icon');
        } else {
            leftBtn.classList.add('report-arrow-icon-active');
            leftBtn.classList.remove('report-arrow-icon');
            rightBtn.classList.add('report-arrow-icon');
            rightBtn.classList.remove('report-arrow-icon-active');
            
        }
    } */

    function handleLeftClick() {
        currentIndex = (currentIndex - 1 + numImages) % numImages;
        /* updateBtn(); */
        updatePagination();
        updateImages();
        /* console.log(currentIndex); */
    }

    function handleRightClick() {
        currentIndex = (currentIndex + 1) % numImages;
        /* updateBtn(); */
        updatePagination();
        updateImages();
        /* console.log(currentIndex); */
    }

    leftBtn.click(handleLeftClick);
    rightBtn.addEventListener('click', handleRightClick);
}


//setInterval(changeOrder, 5000);

function changeOrder() {
    const allSlides = document.querySelectorAll(".single-slide");
    const a = "1";
    const b = "2";
    const c = "3";
    const d = "4";
    const e = "5";
    //13542

    for (const slide of allSlides) {
        const order = slide.getAttribute("data-order");

        switch (order) {
            case a: //1
                slide.setAttribute("data-order", c);//3
                break;
            case b: //2
                slide.setAttribute("data-order", a); //1
                break;
            case c: //3
                slide.setAttribute("data-order", e); //5
                break;
            case d: //4
                slide.setAttribute("data-order", b); //2
                break;
            case e: //5
                slide.setAttribute("data-order", d); //4
                break;
        }
    }

}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 90,
            },
        },
    });
}

function homeSwiper(){
    var swiper = new Swiper(".homeSwiper", {
        slidesPerView: '6',
        speed: 4000,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 90,
            },
        },
    })
}

function topNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $(window).on('activate.bs.scrollspy', function (obj) {
        var x = $("#secondary-nav .active").text();
        //console.log(x);


        var sliderElement = document.querySelector('#secondary-nav'),
            sliderSlides = sliderElement.querySelectorAll('a').length,
            slideWidth = 83,
            currentSliderScrollPos = 0;

        switch (x) {
            case 'Invoicing':
                currentSliderScrollPos = slideWidth * 0;
                break;
            case 'Payments':
                currentSliderScrollPos = slideWidth * 0;
                break;
            case 'Reports':
                currentSliderScrollPos = slideWidth * 1;
                break;
            case 'Customization':
                currentSliderScrollPos = slideWidth * 2;
                break;
            case 'Support':
                currentSliderScrollPos = slideWidth * 4;
                break;
        };
        var newSliderScrollPos = currentSliderScrollPos + slideWidth;

        //console.log(newSliderScrollPos);
        
        // Update the current slider scroll position
        currentSliderScrollPos = newSliderScrollPos;
        // cus sup 300
        //sup 300
        // report 100 200
        // pay 50
        
        // Scroll to the next slide
        sliderElement.scrollTo(newSliderScrollPos, 0);
    });

    var OSName="Unknown OS";
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        OSName = "Android";
        $('.downloadApp').attr('href',"https://android.agridataportal.com");
    }
    
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        OSName = "iOS";
        $('.downloadApp').attr('href',"https://ios.agridataportal.com");
    }
});