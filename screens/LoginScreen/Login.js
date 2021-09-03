import React, { useState, useEffect } from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./LoginScreenStyle"
import { SafeAreaView, View, TouchableOpacity, TextInput, Text } from "react-native";

function LoginScreen({ navigation }) {
    const [users, setUsers] = useState({});
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    userToken = null;

    const signIn = (id, password) => {
        if (!id || !password) {
            return console.log("eksik şifre veya id");
        }

        if (users[id]) {
            if (users[id].pw == password) {
                console.log("giriş başarılı");
                return navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });

            }
            return console.log("şifre hatalı");
        }
        return console.log("kullanıcı yok");
    }
    const navigateToSignUpScreen = () => {
        setUserPassword("");
        setUserId("");
        return navigation.navigate("SignUp", { users: users, setUsers });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.inputViewStyle}>
                <View style={styles.isimbulamadım}>
                    <View style={styles.iconStyle}>
                        <Icon name="envelope" size={30} color="grey" />
                    </View>
                    <TextInput
                        value={userId}
                        style={styles.textInputStyle}
                        placeholder="id"
                        placeholderTextColor="#979cb3"
                        autoCapitalize="none"
                        onChangeText={(value) => setUserId(value)}>
                    </TextInput>
                </View>
                <View style={styles.isimbulamadım}>
                    <View style={styles.iconStyle}>
                        <Icon name="key" size={30} color="grey" />
                    </View>
                    <TextInput style={styles.textInputStyle}
                        value={userPassword}
                        autoCapitalize="none"
                        placeholder="password"
                        secureTextEntry={true}
                        placeholderTextColor="#979cb3"
                        onChangeText={(value) => setUserPassword(value)}>
                    </TextInput>
                </View>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => signIn((userId), (userPassword))}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigateToSignUpScreen()}>
                    <Text style={styles.buttonTextStyle}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default LoginScreen;

