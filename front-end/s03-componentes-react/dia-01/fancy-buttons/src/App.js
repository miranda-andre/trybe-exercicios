import React from 'react';
import './App.css';

function handleClick() {
  console.log(`Peanut Butter and Jelly Sandwich!!!`);
}


class App extends React.Component {
  render() {
    return (
      <main>
        <button onClick={handleClick}>Click Me</button>
      </main>
    );
  }
}

export default App;
