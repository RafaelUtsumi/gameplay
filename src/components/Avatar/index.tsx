import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/globalTheme';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary050, secondary070 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary050, secondary070]}
    >
      <Image 
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  )

}