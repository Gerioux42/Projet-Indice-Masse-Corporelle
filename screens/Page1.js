import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Page1 = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Page2');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
const [currentPage, setCurrentPage] = Réagir.useState(1); 
  retour (
    <View style={styles.récipient}>
      <Text style={styles. .title1}> Bienvenue sur </Text>
      <Image source={exiger('../assets / IMC Logo.png ')} style ={styles.logo} />
      <Text style={styles. .title2}> Indice de Masse Corporelle </Text>
        <View style={styles. .pagination}>
        <View style={[styles.pageIndicateur, currentPage === 1 && styles.pageIndicatorFilled]} />
        <View style={[styles.pageIndicateur, currentPage === 2 && styles.pageIndicatorFilled]} />
        <View style={[styles.pageIndicateur, currentPage === 3 && styles.pageIndicatorFilled]} />
        <View style={[styles.pageIndicateur, currentPage === 4 && styles.pageIndicatorFilled]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.créer({
  récipient: {
    flex: 1,
    backgroundColor: '# 005858',
    alignItems: 'centre',
    justifyContent: 'centre',
  },
  titre 1: {
    fontSize: 32,
    fontFamily: 'Régulier',
    couleur: '#FFFFFF',
    position: 'absolu',
    Haut: 192,
  },
  title2: {
    fontSize: 24,
    fontFamily: 'Régulier',
    couleur: '#FFFFFF',
    position: 'absolu',
    bas: 100,
  },
  logo: {
    largeur: 268,
    hauteur: 276,
    position: 'absolu',
    Haut: 273,
  },

pagination: {
  position: 'absolu',
  bas: 20,
  gauche: 0,
  droite: 0,
  flexDirection: 'ligne',
  justifyContent: 'centre',
  alignItems: 'centre',
  zIndex: 1, 
  // marginBottom: -10, 
},
  pageIndicateur: {
    largeur: dix,
    hauteur: dix,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
  pageIndicatorFilled: {
    backgroundColor: '# 00FEDF',
  },
});

exportation par défaut Page1;
