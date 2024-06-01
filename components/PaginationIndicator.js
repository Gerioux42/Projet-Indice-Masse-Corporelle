import React from 'react';
import { View, StyleSheet } from 'react-native';

const PaginationIndicator = ({ total, current }) => {
  return (
    <View style={styles.pagination}>
      {[...Array(total)].map((_, index) => (
        <View
          key={index}
          style={[styles.pageIndicator, index === current && styles.pageIndicatorFilled]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  pageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FAFF15',
    marginHorizontal: 5,
  },
  pageIndicatorFilled: {
    backgroundColor: '#005858',
  },
});

export default PaginationIndicator;
