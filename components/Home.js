import React from 'react';
import { Text,View, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/Data/categoriesData';
import popularData from '../assets/Data/popularData';
import colors from '../assets/colors/colors';
import { color } from 'react-native-reanimated';

Feather.loadFont();


export default Home = () => {
 
  const renderCategoryItem = ({item}) => {
    return (
      <View 
      style={[
        styles.categoryItemWrapper,
      {
      backgroundColor: item.selected ? colors.primary : colors.white,
      marginLeft: item.id == 1 ? 20 : 0,
      }
      ]}>
        <Image source={item.image} style={styles.categoryItemImage}/>
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View 
        style={[styles.categorySelectWrapper,
        {
          backgroundColor: item.selected ? colors.white : colors.secondary,
 
        }
        ]}>
          <Feather 
          name='chevron-right' 
          size={8} 
          style={styles.categorySelectIcon}
          color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Header */}
    <SafeAreaView>
     <View style = {styles.headerWrapper}>
      <Image source={require('../assets/images/profile.png')} style = {styles.profileImage}/>
      {/* Icon */}
     <Feather name='menu' size={24} color={colors.textDark}/>
     </View>
    </SafeAreaView>
    {/* Titles */}
    <View style={styles.titlesWrapper}>
      <Text style={styles.titlesSubTitle}>FOOD</Text>
      <Text style={styles.titlesTitle}>Delivery</Text>
    </View>
   {/* Search */}
   <View style={styles.searchWrapper}>
   <Feather name='search' size={16} color={colors.textDark} />
   <View style={styles.search}>
     <Text style={styles.searchText}>Search</Text>
   </View>
   </View>
   {/* Categories */}
   <View style={styles.categoriesWrapper}>
     <Text style={styles.categoriesTitle}>Categories</Text>
     <View style={styles.categoriesListWrapper}>
     <FlatList
      data={categoriesData}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id}
      horizontal = {true}
     />
     </View>
   </View>
    </View>
    )
}

 const styles = StyleSheet.create({
  container:{
   flex: 1,

  },

  headerWrapper: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingHorizontal: 20,
   paddingTop: 20,
   alignItems: 'center'
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingTop: 20
    
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  titlesSubTitle: {
    //fontFamily:'Montserrat-Regular',
    fontSize:16,
    color:colors.textDark,
  },
  titlesTitle: {
    //fontFamily:'Montserrat-Bold',
    fontSize:32,
    color:colors.textDark,
    marginTop: 5
  },
  searchWrapper:{
  flexDirection:'row',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginTop: 30
  },
  search: {
    flex:1,
    marginLeft: 10,
    borderBottomColor: colors.text,
    borderBottomWidth:2
  },
  searchText: {
//fontFamily:'Montserrat-SemiBold',
fontSize:14,
marginBottom:5,
color:colors.text
  },
  categoriesWrapper:{
    marginTop: 30,
  },
  categoriesTitle: {
  // fontFamily: '',
   fontSize: 16,
   paddingHorizontal: 20
  },
  categoriesListWrapper: {
  paddingTop: 15,
  paddingBottom: 20
  },
  
  categoryItemWrapper:{
   backgroundColor:'#F5CA48',
   marginRight: 20,
   borderRadius: 20
  },
  categoryItemImage:{
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf:'center',
    marginHorizontal:20
  },
  categoryItemTitle:{
textAlign:'center',
fontSize:14,
marginTop:10,
  },
  categorySelectWrapper:{
alignSelf:'center',
justifyContent:'center',
marginTop:20,
width:26,
height:26,
borderRadius:26,
marginBottom:20
  },
  categorySelectIcon:{
alignSelf:'center'
  }


 })