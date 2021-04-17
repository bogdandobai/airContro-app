  
// @flow
import {Animated} from 'react-native';

export function springyFadeIn() {
  const transitionSpec = {
    timing: Animated.spring,
    duration:2000,
    tension: 2,
      useNativeDriver: true,
  };

  return {
    transitionSpec,
    screenInterpolator: ({ layout,position, scene }) => {
        const { index } = scene;
        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1],
        });
      return { opacity };
            
     // else {
      //   const thisSceneIndex = scene.index
      //   const width = layout.initHeight

      //   const translateY = position.interpolate({
      //     inputRange: [thisSceneIndex - 1, thisSceneIndex],
      //     outputRange: [width, 0],
      //     extrapolate:'clamp'
      //   })

      //   return { transform: [{ translateY }] }
      // }
    }
  
  }
  
    }