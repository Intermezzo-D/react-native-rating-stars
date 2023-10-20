# react-native-rating-stars

This code is using @expo/vector-icons@13.0.0, please install the library before use it if you are not using Expo.

Link to @expo/vector-icons@13.0.0: https://www.npmjs.com/package/@expo/vector-icons

# Usage

```jsx
import React from 'react';
import {  View, StyleSheet } from 'react-native';
import StarRating from './src/StarRating';

export default function Rating() {
  const onSelect = (nums) => {
    // do something with the number of stars {nums} be selected
    console.log(nums)
  }

  return (
    <View style={styles.container}>
      <StarRating
        starNums={5}
        defaultRating={3}
        starSize={32}
        starColor={"#ebb434"}
        starSpace={5}
        onSelect={onSelect}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
```

# API

| Props | Description |
| --- | --- |
| `starNums: number` | Maxmium number of stars that will be displayed in a row |
| `defaultRating: number` | Default number of stars be selected |
| `starSize: number` | Size of each star |
| `starColor: string` | Color of stars |
| `starSpace: number` | Space between each stars |
| `onSelect: number => void` | Call back function that takes the number of stars be selected as parameters |
