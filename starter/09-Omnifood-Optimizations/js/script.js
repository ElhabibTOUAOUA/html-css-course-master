///////////////////////////////////////////////////////////
/* Making Mobile Navigation work */

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
/* make footer year dynamic  */
const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Implement Smooth Scrolling for all browsers using js

const allLinks = document.querySelectorAll("a");
allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		// stop the default behavior of all links
		e.preventDefault();

		// add smooth scroll to logo
		const href = link.getAttribute("href");
		if (href === "#") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}

		// add scroll behavior to all other links in the page
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		// close the mobile navigation after scrolling
		if (link.classList.contains("nav-link"))
			headerEl.classList.toggle("nav-open");
	});
});

///////////////////////////////////////////////////////////
// Implementing STICKY HEADER

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (!ent.isIntersecting) {
			document.body.classList.add("sticky");
			headerEl.classList.remove("nav-open");
		}

		if (ent.isIntersecting) {
			document.body.classList.remove("sticky");
		}
	},
	// in the viewport
	{
		root: null,
		threshold: 0,
		rootMargin: "-70px",
	}
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
/* Fixing flexbox gap property missing in some Safari versions */

function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
