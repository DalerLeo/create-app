import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import BaseLayout from '../Layouts/BaseLayout'
import NormalizedStyles from '../Styled/NormalizedStyles'
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NormalizedStyles/>
      <BaseLayout/>
    </Router>
  );
}

export default App;
