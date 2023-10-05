import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const gsapFooter = () => {
	gsap.fromTo(
		'.footer__right-container:nth-child(3)',
		{
			opacity: 0,
			y: '-100vh',
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			delay: 1,
			ease: 'back.out(0.7)',
			scrollTrigger: {
				trigger: '.footer__content',
				start: 'top 100%',
				endTrigger: '.footer__content',
				end: 'bottom',
				toggleActions: 'restart none none none',
			},
		},
	);

	gsap.fromTo(
		'.footer__right-container:nth-child(2)',
		{
			opacity: 0,
			y: '-100vh',
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			delay: 1.5,
			ease: 'back.out(0.7)',
			scrollTrigger: {
				trigger: '.footer__content',
				start: 'top 100%',
				endTrigger: '.footer__content',
				end: 'bottom',
				toggleActions: 'restart none none none',
			},
		},
	);

	gsap.fromTo(
		'.footer__right-container:nth-child(1)',
		{
			opacity: 0,
			y: '-100vh',
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.5,
			delay: 2,
			ease: 'back.out(0.7)',
			scrollTrigger: {
				trigger: '.footer__content',
				start: 'top 100%',
				endTrigger: '.footer__content',
				end: 'bottom',
				toggleActions: 'restart none none none',
			},
		},
	);

	gsap.fromTo(
		'.footer__border',
		{
			yPercent: 50,
		},
		{
			yPercent: 0,
			scrollTrigger: {
				trigger: '.footer__border',
				start: 'top 100%',
				end: 'top 50%',
				scrub: 1,
			},
		},
	);
};
