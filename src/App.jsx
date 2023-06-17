//Dependencies
import {createRoot} from 'react-dom/client';

//Components
//import Pet from './components/Pet';
import { SearchParams } from './components/SearchParams.jsx';

const App = () => (
		<div>
			<h1>Adopt Me!</h1>
			<SearchParams />
		</div>
	);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
