import React, { Component } from 'react';

import Header from './components/Header';
import Button from './components/Button'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header pageHeader="My App Title"/>
        <section>
          <Button label="My Button" disabled/>
        </section>
      </div>
    )
  }
}