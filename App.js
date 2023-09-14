import React, { useRef } from 'react';
import { StyleSheet, View, PanResponder, Animated } from 'react-native';

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, 
          dy: pan.y, 
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      pan.flattenOffset(); // This merges the offset value into the base value and resets the offset to zero.
    },
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 }); // Reset the value to use the offset as the starting position.
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.circle,
          {
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
});
