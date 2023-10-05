const BadgeHeader = ({ href, text }: { href: string; text: string }) => {
	return (
		<a href={href} target="_blank" className="button">
			<div className="button__content">
				<div className="button__text">
					{text}
				</div>
			</div>
		</a>
	);
};

export default BadgeHeader;
