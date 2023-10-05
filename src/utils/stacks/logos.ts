// front
import Sass from '../../images/stacks/front/sass.svg';
import Gsap from '../../images/stacks/front/gsap.svg';
import Redux from '../../images/stacks/front/redux.svg';
import ReactJs from '../../images/stacks/front/react.svg';
import GraphQl from '../../images/stacks/front/graphql.svg';
import Webflow from '../../images/stacks/front/webflow.svg';
import RestApi from '../../images/stacks/front/rest-api.svg';
// back
import Sql from '../../images/stacks/back/sql.svg';
import NodeJs from '../../images/stacks/back/nodejs.svg';
import Firebase from '../../images/stacks/back/firebase.svg';
import RubyOnRails from '../../images/stacks/back/ruby-on-rails.svg';
import ApolloServer from '../../images/stacks/back/apollo-server.svg';
// design
import Figma from '../../images/stacks/design/figma.svg';
import AntDesign from '../../images/stacks/design/ant-design.svg';
import MaterialDesign from '../../images/stacks/design/material-design.svg';

export const frontEndLogos = [
  {
    magnetic: [
      { name: 'Sass', class: 'sass', image: Sass },
      { name: 'Redux', class: 'redux', image: Redux },
      { name: 'Webflow', class: 'webflow', image: Webflow },
      { name: 'Rest Api', class: 'restapi', image: RestApi },
    ],
  },
  {
    tilt: [
      { name: 'React & Native', class: 'reactjs', image: ReactJs },
      { name: 'Gsap', class: 'gsap', image: Gsap },
      { name: 'GraphQl', class: 'graphql', image: GraphQl },
    ],
  },
];

export const backEndLogos = [
		{
			magnetic: [
				{ name: 'Firebase', class: 'firebase', image: Firebase },
				{ name: 'Apollo', class: 'apolloserver', image: ApolloServer },
			],
		},
		{
			tilt: [
				{ name: 'Node.js', class: 'nodejs', image: NodeJs },
				{ name: 'Ruby On Rails', class: 'rubyonrails', image: RubyOnRails },
				{ name: 'Sql', class: 'sql', image: Sql },
			],
		},
	];

export const designLogos = [
		{
			magnetic: [],
		},
		{
			tilt: [
				{ name: 'Figma', class: 'figma', image: Figma },
				{ name: 'Ant Design', class: 'antdesign', image: AntDesign },
				{ name: 'Material Design', class: 'materialdesign', image: MaterialDesign },
			],
		},
	];
