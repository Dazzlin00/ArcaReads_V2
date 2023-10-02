import React, { useState } from 'react'
import { StyleSheet, Text, TextInput,View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";



export default Usuarios = () => {
  const data = [
    {
      id: 1,
      name: 'Mark Doe',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 1,
      name: 'John Doe',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 2,
      name: 'Clark Man',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 3,
      name: 'Jaden Boor',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    },
    {
      id: 4,
      name: 'Srick Tree',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 5,
      name: 'John Doe',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      id: 6,
      name: 'John Doe',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
    {
      id: 8,
      name: 'John Doe',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 9,
      name: 'John Doe',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 9,
      name: 'John Doe',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
  ]

  const [users, setUsers] = useState(data)

  const [searchTerm, setSearchTerm] = useState('')

  const clickEventListener = () => {
    Alert.alert('Option selected')
  }

  const searchFilterFunction = (text) => {
    setSearchTerm(text)
    const newData = data.filter(item => {
      const itemData = `${item.name.toUpperCase()}`
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    setUsers(newData)
  }






  return (
    <View style={styles.container}>   
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={searchTerm}
        underlineColorAndroid="transparent"
        placeholder="Buscar usuario"
      />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={users}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            style={styles.card}
            onPress={() => {
              clickEventListener()
            }}>
            <View style={styles.cardHeader}>
            </View>
            <Image style={styles.userImage} source={{ uri: item.image }} />
            <View style={styles.cardFooter}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.name}>{item.name}</Text>
                <LinearGradient colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]} style={styles.followButton}>
                  <TouchableOpacity onPress={() => clickEventListener()}>
                    <Text style={styles.followButtonText}>Seguir</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
 
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: -5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 90,
    width: 90,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: '#DCDCDC',
    borderWidth: 3,
  },
  name: {
    fontSize: 16,
    flex: 1,
    alignSelf: 'center',
    color: '#4D194D',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  followButton: {
    marginTop: 2, //mueve el boton hacia arriba o hacia abajo
    height: 35,
    width: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  icon: {
    height: 15,
    width: 15,
  },

  inputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
})
