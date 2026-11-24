import React from 'react';
import { Modal, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna condimentum mattis pellentesque. Ut diam quam nulla porttitor massa id neque. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Suspendisse in est ante in nibh mauris. Auctor elit sed vulputate mi sit amet mauris commodo quis. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Quam elementum pulvinar etiam non quam. Rhoncus dolor purus non enim praesent elementum facilisis leo.\n\n';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={styles.page}>
        {/* image at the top */}
        <Image
          style={styles.picture}
          source={require('../assets/myimage.png')}
        />

        {/* scrollable text */}
        <ScrollView style={styles.textBox}>
          <Text style={styles.paragraphText}>
            {paragraph}
            {paragraph}
            {paragraph}
          </Text>
        </ScrollView>

        {/* close button */}
        <TouchableOpacity style={styles.exitBtn} onPress={onClose}>
          <Text style={styles.exitLabel}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F9FF',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  picture: {
    width: 200,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  textBox: {
    flex: 1,
    marginBottom: 20,
  },
  paragraphText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
    color: '#222222',
  },
  exitBtn: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  exitLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});