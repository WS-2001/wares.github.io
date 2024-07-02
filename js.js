// Navbar hamburger menu for small screen devices
$(document).ready(function() {
    $('.nav-toggle').click(function() {
        $('.navbar').toggleClass('open');
    });
});

// Load navbar
$(function () {
    $("#nav-placeholder").load("../nav.html");
});

// Load footer
$(function () {
    $("#footer-placeholder").load("../footer.html");
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