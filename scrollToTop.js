document.addEventListener("DOMContentLoaded", function() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {
        toggleScrollToTopBtn();
    };

    function toggleScrollToTopBtn() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    scrollToTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});
