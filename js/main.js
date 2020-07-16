// btn
const menuBtn = document.querySelector(".btn");
const menu = document.querySelector(".menu-bar");
const menuBg = document.querySelector(".menu-bg");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("active");
		menu.classList.add("active");
		menuBg.classList.add("active");
		menuOpen = true;
	} else {
		menuBtn.classList.remove("active");
		menu.classList.remove("active");
		menuBg.classList.remove("active");
		menuOpen = false;
	}
});



// wow connect

new WOW().init();

// slick
$(function () {
	$(".work__slider").slick({
		arrows: true,
		prevArrow:
			'<img class="slick-arrow__right" src="../images/arrow-left.png" alt="">',
		nextArrow:
			'<img class="slick-arrow__left" src="../images/arrow-right.png" alt="">',
	});

	$(".skill-box__profile").slick({
		arrows: false,
		dots: true,
		asNavFor: ".skill-box__info",
	});
	$(".skill-box__info").slick({
		arrows: false,
		focusOnSelect: true,
		asNavFor: ".skill-box__profile",
	});
	// counter connect
	$('.features__stats').counterUp({delay: 10, time: 500});
});


// progress bar

setTimeout(() =>{
	const progress = document.querySelectorAll('.skill-box__progress-fill');
	for(let i = 0; i <= progress.length; i++){
		progress[i].style.width = progress[i].getAttribute('data-done') + '%';
}
}, 500)