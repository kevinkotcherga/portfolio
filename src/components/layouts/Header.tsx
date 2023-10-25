import Splitting from 'splitting';
import { useEffect } from 'react';
import 'splitting/dist/splitting.css';
import EmojiHeader from '../EmojiHeader';
import 'splitting/dist/splitting-cells.css';
import { gsapHeader } from '../../gsap/header';

import react from '../../images/header/react.png';
import arrow from '../../images/header/arrow.svg';
import Gradient from '../Gradient';
import BadgeHeader from '../BadgeHeader';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t } = useTranslation();

	useEffect(() => {
		Splitting({
			by: 'chars',
		});
		gsapHeader();
	}, []);

	return (
		<section className="header">
			<div className='header__gradient header__gradient--1'></div>
			<div className='header__gradient header__gradient--2'></div>
			<div className='header__gradient header__gradient--3'></div>
			{/* <div>
				<Gradient
					position={{ top: '-10%', left: '-5%' }}
					rotationSpeed={{ x: 0.003, y: 0.006, z: 0.0 }}
					scale={{ x: 3, y: 3, z: 3 }}
					color="#023E39"
				/>
			</div>
			<div>
				<Gradient
					position={{ top: '0%', left: '-15%' }}
					rotationSpeed={{ x: -0.003, y: -0.001, z: 0.002 }}
					scale={{ x: 3, y: 3, z: 3 }}
					color="#3A125C"
				/>
			</div>
			<div>
				<Gradient
					position={{ top: '-20%', left: '-20%' }}
					rotationSpeed={{ x: -0.002, y: -0.001, z: -0.002 }}
					scale={{ x: 2, y: 2, z: 2 }}
					color="#54A0B8"
				/>
			</div>
			<div>
				<Gradient
					position={{ top: '20%', left: '-20%' }}
					rotationSpeed={{ x: -0.003, y: -0.002, z: -0.001 }}
					scale={{ x: 2, y: 2, z: 2 }}
					color="#3A125C"
				/>
			</div> */}
			<div className="header__container">
				<div className="header__wrapper">
					<p className="header__headline" data-splitting>
						Front-end
					</p>
					<div className="header__headline-gradient"></div>
				</div>
				<div className="header__wrapper header__wrapper--creative">
					<p className="header__badge" data-splitting>
						Creative
					</p>
				</div>
				<div className="header__wrapper">
					<p className="header__subhead" data-splitting>
						Web{' '}
						<span className="underline">
							<span className="underline__container underline__container--banner"></span>
							<span className="underline__word">developer.</span>
						</span>
					</p>
				</div>
				<div className="header__wrapper">
					<div className="header__description">
						<p>{t('descriptionBanner')}</p>
						<BadgeHeader href={'https://www.docker.com/'} text={'Docker'} />
						<p>,</p>
						<BadgeHeader href={'https://jestjs.io/fr/'} text={'Jest'} />
						<p>&</p>
						<BadgeHeader
							href={'https://www.typescriptlang.org/'}
							text={'Typescript'}
						/>
					</div>
				</div>
				<div className="header__wrapper header__wrapper--emoji-right">
					<EmojiHeader name={'right'} image={react} />
				</div>
				<div className="header__wrapper header__wrapper--emoji-left">
					<EmojiHeader name={'left'} image={react} />
				</div>
			</div>
			<svg className='header__arrow' width="71" height="77" viewBox="0 0 71 77" fill="none"><g opacity="0.8"><path opacity="0.8" d="M70 1L40.5153 18.0926C37.4135 19.8907 33.5865 19.8907 30.4847 18.0926L1 1" stroke="#6363a8" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.6" d="M70 29L40.5153 46.0926C37.4135 47.8907 33.5865 47.8907 30.4847 46.0926L1 29" stroke="#6363a8" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.4" d="M70 57L40.5153 74.0926C37.4135 75.8907 33.5865 75.8907 30.4847 74.0926L1 57" stroke="#6363a8" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
		</section>
	);
};

export default Header;
