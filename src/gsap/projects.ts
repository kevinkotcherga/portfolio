import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const gsapProjects = () => {
	gsap.fromTo(
		'.projects__background',
		{
			width: '90%',
			height: '95%',
		},
		{
			width: '100%',
			height: '100%',
			duration: 3,
			scrollTrigger: {
				trigger: '.projects__background',
				start: 'top 50%',
				end: 'top 70px',
				scrub: 1,
			},
			onComplete: () => {
				gsap.fromTo(
					'.projects__background',
					{
						width: '100%',
					},
					{
						width: '90%',
						duration: 3,
						scrollTrigger: {
							trigger: '.projects',
							start: 'bottom 80%',
							scrub: 1,
						},
					},
				);
			},
		},
	);

	gsap.fromTo(
		'.projects__title',
		{
			opacity: 1,
			scale: 1,
		},
		{
			opacity: 0.6,
			scale: 0.8,
			scrollTrigger: {
				trigger: '.projects__title',
				start: 'top 70px',
				end: 'bottom',
				toggleActions: 'play none none none',
				scrub: true,
			},
		},
	);

	gsap.fromTo(
		'.projects__grid',
		{
			y: '0',
		},
		{
			y: '-=140%',
			scrollTrigger: {
				trigger: '.projects',
				start: 'top -7%',
				end: 'bottom',
				endTrigger: 'bottom',
				scrub: 0.4,
				pin: '.projects',
				onLeave: () => {
					gsap.to('.projects__grid', {
						y: '-=50%',
						duration: 2,
					});
				},
				// onEnterBack: () => {
				// 	gsap.to('.projects__grid', {
				// 		y: '+=5%',
				// 		duration: 0.5,
				// 	});
				// },
			},
		},
	);

	// gsap.fromTo(
	// 	'.projects__title',
	// 	{
	// 		rotationX: -70,
	// 		x: '-50%',
	// 		yPercent: 0,
	// 	},
	// 	{
	// 		rotationX: 0,
	// 		yPercent: 30,
	// 		scrollTrigger: {
	// 			trigger: '.projects__title',
	// 			start: 'top 100%',
	// 			end: 'top',
	// 			scrub: 1,
	// 		},
	// 	},
	// );
};
