const EmojiHeader = ({ image, name }: { image: string; name: string }) => {
	return (
		<div className={`header__emoji header__emoji--${name}`}>
			<div className="header__emoji-container">
				<img src={image} alt="" className="emoji" />
			</div>
		</div>
	);
};

export default EmojiHeader;
