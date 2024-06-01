import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Page1 = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Page2');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
const [currentPage, setCurrentPage] = React.useState(1); // Page 3 est la page actuelle par défaut
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Bienvenue sur</Text>
      <Image source={require('../assets/IMC Logo.png')} style={styles.logo} />
      <Text style={styles.title2}>Indice de Masse Corporelle</Text>
        <View style={styles.pagination}>
        <View style={[styles.pageIndicator, currentPage === 1 && styles.pageIndicatorFilled]} />
        <View style={[styles.pageIndicator, currentPage === 2 && styles.pageIndicatorFilled]} />
        <View style={[styles.pageIndicator, currentPage === 3 && styles.pageIndicatorFilled]} />
        <View style={[styles.pageIndicator, currentPage === 4 && styles.pageIndicatorFilled]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005858',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 32,
    fontFamily: 'Regular',
    color: '#FFFFFF',
    position: 'absolute',
    top: 192,
  },
  title2: {
    fontSize: 24,
    fontFamily: 'Regular',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 100,
  },
  logo: {
    width: 268,
    height: 276,
    position: 'absolute',
    top: 273,
  },

pagination: {
  position: 'absolute',
  bottom: 20, // Positionnement à 0.5 cm du bas
  left: 0,
  right: 0,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1, // Assurez-vous que la pagination se trouve au-dessus du contenu de la page
  // marginBottom: -10, // Pour compenser l'espace ajouté par la position absolue
},
  pageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
  pageIndicatorFilled: {
    backgroundColor: '#00FEDF',
  },
});

export default Page1;