import React from 'react';

class App extends React.Component {
  render() {
    if (!this.title) {
      return null;
    }
    return <div>{this.title}</div>;
  }
}

export default App;
