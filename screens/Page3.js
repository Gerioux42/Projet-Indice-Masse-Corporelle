importationationation Réagir de 'réagir';
importationationation { Vue, Texte, Feuille de style, Bouton , TouchableOpacity } de «réagir natif»;
importationationation { Ionicônes } de '@ expo / vecteur-icons';

const Page3 = ({ navigation, itinéraire }) => {
  const { bmi } = itinéraire.params;

  const getDescription = (bmi) => {
    si (bmi < 18.5) {
      retour «Insuffisance pangérale (maigreur)»;
    } autre si (bmi> = 18.5 & & bmi < 24.9) {
      retour «Corpulence normale»;
    } autre si (bmi> = 25 & & bmi < 29.9) {
      retour «Surpoids»;
    } autre si (bmi> = 30 & & bmi < 34,9) {
      retour «Obéité modérée»;
    } autre si (bmi> = 35 & & bmi < 39,9) {
      retour «Obéité sévère»;
    } autre {
      retour «Obésité morbide ou massive»;
    }
  };

  const description = getDescription(bmi);
const [currentPage, setCurrentPage] = Réagir.useState(3); 
  retour (
    <View style={styles.récipient}>
      <Ionicons
 nom ="flèche-retour"
 taille ={24}
 couleur ="# FAFF15"
 onPress ={() => navigation.naviguer(«Page2»)}
 style ={styles.flèche}
      />
      <Text style={styles. .titre}> Résultats </Text>
      <Text style={styles. .résulter}>{bmi}</Text>
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
    marginTop: 100,  
    marginRight: 25, 
    alignSelf: 'flex-end', 
  },
  buttonText: {
    color: '#005858',
    fontSize: 18,
    fontWeight: 'bold',
  },

  pagination: {
  position: 'absolute',
  bottom: 20, 
  left: 0,
  right: 0,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1, 
  // marginBottom: -10, 
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
