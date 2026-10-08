import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.content}>
        {/* Avatar Section */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../../assets/images/profile_avatar.jpg')}
              style={styles.avatar}
            />
            <View style={styles.badgeContainer}>
              <MaterialIcons name="check" size={16} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Details Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Dineth</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.valueWithIcon}>
              <MaterialIcons name="email" size={20} color="black" style={styles.icon} />
              <Text style={styles.value}>dinethprashansa@gmail.com</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Points</Text>
            <View style={styles.valueWithIcon}>
              <FontAwesome name="star" size={20} color="black" style={styles.icon} />
              <Text style={styles.value}>{points}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* FAB */}
      <TouchableOpacity 
        style={styles.fab} 
        activeOpacity={0.8}
        onPress={() => setPoints(prev => prev + 1)}
      >
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  avatarWrapper: {
    position: 'relative',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ff6b6b',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#00cc66',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 15,
  },
  infoSection: {
    marginTop: 10,
  },
  infoRow: {
    marginBottom: 25,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  valueWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#000',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
