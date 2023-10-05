import { useEffect } from 'react';
import TileProjects from '../TileProjects';
import { useTranslation } from 'react-i18next';
import { tiles } from '../../utils/projects/tiles';
import { gsapProjects } from '../../gsap/projects';

const Projects = () => {
	const { t } = useTranslation();

	useEffect(() => {
		gsapProjects();
	}, []);

	return (
		<section id="projects" className="projects">
			<div className="projects__background"></div>
			<div className="projects__container">
				<div className="projects__gradient"></div>
				<h2 className="projects__title"> {t('projectsTitle')}</h2>
				<div className="projects__grid">
					{tiles.map(tile => (
						<TileProjects key={tile.id} tile={tile} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
