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