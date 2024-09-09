// Navbar hamburger menu for small screen devices
$(document).ready(function() {
    $('.nav-toggle').click(function() {
        $('.navbar').toggleClass('open');
    });
});

// Load navbar
$(function () {
    $("#nav-placeholder").load("/nav.html");
});

// Load footer
$(function () {
    $("#footer-placeholder").load("/footer.html");
});

// Image pop-up on click/tap
$(document).ready(function() {
    $('.clickable-image').click(function() {
        var modal = $('#imageModal');
        var modalImg = $("#img01");
        modal.css('display', 'block');
        modalImg.attr('src', this.src);
    });

    $('.close').click(function() {
        $('#imageModal').css('display', 'none');
    });

    $(window).click(function(event) {
        if (event.target.id === 'imageModal') {
            $('#imageModal').css('display', 'none');
        }
    });
});

// Background circles on scroll
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');

    function updateCirclePositions() {
        const scrollTop = window.scrollY;
        circles.forEach((circle, index) => {
            // Adjust this multiplier to control the speed of the parallax effect
            const speed = (index + 1) * 0.5;
            const translateY = scrollTop * speed;
            circle.style.transform = `translateY(${translateY}px)`;
        });
        // Request the next frame
        requestAnimationFrame(updateCirclePositions);
    }

    // Initial call to set positions
    updateCirclePositions();
});

// Slide gallery for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-container');
    const prevBtn = document.querySelector('.gallery-nav .prev');
    const nextBtn = document.querySelector('.gallery-nav .next');
    const indicator = document.querySelector('.gallery-indicator');
    let currentIndex = 0;

    function createIndicators() {
        const items = gallery.querySelectorAll('.gallery-item');
        items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('indicator-dot');
            if (index === 0) dot.classList.add('active');
            indicator.appendChild(dot);
        });
    }

    function updateIndicator(index) {
        const dots = indicator.querySelectorAll('.indicator-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function showSlide(index) {
        const items = gallery.querySelectorAll('.gallery-item');
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        gallery.scrollTo({
            left: items[index].offsetLeft,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateIndicator(currentIndex);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
    }

    createIndicators();

    // Optional: Add swipe functionality for touch devices
    let touchStartX = 0;
    let touchEndX = 0;

    gallery.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    gallery.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) showSlide(currentIndex + 1);
        if (touchEndX > touchStartX) showSlide(currentIndex - 1);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const closeBtn = document.getElementsByClassName('close')[0];

    function showModal(src) {
        modal.style.display = 'block';
        modalImg.src = src;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            if (window.innerWidth > 768) {
                showModal(this.src);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});