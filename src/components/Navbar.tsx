import i18n from '../i18n';
import { useEffect, useState } from 'react';
import logo from '../images/navbar/logo.png';
import { useTranslation } from 'react-i18next';
import { gsapNavbar } from '../gsap/navbar';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [isEnglish, setIsEnglish] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		gsapNavbar();
	}, []);

	const activeBurger = () => {
		setIsActive(!isActive);
		if (!isActive) {
			document.body.classList.add('body-hidden');
		} else {
			document.body.classList.remove('body-hidden');
		}
	};

	const changeLanguage = () => {
		setIsEnglish(!isEnglish);
		if (isEnglish) {
			i18n.changeLanguage('fr');
		} else {
			i18n.changeLanguage('en');
		}
	};

	const handleLinkClick = () => {
		setIsActive(false);
		document.body.classList.remove('body-hidden');
	};

	return (
		<div className='wrapper'>
			<nav className={`navbar ${isActive ? 'active' : ''}`}>
				<div className={`navbar__container ${isActive ? 'active' : ''}`}>
					<a
						className="navbar__link navbar__link--name navbar__name-top"
						href="https://kevinkotcherga.fr/"
						onClick={handleLinkClick}
					>
						<img src={logo} alt="" />
						<p className="navbar__name">KevinKotcherga</p>
					</a>
				</div>
				<div className={`navbar__list ${isActive ? 'active' : ''}`}>
					<a className="navbar__link" href="#stacks" onClick={handleLinkClick}>
						<p className={`navbar__text ${isActive ? 'active' : ''}`}>Stacks</p>
					</a>
					<a
						className="navbar__link"
						href="#projects"
						onClick={handleLinkClick}
					>
						<p className={`navbar__text ${isActive ? 'active' : ''}`}>
							{t('navbarProjects')}
						</p>
					</a>
					<a className="navbar__link" href="#contact" onClick={handleLinkClick}>
						<p className={`navbar__text ${isActive ? 'active' : ''}`}>
							Contact
						</p>
					</a>
					<div
						onClick={changeLanguage}
						className="button"
					>
						<div className="button__content">
							<div className="button__text">
								{isEnglish ? 'Français' : 'Anglais'}
							</div>
						</div>
					</div>
				</div>
				<button
					className={`burger ${isActive ? 'active' : ''}`}
					onClick={activeBurger}
				></button>
			</nav>
		</div>
	);
};

export default Navbar;
