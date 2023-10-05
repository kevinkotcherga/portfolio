import { useTranslation } from 'react-i18next';
import { IProjectsTile } from '../interfaces/IProjectsTile';
import externalLink from '../images/projects/open.svg';

const TileProjects = ({ tile }: { tile: IProjectsTile }) => {
	const { t } = useTranslation();

	return (
		<a
			href={tile.link}
			target="_blank"
			rel="noreferrer"
			className={`projects__tile projects__tile--${tile.name}`}
		>
			<div className="projects__logo">
				<img src={tile.image} alt="" />
				{tile.name === 'devinnet' && <p>{tile.name}</p>}
			</div>
			<p className="projects__description">{t(tile.description)}</p>
			<div className={`projects__tags projects__tags--${tile.name}`}>
				{tile.tags.map(tag => (
					<div>#{tag}</div>
				))}
			</div>
			<div className={`projects__img projects__img--${tile.name}`}></div>
			<div className="projects__external-link">
				<img src={externalLink} />
			</div>
		</a>
	);
};

export default TileProjects;
