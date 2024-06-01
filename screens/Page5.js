 import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Page5 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { bmi } = route.params;

  const getSuggestions = (bmi) => {
    if (bmi < 18.5) {
      return [
        'Augmentez votre apport calorique avec des aliments sains.',
        'Consultez un nutritionniste pour un régime adapté.',
        'Faites des exercices de musculation pour gagner de la masse.'
      ];
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return [
        'Continuez à maintenir une alimentation équilibrée.',
        'Faites régulièrement de l’exercice.',
        'Hydratez-vous bien.'
      ];
    } else if (bmi >= 25 && bmi < 29.9) {
      return [
        'Réduisez votre apport calorique en évitant les aliments gras et sucrés.',
        'Augmentez votre activité physique quotidienne.',
        'Consultez un professionnel de la santé pour des conseils personnalisés.'
      ];
    } else if (bmi >= 30 && bmi < 34.9) {
      return [
        'Adoptez un régime alimentaire pauvre en calories.',
        'Faites de l’exercice régulièrement et consultez un coach sportif.',
        'Prenez rendez-vous avec un médecin pour un suivi de votre santé.'
      ];
    } else if (bmi >= 35 && bmi < 39.9) {
      return [
        'Consultez immédiatement un nutritionniste pour un plan alimentaire.',
        'Intensifiez votre activité physique.',
        'Suivez de près votre état de santé avec un professionnel.'
      ];
    } else {
      return [
        'Consultez un professionnel de santé pour un suivi immédiat.',
        'Suivez un régime alimentaire strict sous surveillance.',
        'Pratiquez des exercices adaptés à votre condition physique.'
      ];
    }
  };

  const suggestions = getSuggestions(bmi);
const [currentPage, setCurrentPage] = React.useState(4); // Page 3 est la page actuelle par défaut
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="#FAFF15"
        onPress={() => navigation.navigate('Page3', { bmi })}
        style={styles.arrow}
      />
      <Text style={styles.title}>Conseils</Text>
      <ScrollView style={styles.scrollView}>
        {suggestions.map((suggestion, index) => (
          <Text key={index} style={styles.suggestion}>{suggestion}</Text>
        ))}
      </ScrollView>
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
    top: 41,
    left: 32,
    zIndex: 1,
  },
  title: {
    fontSize: 48,
    color: '#FFFFFF',
    marginTop: 123,
    textAlign: 'center',
  },
  scrollView: {
    marginTop: 20,
  },
  suggestion: {
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 10,
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

export default Page5;