import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.handleTextArea = this.handleTextArea.bind(this);

    this.state = {
      jam: '',
      bread: '',
      secondbread: '',
      txtPBnJ: '',
    }
  }


  handleTextArea(event) {
    this.setState({ txtPBnJ: event.target.value })
  }


  render() {
    return (
      <div>
        
        <select name='jam'>
          <option value="peanut">peanutbutter</option>
          <option value="jelly">jelly</option>
          <option selected value="pbnj">peanutbutter and jelly</option>
        </select>

        <br />
        
        <label>Bread Type
          <input name='bread' type='bread' />
        
        </label>
        <br />
        
        <label>Other Type
          <input name='secondbread' type='bread' />
        </label>
        
        <br />

        <textarea
        placeholder='I like peanutbutter and jelleeeeeeeeeey'
        name='txtPBnJ'
        onChange={this.handleTextArea}
        />

      </div >
    )
  }
}

export default App;
