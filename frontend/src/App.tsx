import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/home.page';
import BannerComponent from './components/banner.component';
import FooterComponent from './components/footer.component';

const App: React.FC = () => (
  <Router>
    <BannerComponent />
    <Route path="/" component={HomePage} exact />
    <FooterComponent />
  </Router>
);

export default App;
