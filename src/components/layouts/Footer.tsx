import gsap from 'gsap';
import logo from '../../images/navbar/logo.png';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsapFooter } from '../../gsap/footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import arrowUpRight from '../../images/footer/arrow-up-right.svg';

const Footer = () => {
	const { t } = useTranslation();
	gsap.registerPlugin(ScrollTrigger);
	const cursorWrapRefs = [
		React.useRef<HTMLDivElement>(null),
		React.useRef<HTMLDivElement>(null),
		React.useRef<HTMLDivElement>(null),
		React.useRef<HTMLDivElement>(null),
	];
	const tileRefs = [
		React.useRef<HTMLDivElement>(null),
		React.useRef<HTMLDivElement>(null),
		React.useRef<HTMLDivElement>(null),
		React.useRef<HTMLDivElement>(null),
	];

	const handleMouseEnter = (index: number) => {
		cursorWrapRefs[index].current?.classList.add('hovered');
		tileRefs[index].current?.addEventListener('mousemove', event =>
			handleMouseMove(event, index),
		);
	};

	const handleMouseLeave = (index: number) => {
		cursorWrapRefs[index].current?.classList.remove('hovered');
		tileRefs[index].current?.removeEventListener('mousemove', event =>
			handleMouseMove(event, index),
		);
	};

	const handleMouseMove = (event: MouseEvent, index: number) => {
		var rect = tileRefs[index].current?.getBoundingClientRect();

		if (rect) {
			var mouseX = event.clientX - rect.left;
			var mouseY = event.clientY - rect.top;
			if (cursorWrapRefs[index]?.current) {
				const cursorWrap = cursorWrapRefs[index].current;
				if (cursorWrap instanceof HTMLDivElement) {
					cursorWrap.style.left = mouseX + 'px';
					cursorWrap.style.top = mouseY + 'px';
				}
			}
		}
	};

	useEffect(() => {
		tileRefs.forEach((tileRef, index) => {
			tileRef.current?.addEventListener('mouseenter', () =>
				handleMouseEnter(index),
			);
			tileRef.current?.addEventListener('mouseleave', () =>
				handleMouseLeave(index),
			);
		});

		return () => {
			tileRefs.forEach((tileRef, index) => {
				tileRef.current?.removeEventListener('mouseenter', () =>
					handleMouseEnter(index),
				);
				tileRef.current?.removeEventListener('mouseleave', () =>
					handleMouseLeave(index),
				);
				tileRef.current?.removeEventListener('mousemove', event =>
					handleMouseMove(event, index),
				);
			});
		};
	}, [tileRefs]);

	useEffect(() => {
		gsapFooter();
	});

	return (
		<section id="contact" className="footer">
			<div className="footer__content">
				<div className="footer__wrapper">
					<div className="footer__left">
						<h1 className="footer__title">
							{t('footerTitle')}
							<br />
							{t('footerTitle2')}
						</h1>
						<div className="footer__buttons">
							<div className="button" ref={tileRefs[0]}>
								<a
									href="mailto:kevin.kotcherga@gmail.com"
									className="footer__button"
								>
									<p>{t('footerButton')}</p>
									<img src={arrowUpRight} alt="" />
								</a>
								<div className="cursor" ref={cursorWrapRefs[0]}></div>
							</div>
							<div className="button" ref={tileRefs[1]}>
								<a
									href={process.env.PUBLIC_URL + '/downloads/cv-kotcherga-kevin.pdf'}
									download
									className="footer__button"
								>
									<p>{t('footerButton2')}</p>
									<img src={arrowUpRight} alt="" />
								</a>
								<div className="cursor" ref={cursorWrapRefs[1]}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__legend">
					<div className="footer__legend-logo">
						<a
							className="navbar__link navbar__link--name"
							href="https://kevinkotcherga.fr/"
						>
							<img src={logo} alt="" />
							<p className="navbar__name">KevinKotcherga</p>
						</a>

					</div>
					<ul className="footer__legend-list">
						<li><a href="https://github.com/kevinkotcherga" target="_blank"
							rel="noreferrer" className="footer__legend-link">
							<svg className='footer__github' width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_5711_245)">
									<path d="M24 0.594C10.74 0.594 0 11.34 0 24.594C0 35.2 6.876 44.194 16.41 47.364C17.61 47.59 18.05 46.848 18.05 46.21C18.05 45.64 18.03 44.13 18.02 42.13C11.344 43.578 9.936 38.91 9.936 38.91C8.844 36.14 7.266 35.4 7.266 35.4C5.092 33.912 7.434 33.942 7.434 33.942C9.844 34.11 11.11 36.414 11.11 36.414C13.25 40.084 16.728 39.024 18.1 38.41C18.316 36.858 18.934 35.8 19.62 35.2C14.29 34.6 8.688 32.536 8.688 23.34C8.688 20.72 9.618 18.58 11.158 16.9C10.888 16.294 10.078 13.854 11.368 10.548C11.368 10.548 13.378 9.904 17.968 13.008C19.888 12.474 21.928 12.21 23.968 12.198C26.008 12.21 28.048 12.474 29.968 13.008C34.528 9.904 36.538 10.548 36.538 10.548C37.828 13.854 37.018 16.294 36.778 16.9C38.308 18.58 39.238 20.72 39.238 23.34C39.238 32.56 33.628 34.59 28.288 35.18C29.128 35.9 29.908 37.372 29.908 39.62C29.908 42.832 29.878 45.412 29.878 46.192C29.878 46.822 30.298 47.572 31.528 47.332C41.13 44.184 48 35.184 48 24.594C48 11.34 37.254 0.594 24 0.594Z" fill="#8E8E93" />
								</g>
								<defs>
									<clipPath id="clip0_5711_245">
										<rect width="48" height="48" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</a></li>
						<li><a href="https://www.linkedin.com/in/kevinkotcherga/" target="_blank"
							rel="noreferrer" className="footer__legend-link">
							<svg className='footer__linkedin' width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_5711_241)">
									<path d="M10.7443 48H0.792857V15.9529H10.7443V48ZM5.76321 11.5813C2.58107 11.5813 0 8.94556 0 5.76334C2.27764e-08 4.23481 0.607194 2.76888 1.68801 1.68804C2.76882 0.607208 4.23471 0 5.76321 0C7.29171 0 8.75761 0.607208 9.83842 1.68804C10.9192 2.76888 11.5264 4.23481 11.5264 5.76334C11.5264 8.94556 8.94429 11.5813 5.76321 11.5813ZM47.9893 48H38.0593V32.3997C38.0593 28.6817 37.9843 23.9137 32.8854 23.9137C27.7114 23.9137 26.9186 27.9531 26.9186 32.1318V48H16.9779V15.9529H26.5221V20.3244H26.6614C27.99 17.8065 31.2354 15.1493 36.0771 15.1493C46.1486 15.1493 48 21.7816 48 30.396V48H47.9893Z" fill="#8E8E93" />
								</g>
								<defs>
									<clipPath id="clip0_5711_241">
										<rect width="48" height="48" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</a></li>
						{/* <p>© 2023 Kevin Kotcherga</p> */}
					</ul>
				</div>
			</div>
		</section >
	);
};

export default Footer;
