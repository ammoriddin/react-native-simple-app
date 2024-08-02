import filter from 'lodash.filter';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, Pressable, TextInput } from 'react-native';

const API= "https://jsonplaceholder.typicode.com/users"

const MainScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState()
  const [fullData, setFullData] = useState([])
  const[searchQuery, setSearchQuery] = useState("")
  
  const handleSearch = (query) => {
    setSearchQuery(query)
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery)
    });
    setData(filteredData)
  }

  const contains = ({name, email}, query) => {
    if (name.toLowerCase().includes(query) || email.toLowerCase().includes(query)) {
      return true
    }

    return false
  }

  const handleNavigate = () => {
    navigation.navigate('User Profile')
  }

  useEffect(() => {
    setLoading(true)
    fetchData(API)
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json()
      
      setData(json)
      setFullData(json);
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  if (loading) {
    return <ActivityIndicator style={{flex: '1', justifyContent: 'center', alignItems: 'center'}} size="large" color="#0000ff" />;
  }

  if (error) {
    return( 
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error in fetching data ... Please Chek your internet connection</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput value={searchQuery} onChangeText={handleSearch} autoCorrect={false} autoCapitalize='none' placeholder='Search User' clearButtonMode='always' style={styles.searchButton} />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={handleNavigate} style={styles.item}>
            <Image width={60} height={60} style={styles.userPhoto} source={{uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}} />
            <View style={{display: 'flex', justifyContent: 'center'}}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10
  },

  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    objectFit: 'cover'
  },
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },

  item: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    alignItems: 'center',
    marginBottom: 15,
    minWidth: '360px',
    borderRadius: '10px'
  },

  name: {
    fontSize: 17,
    fontWeight: '500',
  },

  email: {
    fontSize: 14,
    fontWeight: '400',
    color: '#b1b1b1'
  },
});

export default MainScreen;