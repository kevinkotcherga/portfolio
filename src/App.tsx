import Contact from './components/layouts/Footer';
import Navbar from './components/Navbar';
import Projects from './components/layouts/Projects';
import Skills from './components/layouts/Stacks';
import Header from './components/layouts/Header';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
