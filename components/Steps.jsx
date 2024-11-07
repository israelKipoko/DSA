import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Steps = ({ nbrOfSteps = 4, currentStepColor = "#395886", current }) => {
  if (nbrOfSteps < 2) {
    nbrOfSteps = 2;
  }

  return (
    <View style={styles.container}>
      {Array.from({ length: nbrOfSteps }, (_, i) => (
        <React.Fragment key={i}>
          <View
            style={[
              styles.circle,
              { backgroundColor: current === i + 1 ? currentStepColor : '#ccc' },
            ]}
          >
            <Text style={styles.text}>{i + 1}</Text>
          </View>
          {i < nbrOfSteps - 1 && <View style={styles.line} />}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: 300,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Steps;
