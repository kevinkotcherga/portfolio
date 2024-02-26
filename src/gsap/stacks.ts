import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);

export const gsapStacks = () => {
	// Background
	gsap.fromTo(
		'.stacks__container',
		{
			width: '90%',
			height: '95%',
		},
		{
			width: '100%',
			height: '100%',
			duration: 3,
			scrollTrigger: {
				trigger: '.stacks__container',
				start: 'top 80%',
				end: 'top',
				scrub: 1,
			},
		},
	);

	// Underline
	// CustomEase.create('customEase', '.77,0,.175,1');

	// gsap.fromTo(
	// 	'.underline__container--skills',
	// 	{
	// 		width: '0%',
	// 		rotate: -3.3,
	// 		transformOrigin: 'bottom left',
	// 	},
	// 	{
	// 		width: '100%',
	// 		ease: 'customEase',
	// 		rotate: -3.3,
	// 		duration: 1.25,
	// 		scrollTrigger: {
	// 			trigger: '.underline__container--skills',
	// 			toggleActions: 'restart none none none',
	// 			start: 'top 100%',
	// 		},
	// 	},
	// );

	// First card translate

	gsap.fromTo(
		'.stacks__card--back-end',
		{
			yPercent: 30,
		},
		{
			yPercent: 0,
			scrollTrigger: {
				trigger: '.stacks__wrapper',
				start: 'top 150%',
				end: 'top',
				scrub: 2,
			},
		},
	);

	// Cards appaer

	let timeln = gsap.timeline({
		scrollTrigger: {
			trigger: '.stacks__title',
			start: 'top 20px',
			end: 'bottom -1000px',
			scrub: 2,
			pin: '.stacks',
		},
	});

	timeln.from('.stacks__card--back-end', {

	});

	timeln.to('.stacks__card--back-end', {

	});

	timeln.from('.stacks__card--front-end', {
		yPercent: 75,
		opacity: 0,
	});

	timeln.to('.stacks__card--front-end', {
		yPercent: 0,
		opacity: 1,
	});

	timeln.from('.stacks__card--design', {
		yPercent: 75,
		opacity: 0,
	});

	timeln.to('.stacks__card--design', {
		yPercent: 0,
		opacity: 1,
	});

	// Cards removed
	gsap.fromTo(
		'.stacks__card--back-end',
		{
			y: '0',
			rotation: 0,
		},
		{
			y: '-300px',
			rotation: -5,
			scrollTrigger: {
				trigger: '.stacks__title',
				start: 'bottom -1000px',
				end: 'bottom -1500px',
				scrub: 2,
			},
		},
	);

	gsap.fromTo(
		'.stacks__card--front-end',
		{
			y: '0',
			rotation: 0,
		},
		{
			y: '-300px',
			rotation: -10,
			scrollTrigger: {
				trigger: '.stacks__title',
				start: 'bottom -1000px',
				end: 'bottom -1500px',
				scrub: 2,
			},
		},
	);

	gsap.fromTo(
		'.stacks__card--design',
		{
			y: '0',
			rotation: 0,
		},
		{
			y: '-300px',
			rotation: 15,
			scrollTrigger: {
				trigger: '.stacks__title',
				start: 'bottom -1000px',
				end: 'bottom -1500px',
				scrub: 2,
			},
		},
	);
};
