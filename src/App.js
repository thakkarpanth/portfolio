// Importing Pages
import AboutUs from './pages/AboutUs'
import Skills from './pages/Skills';
import ContactMe from './pages/ContactMe';
import ProjectDetail from './pages/ProjectDetail'

//Global Style 
import GlobalStyle from './components/GlobalStyles'

import Nav from './components/Nav';

//Router 
import {Switch , Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav />
        <Switch>
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
    </div>
  );
}

export default App;
