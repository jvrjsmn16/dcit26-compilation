import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentProfile() {
  return (
    <View style={profileStyles.page}>
      <Text style={profileStyles.heading}>Student Profile</Text>

      <Text style={profileStyles.fieldName}>Name:</Text>
      <Text style={profileStyles.fieldText}>Jesmin Javier</Text>

      <Text style={profileStyles.fieldName}>Age:</Text>
      <Text style={profileStyles.fieldText}>20</Text>

      <Text style={profileStyles.fieldName}>Course/Year/Section:</Text>
      <Text style={profileStyles.fieldText}>
        BS Computer Science, 3rd Year, Section 4
      </Text>

      <Text style={profileStyles.fieldName}>About Me:</Text>
      <Text style={profileStyles.fieldText}>
        I'm passionate about coding and enjoy the challenge of solving problems. I love exploring creative ideas, learning new things, and finding different  ways to improve my coding skills.
      </Text>

      <Text style={profileStyles.fieldName}>Achievements:</Text>
      <Text style={profileStyles.fieldText}>- With Honors(2018,2019,2020,2021,2022)</Text>

      <Text style={profileStyles.fieldName}>Skills:</Text>
      <Text style={profileStyles.fieldText}>- Java</Text>
      <Text style={profileStyles.fieldText}>- React Native</Text>
      <Text style={profileStyles.fieldText}>- Web Development</Text>
      <Text style={profileStyles.fieldText}>- Blender Animation</Text>
    </View>
  );
}

const profileStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  fieldName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  fieldText: {
    fontSize: 14,
    color: '#333333',
    marginTop: 2,
  },
});