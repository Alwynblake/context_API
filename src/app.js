import React from 'react';
import Increment from './components/incrementer/incrementer.js'
import Decrement from './components/decrementer/decrementer.js'

import Counter from './components/counter/counter.js';
import SettingsProvider from './components/settings/site-context.js'

export default class App extends React.Component {
  render() {
    return (
        <SettingsProvider>
          <Decrement/>
          <Counter />
          <Increment/>
        </SettingsProvider>
    );
  }
};