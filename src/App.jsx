import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'

import {Sample, SimpleForm, LandingPage, Home, ComingSoon} from './pages'


function App() {
  return (
    <Switch>
      <Route path="/sampleform" component={SimpleForm} />
      <Route path="/sample" component={Sample} />
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/" component={Home} exact />
      <Route path="/comingsoon" component={ComingSoon} />
      <Redirect to="/" />
    </Switch>
    // <Sample />
    // <SimpleForm />
    // <LandingPage />
  );
}

export default App;
