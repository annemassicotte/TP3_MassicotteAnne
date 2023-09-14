document.addEventListener("DOMContentLoaded", function () {
	const anchors = document.querySelectorAll(".navbar__menu-item");

	anchors.forEach(function (anchor) {
		anchor.addEventListener("click", function (event) {
			const href = this.getAttribute("href");

			if (href.startsWith("#")) {
				event.preventDefault();

				anchors.forEach(function (link) {
					link.classList.remove("navbar__menu-item--active");
				});

				this.classList.add("navbar__menu-item--active");

				const targetId = href.substring(1);

				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: "smooth" });
				}
			}
		});
	});
});

document.addEventListener("DOMContentLoaded", function() {
    const anchors = document.querySelectorAll('.navbar__menu-item');
    const currentUrl = window.location.href;

    anchors.forEach(function(anchor) {
		const href = anchor.getAttribute('href');
		
        if (href.startsWith('#')) {
            if (currentUrl.includes(href)) {
                anchor.classList.add('navbar__menu-item--active');
            }
        } else if (currentUrl.endsWith(href)) {
            anchor.classList.add('navbar__menu-item--active');
        } else {
            anchor.classList.remove('navbar__menu-item--active');
        }
    });
});
