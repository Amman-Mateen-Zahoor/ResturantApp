import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { wp, hp } from '../../utils/utils'; // Replace with your actual utils path
import { ScrollView } from 'react-native-gesture-handler';

const StatsCard: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Visits Section */}
      <View style={styles.sectionTop}>
        <View style={styles.row}>
          <Icon name="trophy" size={wp(6)} color="#fff" style={styles.icon} />
          <View style={styles.textGroup}>
            <Text style={styles.titleWhite}>54 Visits</Text>
            <Text style={styles.subWhite}>7 rewards unlocked</Text>
            <Text style={styles.subWhite}>Level Gold</Text>
          </View>
          <View style={styles.badgeGold}>
            <Text style={styles.badgeTextWhite}>Gold</Text>
          </View>
        </View>
      </View>

      {/* Meals Donated Section */}
      <View style={styles.sectionBottom}>
        <View style={styles.row}>
          <Icon name="hand-holding-heart" size={wp(6)} color="#219653" style={styles.icon} />
          <View style={styles.textGroup}>
            <Text style={styles.titleGreen}>54 Meals Donated</Text>
            <Text style={styles.subDark}>Thank you for making a difference!</Text>
            <Text style={styles.subDark}>Community Hero</Text>
          </View>
          <View style={styles.badgeHero}>
            <Text style={styles.badgeTextDark}>Hero</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const ReferFriendsSection = () => {
  return (
    <View style={styles.customCardContainer}>
      <Text style={styles.customTitle}>Refer Friends</Text>
      <Text style={styles.customSubtitle}>
        Invite 5 friends and receive a free dessert at one of our participating establishments.
      </Text>

      <View style={styles.customStatsRow}>
        <View style={styles.customStatBox}>
          <Text style={styles.customStatNumber}>3</Text>
          <Text style={styles.customStatLabel}>Friends Invited</Text>
          </View>
        <View style={styles.customStatBox}>
          <Text style={styles.customStatNumber}>1</Text>
          <Text style={styles.customStatLabel}>Claims Made</Text>
        </View>
      </View>

      <View style={styles.customShareRow}>
        <Icon name="gift" size={hp(3)} color="#4CAF50" />
        <Text style={styles.customShareText}>Share the experience!</Text>
      </View>
      <Text style={styles.customShareSubtitle}>
        Spread the word and earn sweet rewards
      </Text>

      <TouchableOpacity style={styles.customInviteButton}>
        <Icon name="share-2" size={hp(2.5)} color="#fff" />
        <Text style={styles.customInviteText}>Invite Friends</Text>
      </TouchableOpacity>
    </View>
  );
};


const RewardsScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <StatsCard/>
      <ReferFriendsSection/>
</ScrollView>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  mainContainer:{
    display:"flex",
    padding:wp(3),
  },
  container: {
    borderRadius: wp(3),
    overflow: 'hidden',
    backgroundColor: '#fff',
    width: '100%',
    elevation: 2,
  },
  sectionTop: {
    backgroundColor: '#27ae60',
    padding: wp(4),
  },
  sectionBottom: {
    backgroundColor: '#f4faf6',
    padding: wp(4),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
  },
  icon: {
    marginRight: wp(3),
    marginTop: hp(0.5),
  },
  textGroup: {
    flex: 1,
  },
  titleWhite: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  subWhite: {
    color: '#e0f2e9',
    fontSize: wp(3.5),
    marginTop: hp(0.3),
  },
  badgeGold: {
    backgroundColor: '#219653',
    borderRadius: wp(3),
    paddingVertical: hp(0.4),
    paddingHorizontal: wp(2.5),
    position: 'absolute',
    right: 0,
    top: 0,
  },
  badgeTextWhite: {
    color: '#fff',
    fontSize: wp(3.2),
    fontWeight: '600',
  },
  titleGreen: {
    color: '#219653',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  subDark: {
    color: '#333',
    fontSize: wp(3.5),
    marginTop: hp(0.3),
  },
  subBlue: {
    color: '#2f80ed',
    fontSize: wp(3.5),
    marginTop: hp(0.3),
  },
  badgeHero: {
    backgroundColor: '#f2c94c',
    borderRadius: wp(3),
    paddingVertical: hp(0.4),
    paddingHorizontal: wp(2.5),
    position: 'absolute',
    right: 0,
    top: 0,
  },
  badgeTextDark: {
    color: '#000',
    fontWeight: '600',
    fontSize: wp(3.2),
  },
  customCardContainer: {
    padding: wp(5),
    backgroundColor: '#fff',
    borderRadius: wp(2),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: wp(4),
  },
  customTitle: {
    fontSize: hp(2.3),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  customSubtitle: {
    fontSize: hp(1.7),
    color: '#555',
    marginBottom: hp(2),
  },
  customStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  customStatBox: {
    alignItems: 'center',
    width: wp(35),
    padding: hp(1),
    backgroundColor: '#f9f9f9',
    borderRadius: wp(2),
  },
  customStatNumber: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
  customStatLabel: {
    fontSize: hp(1.6),
    color: '#666',
  },
  customShareRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  customShareText: {
    fontSize: hp(1.9),
    fontWeight: '500',
    marginLeft: wp(2),
    color: '#4CAF50',
  },
  customShareSubtitle: {
    fontSize: hp(1.5),
    color: '#666',
    marginBottom: hp(2),
  },
  customInviteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    paddingVertical: hp(1.2),
    borderRadius: wp(2),
  },
  customInviteText: {
    color: '#fff',
    fontSize: hp(2),
    fontWeight: '600',
    marginLeft: wp(2),
  },
});
