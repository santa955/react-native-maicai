import React from 'react';
import { WebView } from 'react-native';
import Header from '../components/Header/DetailHeader';

export default class WebWiew extends React.Component {
  static navigationOptions = {
    // header: { visible: false }
  }
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    let params = this.props.navigation.state.params;
    let url = params.url || ''
    return (
      <WebView
        source={{ 'uri': url }}
        style={{ marginTop: 20 }}
      />
    );
  }
}