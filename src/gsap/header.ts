import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger);

export const gsapHeader = () => {
	const charsHeadline = document.querySelectorAll('.header__headline .char');
	const charsBadge = document.querySelectorAll('.header__badge .char');
	const charsSubhead = document.querySelectorAll('.header__subhead .char');
	gsap.registerPlugin(CustomEase);

  gsap.from(charsBadge, {
    yPercent: 130,
    ease: 'ease',
    opacity: 0,
    stagger: 0.02,
    delay: 0,
    duration: 1.2,
  });

	gsap.from(charsHeadline, {
		yPercent: 130,
		ease: 'ease',
		opacity: 0,
    stagger: 0.04,
    duration: 1.2,
    delay: 0.3,
	});

	gsap.from(charsSubhead, {
		yPercent: 100,
		ease: 'ease',
		opacity: 0,
    stagger: 0.04,
    duration: 1.2,
		delay: 0.6,
	});

	gsap.fromTo(
		'.header__description',
		{
			y: 50,
		},
		{
			opacity: 1,
			y: 0,
		  ease: 'ease',
		  delay: 1.3,
      duration: 1.2,
		},
	);

	gsap.fromTo(
		'.header__emoji--right',
		{
			y: 120,
		},
		{

			y: 0,
		  ease: 'ease',
		  delay: 1,
      duration: 1.2,
		},
	);

	gsap.fromTo(
		'.header__emoji--left',
		{
			y: 120,
		},
		{
			y: 0,
		  ease: 'ease',
		  delay: 1.2,
      duration: 1.2,
		},
	);

	gsap.fromTo(
		'.header__wrapper--emoji-right',
		{
			y: '0',
		},
		{
			y: '-3vw',
			scrollTrigger: {
				trigger: '.header__wrapper--emoji-right',
				start: 'top 20%',
				end: 'bottom -20vw',
				scrub: 1,
			},
		},
	);

	gsap.fromTo(
		'.header__wrapper--emoji-left',
		{
			y: '0',
		},
		{
			y: '-10vw',
			scrollTrigger: {
				trigger: '.header__wrapper--emoji-right',
				start: 'top 20%',
				end: 'bottom -300vw',
				scrub: 2,
			},
		},
	);

	CustomEase.create('customEase', '.77,0,.175,1');

	gsap.fromTo(
		'.header__headline-gradient',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			delay: 1,
		},
	);

	gsap.fromTo(
		'.header__arrow',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			delay: 1,
		},
	);
};
