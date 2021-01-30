import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 10000);
  }

  render() {
    const { visible } = this.state;
    return (
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Cargando...</Text>
      </AnimatedLoader>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 400,
    height: 400
  }
});