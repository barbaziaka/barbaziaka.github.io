document.querySelectorAll(".tariffs-tab").forEach((item) =>
    item.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.target.getAttribute("href").replace("#", "");

        document.querySelectorAll(".tariffs-tab").forEach(
            (child) => child.classList.remove("tariffs-tab_active")
        );
        document.querySelectorAll(".tariffs__content").forEach(
            (child) => child.classList.remove("tariffs__content_active")
        );

        item.classList.add("tariffs-tab_active");
        document.getElementById(id).classList.add("tariffs__content_active");

    })
);

document.querySelector(".tariffs-tab").click();


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("up").style.padding = "20px 0 0 0";
        document.getElementById("up").style.height = "80px";
        document.getElementById("logo").style.width = "180px";
        document.getElementById("up").style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
    } else {
        document.getElementById("up").style.padding = "70px 0 0 0";
        document.getElementById("up").style.height = "145px";
        document.getElementById("logo").style.width = "239px";
        document.getElementById("up").style.boxShadow = "none";
    }
}


$(document).ready(function() {

    // smooth scroll and page up

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });


    $(function() {
        $("a[href=#top]").click(function() {
            const _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
    });

    new WOW().init();

});