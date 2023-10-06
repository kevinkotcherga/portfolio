// front
import ReactRouter from '../../images/stacks/front/react-router.svg';
import Jest from '../../images/stacks/front/jest.svg';
import Gsap from '../../images/stacks/front/gsap.svg';
import Redux from '../../images/stacks/front/redux.svg';
import ReactJs from '../../images/stacks/front/react.svg';
import GraphQl from '../../images/stacks/front/graphql.svg';
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
import Sass from '../../images/stacks/design/sass.svg';
import StyledComponent from '../../images/stacks/design/styled-components.svg';

export const frontEndLogos = [
  {
    magnetic: [
      { name: 'Jest', class: 'jest', image: Jest },
      { name: 'Redux', class: 'redux', image: Redux },
      { name: 'Context', class: 'context', image: ReactJs },
      { name: 'Rest Api', class: 'restapi', image: RestApi },
    ],
  },
  {
    tilt: [
      { name: 'React & Native', class: 'reactjs', image: ReactJs },
      { name: 'GraphQl', class: 'graphql', image: GraphQl },
			{ name: 'React Router', class: 'react-router', image: ReactRouter },
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
			magnetic: [
				{ name: 'Sass', class: 'sass', image: Sass },
      	{ name: 'Gsap', class: 'gsap', image: Gsap },
			],
		},
		{
			tilt: [
				{ name: 'Figma', class: 'figma', image: Figma },
				{ name: 'Ant Design', class: 'antdesign', image: AntDesign },
				{ name: 'Styled components', class: 'styled-components', image: StyledComponent },
			],
		},
	];
