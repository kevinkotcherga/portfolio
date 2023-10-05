import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

const resources = {
	fr: {
		translation: frTranslation,
	},
	en: {
		translation: enTranslation,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'fr',
	fallbackLng: 'fr',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
