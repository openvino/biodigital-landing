import { About } from "./components/About";

import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

import { Navbar } from "./components/Navbar";

import { ScrollToTop } from "./components/ScrollToTop";

import { Sponsors } from "./components/Sponsors";

import "./App.css";
import Requirements from "./components/Requirements";

import { Home } from "./components/Home";
import { Kleros } from "./components/Kleros";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Sponsors />
			<About />

			<Features />
			<Requirements />
			<Kleros />

			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
