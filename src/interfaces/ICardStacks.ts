export interface ICardStacks {
	title: string;
	logos: {
		magnetic?: { name: string; class: string; image: string }[];
		tilt?: { name: string; class: string; image: string }[];
	}[];
}
