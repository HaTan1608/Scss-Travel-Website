
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { HelmetProvider } from "react-helmet-async";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import ModelProvider from "./context/providers/ModelProvider";
import Nav from "./components/Nav";
import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
import DestinationsProvider from "./context/providers/DestinationsProvider";
import Details from "./pages/Details";
import SharedProvider from "./context/providers/SharedProvider";
import GalleryProvider from "./context/providers/GalleryProvider";
function App() {
 
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
        <GalleryProvider>
          <DestinationsProvider>
            <SharedProvider>
             
            <Toggle/>
        <Nav/>
        <HelmetProvider>
      <Switch>
      <Route path='/' exact component={Home} />
											<Route path='/about' exact component={About} />
											<Route path='/details/:id' exact component={Details} />
											<Route path='/contact' exact component={Contact} />
											<Route component={NotFound} />
										 </Switch>
      </HelmetProvider>
            </SharedProvider>
          
      </DestinationsProvider>
      </GalleryProvider>
      </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
