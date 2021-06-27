import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/globalTheme';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
	hascheckBox?: boolean,
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
   checked = false,
	 hascheckBox = false,
  ...rest
}: Props){
  const { secondary040 ,secondary050, secondary070, secondary085 } = theme.colors;

  return(
    <RectButton {...rest}>
      <LinearGradient
      style={styles.container}
      colors={[secondary050, secondary070]}
      >
        <LinearGradient 
					style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
					colors= {[ checked ? secondary085 : secondary050, secondary040 ]}
				>
          {
						hascheckBox &&
						<View style={
							checked ? styles.checked : styles.check
						}/>
					}

          <Icon 
              width={48} 
              height={48}
          />

          <Text style={styles.title}>
            { title }
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}