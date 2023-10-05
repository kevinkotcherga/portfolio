import { Ref } from 'react';

export interface ICardFooter {
	image: string | null;
	text: string;
  name: string | null;
	tileRef: Ref<HTMLDivElement>;
	cursorWrapRef: Ref<HTMLDivElement>;
}
