import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert ,TouchableOpacity } from 'react-native';

const Page2 = ({ navigation }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      Alert.alert('Erreur', 'Veuillez entrer votre poids et votre taille.');
      return;
    }

    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height);

    if (isNaN(numericWeight) || isNaN(numericHeight) || numericWeight <= 0 || numericHeight <= 0) {
      Alert.alert('Erreur', 'Veuillez entrer des valeurs numériques valides pour le poids et la taille.');
      return;
    }

    const bmi = (numericWeight / (numericHeight / 100) ** 2).toFixed(2);
     setWeight('');
     setHeight('');
    navigation.navigate('Page3', { bmi });
  };
const [currentPage, setCurrentPage] = React.useState(2); // Page 3 est la page actuelle par défaut
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/IMC Logo.png')}
        style={styles.logo}
        onError={(e) => console.log(e.nativeEvent.error)}
      />
      <Text style={styles.label}>Poids (Kg):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Taille (Cm):</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculer</Text>
        </TouchableOpacity>
      </View>
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
  logo: {
    width: 268,
    height: 276,
    alignSelf: 'center',
    marginTop: 18,
  },
  label: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
  },

    button: {
    width: 100,
    backgroundColor: '#FAFF15',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  buttonContainer: {
    alignItems: 'center', // Center the button horizontally
    marginTop: 20,
  },
  
  buttonText: {
    fontSize: 18,
    color: '#005858',
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

export default Page2;