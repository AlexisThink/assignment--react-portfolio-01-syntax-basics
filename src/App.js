import React from 'react';
import Portfolio from './components/PortfolioFixed';
import Content from './components/PortfolioContent';
import './css/styles.css'

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Portfolio />
        <Content />
      </div>  
    );
  }
}

export default App;
