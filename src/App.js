// Importing Pages
import AboutUs from './pages/AboutUs'
import Skills from './pages/Skills';
import ContactMe from './pages/ContactMe';
import ProjectDetail from './pages/ProjectDetail'

//Global Style 
import GlobalStyle from './components/GlobalStyles'

import Nav from './components/Nav';

//Router 
import {Switch , Route , useLocation} from 'react-router-dom'

//Animation 
import {AnimatePresence} from 'framer-motion' ; 

function App() {

  const location = useLocation();
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav />
        <AnimatePresence exitBeforeEnter>
        <Switch Location = {location} key = {location.pathname}>
          <Route path = "/" exact>
            <AboutUs />
          </Route>
          
          <Route path = "/skills" exact>
            <Skills/>
          </Route>
          <Route path = "/contact">
            <ContactMe/> 
          </Route>
          <Route path = "/skills/:id" > 
            <ProjectDetail />
          </Route>
        </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
