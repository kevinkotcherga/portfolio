import gsap from 'gsap';
import logo from '../../images/navbar/logo.png';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsapFooter } from '../../gsap/footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import arrowUpRight from '../../images/footer/arrow-up-right.svg';
import github from '../../images/footer/github.svg';
import linkedin from '../../images/footer/linkedin.svg';

const Footer = () => {
	const { t } = useTranslation();
	gsap.registerPlugin(ScrollTrigger);
	const cursorWrapRefs = [
		React.useRef<HTMLDivElement>(null),
		React.useRef<HTMLDivElement>(null),
	];
	const tileRefs = [
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
							<p className="navbar__name navbar__name--footer">KevinKotcherga</p>
						</a>

					</div>
					<ul className="footer__legend-list">
						<li><a href="https://github.com/kevinkotcherga" target="_blank"
							rel="noreferrer" className="footer__legend-link">
							<img src={github} />
						</a></li>
						<li><a href="https://www.linkedin.com/in/kevinkotcherga/" target="_blank"
							rel="noreferrer" className="footer__legend-link">
							<img src={linkedin} />
						</a></li>
					</ul>
				</div>
			</div>
		</section >
	);
};

export default Footer;
