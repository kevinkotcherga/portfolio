import { useEffect } from 'react';
import CardStacks from '../CardStacks';
import { useTranslation } from 'react-i18next';
import { gsapStacks } from '../../gsap/stacks';
import {
	backEndLogos,
	designLogos,
	frontEndLogos,
} from '../../utils/stacks/logos';
import Gradient from '../Gradient';

const Stacks = () => {
	const { t } = useTranslation();

	useEffect(() => {
		gsapStacks();
	}, []);

	return (
		<section id="stacks" className="stacks">
			<div className='stacks__gradient-header stacks__gradient-header--1'></div>
			<div className='stacks__gradient-header stacks__gradient-header--2'></div>
			<div className='stacks__gradient-header stacks__gradient-header--3'></div>
			{/* <div>
				<Gradient
					position={{ top: '-20%', right: '-15vw' }}
					rotationSpeed={{ x: 0.005, y: 0.005, z: 0.005 }}
					scale={{ x: 4, y: 4, z: 4 }}
					color="#2F2355"
				/>
			</div>
			<div>
				<Gradient
					position={{ top: '-10%', right: '-10vw' }}
					rotationSpeed={{ x: -0.002, y: -0.005, z: -0.006 }}
					scale={{ x: 4, y: 4, z: 4 }}
					color="#088075"
				/>
			</div>
			<div>
				<Gradient
					position={{ top: '-30%', right: '-25vw' }}
					rotationSpeed={{ x: -0.003, y: -0.005, z: 0.004 }}
					scale={{ x: 3, y: 3, z: 3 }}
					color="#3A125C"
				/>
			</div > */}
			{/* <img src={gradientBottom} className="stacks__background" alt="" /> */}
			<div className="stacks__container"></div>
			<div className="stacks__content">

				<h2 className="stacks__title">
					{t('stacksTitle')}
					<br />
					{t('stacksTitle2')}{' '}
					<span className="underline">
						<span className="underline__container underline__container--skills"></span>
						<span className="underline__word">{t('stacksTitle3')}.</span>
					</span>
					<div className="stacks__title-gradient"></div>
				</h2>
			</div>
			<div className="stacks__wrapper">
				<div className="stacks__gradient"></div>
				<CardStacks title={'Front-end'} logos={frontEndLogos} />
				<CardStacks title={'Back-end'} logos={backEndLogos} />
				<CardStacks title={'Design'} logos={designLogos} />
			</div>
		</section>
	);
};

export default Stacks;
