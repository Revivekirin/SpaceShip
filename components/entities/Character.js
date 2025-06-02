import React from 'react';
import { Image } from 'react-native';

export const Character = ({ position, direction }) => {
  const sprite = {
    up: require('../../assets/char_up.png'),
    down: require('../../assets/char_down.png'),
    left: require('../../assets/char_left.png'),
    right: require('../../assets/char_right.png')
  };

  return (
    <Image
      source={sprite[direction || 'down']}
      style={{
        position: 'absolute',
        left: position[0],
        top: position[1],
        width: 48,
        height: 48
      }}
    />
  );
};