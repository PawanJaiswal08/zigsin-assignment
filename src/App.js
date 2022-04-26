import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Layouts/HomePage/HomePage';
import TeamPage from './Layouts/TeamPage/TeamPage';
import ContactsPage from './Layouts/ContactsPage/ContactsPage';
import IssuesPage from './Layouts/IssuesPage/IssuesPage';
import InfoPage from './Layouts/InfoPage/InfoPage';

function App() {
	return (
		<Router>
    		<Routes>
      			<Route path="/" element={<HomePage />}></Route>
      			<Route path="/team" element={<TeamPage />}></Route>
      			<Route path="/contacts" element={<ContactsPage />}></Route>
      			<Route path="/issues" element={<IssuesPage />}></Route>
      			<Route path="/info" element={<InfoPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
