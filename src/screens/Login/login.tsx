import React from "react";
import { 
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon/button';
import { styles } from './loginStyles';
import IllustrationImg from '../../assets/illustration.png'

export function Login(){
  return(
    <View style={styles.conteiner}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`} suas jogatinas {`\n`} facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupo para jogar seus games {`\n`} favoritos com seus amigos
        </Text>
        
        <ButtonIcon 
            title="Entrar com Discord"
            activeOpacity={0.7}
        />
      </View>
    </View>
  )
}