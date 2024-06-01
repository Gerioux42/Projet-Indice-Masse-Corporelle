import React from 'react';
import { View, Text, StyleSheet, Button , TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Page3 = ({ navigation, route }) => {
  const { bmi } = route.params;

  const getDescription = (bmi) => {
    if (bmi < 18.5) {
      return 'Insuffisance pondérale (maigreur)';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Corpulence normale';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Surpoids';
    } else if (bmi >= 30 && bmi < 34.9) {
      return 'Obésité modérée';
    } else if (bmi >= 35 && bmi < 39.9) {
      return 'Obésité sévère';
    } else {
      return 'Obésité morbide ou massive';
    }
  };

  const description = getDescription(bmi);
const [currentPage, setCurrentPage] = React.useState(3); // Page 3 est la page actuelle par défaut
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="#FAFF15"
        onPress={() => navigation.navigate('Page2')}
        style={styles.arrow}
      />
      <Text style={styles.title}>Résultats</Text>
      <Text style={styles.result}>{bmi}</Text>
      <Text style={styles.description}>{description}</Text>
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page5', { bmi })}>
        <Text style={styles.buttonText}>Conseils</Text>
      </TouchableOpacity>
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
    padding: 20,
  },
  arrow: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 48,
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 137,
  },
  result: {
    fontSize: 100,
    color: '#00FEDF',
    alignSelf: 'center',
    marginTop: 50,
  },
  description: {
    fontSize: 32,
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#FAFF15',
    padding: 10,
    borderRadius: 0,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    marginTop: 100,  // Adjust this value to move the button down
    marginRight: 25, // Adjust this value to move the button to the right
    alignSelf: 'flex-end', // Align the button to the right
  },
  buttonText: {
    color: '#005858',
    fontSize: 18,
    fontWeight: 'bold',
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

export default Page3;