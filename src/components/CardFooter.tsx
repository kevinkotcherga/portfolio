import { ICardFooter } from '../interfaces/ICardFooter';
import flash from '../images/footer/flash.png';

const CardFooter = (props: ICardFooter) => {
	return (
		<div className="footer__right-container" ref={props.tileRef}>
			{props.name === 'cv' ? (
				<a
					href={process.env.PUBLIC_URL + '/downloads/cv-kotcherga-kevin.pdf'}
					download
					className="footer__right-tile"
				>
					<img className="footer__right-svg" src={flash} alt="" />
					<p>
						{props.text}
						<span>
							{props.image && (
								<img src={props.image} alt="" className="footer__right-arrow" />
							)}
						</span>
					</p>
				</a>
			) : props.name === 'github' ? (
				<a
					href="https://github.com/kevinkotcherga/portfolio"
					target="_blank"
					rel="noreferrer"
					className="footer__right-tile"
				>
					<img className="footer__right-svg" src={flash} alt="" />
					<p>
						{props.text}
						<span>
							{props.image && (
								<img src={props.image} alt="" className="footer__right-arrow" />
							)}
						</span>
					</p>
				</a>
			) : (
				<div className="footer__right-tile">
					<img className="footer__right-svg" src={flash} alt="" />
					<p>
						{props.text}
						<span>
							{props.image && (
								<img src={props.image} alt="" className="footer__right-arrow" />
							)}
						</span>
					</p>
				</div>
			)}
			<div className="cursor" ref={props.cursorWrapRef}></div>
		</div>
	);
};

export default CardFooter;
