import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default Settings = () => {
 
  const navigation = useNavigation();
  const handleModifyProfilePicture = () => {
    navigation.navigate('EditarPerfil');
  };

  const handleModifyInformation = () => {
    navigation.navigate('CambiarContrasenna');
  };

  const handleLogout = () => {
    navigation.navigate('CerrarSesion');
  };

  const handleDeactivateAccount = () => {
    navigation.navigate('Despedida');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require('../../assets/li.jpg')}
            />

            <Text style={styles.name}>Elizabeth Gomez </Text>
            <Text style={styles.userInfo}>eligomez@gmail.com </Text>
            <Text style={styles.userInfo}>Barquisimeto </Text>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity
            style={styles.item}
            onPress={handleModifyProfilePicture}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require('../../assets/modificar.jpg')}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Editar Perfil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={handleModifyInformation}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require('../../assets/cambioo.png')}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Cambiar Contraseña </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handleLogout}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require('../../assets/cerrar.jpg')}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Cerrar sesion</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={handleDeactivateAccount}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require('../../assets/desactivar.png')}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Desactivar Cuenta</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(93,135,218,0.6)',
  },
  headerContent: {
    padding: 8,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: '#4D194D',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#FFFFFF',
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: -80,
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#000000',
  },
});