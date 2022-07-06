import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated, Easing } from 'react-native';

// components
import SingleStar from './SingleStar';

export default function StarRating({ starNums = 5, defaultRating = 3, starSize = 32, starColor = "pink", starSpace=5, onSelect }) {
  const stars = []
  const [rating, setRating] = useState(defaultRating)

  // initialize animation instance
  const easeAnim = useRef(new Animated.Value(1)).current;

  // animation function that will be called when star is pressed
  const starAnimation = () => {
    Animated.timing(easeAnim, {
      toValue: 2,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      easeAnim.setValue(1)
    })
  }

  // animation styles
  const animateScale = easeAnim.interpolate({
    inputRange: [1, 1.5, 2],
    outputRange: [1, 1.5, 1]
  })

  const animateOpacity = easeAnim.interpolate({
    inputRange: [1, 1.2, 2],
    outputRange: [1, 0.5, 1]
  })

  const animateRotate = easeAnim.interpolate({
    inputRange: [1, 1.25, 1.75, 2],
    outputRange: ["0deg", "3deg", "-3deg", "0deg"]
  })

  const animationStyle = {
    transform: [{ scale: animateScale }, { rotate: animateRotate }],
    opacity: animateOpacity,
  }
  
  /**
   * set current rating to selected stars
   * call the callback function that is passed from props
   * @param {Number} starNum 
   */
  const handleStarSelected = (starNum) => {
    setRating(starNum)
    if (onSelect) {
      onSelect(starNum)
    }
  }

  // create stars in a row based on star numbers that be passed from props
  for (let i=1; i<=starNums; i++) {
    stars.push(
      <TouchableWithoutFeedback key={i} onPress={() => {handleStarSelected(i); starAnimation()}}>
        <Animated.View style={animationStyle}>
          <SingleStar filled={i<=rating ? true : false} size={starSize} color={starColor} space={starSpace} />
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      {stars}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

