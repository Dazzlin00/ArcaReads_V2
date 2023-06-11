import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';


//export default function Login() {
 // const [email, setEmail] = React.useState('');
  //const [password, setPassword] = React.useState('');

  //const handleLogin = () => {
    // Lógica para iniciar sesión
  //};
  export default function Login({ navigation }) 
  {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const handleLogin = () => {
      navigation.navigate('Home');
    };

  return (
    <View>
      <Text>Correo electrónico:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Contraseña:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}