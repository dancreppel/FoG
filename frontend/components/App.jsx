import React from 'react';
import GreetContainer from './greet/greet_container';

const App = props => (
  <>
    <header>
      <h1>Fans of Gaming</h1>
      <GreetContainer />
    </header>

    <Route path='/login'/>
    <Route path='/signup'/>
  </>
);

export default App;