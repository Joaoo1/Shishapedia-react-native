import React, { Component } from 'react';
import { Animated } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class SwipeableRow extends Component {
  renderRightActions = () => (
    <RectButton style={styles.rightAction} onPress={this.close}>
      <AnimatedIcon
        name="delete-forever"
        size={30}
        color="#fff"
        style={[styles.actionIcon]}
      />
    </RectButton>
  );

  render() {
    const { children } = this.props;
    return (
      <Swipeable
        friction={1.5}
        rightThreshold={100}
        renderRightActions={this.renderRightActions}
        {...this.props}
      >
        {children}
      </Swipeable>
    );
  }
}

export default SwipeableRow;
