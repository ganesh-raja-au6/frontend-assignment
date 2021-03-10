import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'

import {Sample, SimpleForm, LandingPage, Home} from './pages'


function App() {
  return (
    <Switch>
      <Route path="/sampleform" component={SimpleForm} />
      <Route path="/sample" component={Sample} />
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
    // <Sample />
    // <SimpleForm />
    // <LandingPage />
  );
}

export default App;
