import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

increment = () => this.setState({counter: this.state.counter + 1});
decrement = () => this.setState({counter: this.state.counter - 1});

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;