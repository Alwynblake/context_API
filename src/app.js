import React from 'react';
import Increment from './components/incrementer/incrementer.js'
import Decrement from './components/decrementer/decrementer.js'

import Counter from './components/counter/counter.js';
import SettingsProvider from './components/settings/site-context.js'

export default class App extends React.Component {
  render() {

    const styles = {
      container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '40%',
      },
    };

    return (
        <div style={styles.container}>
        <SettingsProvider>
          <h2>Counter Context</h2>
          <Decrement/>
           <Counter />
          <Increment/>
        </SettingsProvider>
        </div>
    );
  }
};