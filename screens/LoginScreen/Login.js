import React, { useEffect, useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./LoginScreenStyle"
import { SafeAreaView, View, TouchableOpacity, TextInput, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen({ navigation }) {
    const [users, setUsers] = useState({});
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [icon, setIcon] = useState("eye");
    const [hidePassword, setHidePassword] = useState(true);
    userToken = null;

    useEffect(() => {
        isLogged();
    }, [])

    const isLogged = async () => {
        const userId = await AsyncStorage.getItem("userId");
        console.log("isLoggedIn Check = ", userId);
        if (userId) {
            navigation.navigate("Home");
        }
        return
    }


    const signIn = async () => {
        const savedUsers = await AsyncStorage.getItem("users");
        const parsedUsers = JSON.parse(savedUsers);
        console.log("deneme", parsedUsers[userId]);

        if (!userId || !userPassword) {
            return console.log("eksik şifre veya id");
        }
        if (parsedUsers[userId]) {
            if (parsedUsers[userId].pw == userPassword) {
                AsyncStorage.setItem("userId", userId);
                return navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            }
            alert("şifre hatalı");
        }
        alert("kullanıcı yok");
    }
    const navigateToSignUpScreen = () => {
        setUserPassword("");
        setUserId("");
        return navigation.navigate("SignUp", { users: users, setUsers });
    }
    const showPassword = () => {
        icon !== "eye-slash" ? (setIcon("eye-slash"), setHidePassword(false))
            : (setIcon("eye"), setHidePassword(true))
    }
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.inputViewStyle}>
                <View style={styles.inputFieldStyle}>
                    <View style={styles.iconStyle}>
                        <Icon name="envelope" size={30} color="grey" />
                    </View>
                    <TextInput
                        value={userId}
                        style={styles.idContainerStyle}
                        placeholder="id"
                        placeholderTextColor="#979cb3"
                        autoCapitalize="none"
                        onChangeText={(value) => setUserId(value)}>
                    </TextInput>
                </View>
                <View style={styles.inputFieldStyle}>
                    <View style={styles.iconStyle}>
                        <Icon name="key" size={30} color="grey" />
                    </View>
                    <View style={styles.passwordContainerStyle}>
                        <TextInput style={styles.passwordInputStyle}
                            value={userPassword}
                            autoCapitalize="none"
                            placeholder="password"
                            secureTextEntry={hidePassword}
                            placeholderTextColor="#979cb3"
                            onChangeText={(value) => setUserPassword(value)}>
                        </TextInput>
                        <View style={styles.showPasswordStyle}>
                            <TouchableOpacity
                                onPress={() => showPassword()}>
                                <Icon name={icon} size={25} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.signUpButtonStyle}
                    onPress={() => navigateToSignUpScreen()}>
                    <Text style={styles.signUpTextStyle}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => signIn()}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>SIGN IN</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
export default LoginScreen;


