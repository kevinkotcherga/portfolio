import Tilt from './Tilt';
import { MagneticButton } from './MagneticButton';
import { ICardStacks } from '../interfaces/ICardStacks';
import { useEffect } from 'react';
import { cardStacks } from '../gsap/cardStacks';
import { useTranslation } from 'react-i18next';

const CardStacks = (props: ICardStacks) => {
	const { t } = useTranslation();

	useEffect(() => {
		cardStacks();
	}, []);

	return (
		<div className={`stacks__card stacks__card--${props.title.toLowerCase()}`}>
			<div className="stacks__card-content">
				<h3>
					<span>{props.title}</span>
				</h3>
			</div>
			<div className="stacks__logos">
				<div className="stacks__logos-content">
					{props.logos[0].magnetic &&
						props.logos[0].magnetic.map((logo, index) => (
							<MagneticButton
								key={index}
								className={`magnetic magnetic--${logo.class}`}
								scale={1.5}
								tollerance={0.8}
								speed={0.5}
							>
								<>
									<div className="stacks__skill">
										<div className="stacks__skill-content">
											{logo.class === 'restapi' ? <div className='stacks__hover-me'>{t('stacksHover')}</div> : ''}
											<img src={logo.image} alt="" />
											<p>{logo.name}</p>
										</div>
									</div>
								</>
							</MagneticButton>
						))}
					{props.logos[1].tilt &&
						props.logos[1].tilt.map((logo, index) => (
							<div
								className={`stacks__skill stacks__skill--${logo.class}`}
								key={index}
							>
								<Tilt>
									<img src={logo.image} alt="" />
									<p>{logo.name}</p>
								</Tilt>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default CardStacks;
