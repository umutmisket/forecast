import React from "react";
import { useState } from "react";
import { SafeAreaView, View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./SignUpScreenStyle"
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignUpScreen({ route, navigation }) {
    const { users } = useState(route.params)[0];
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [icon, setIcon] = useState("eye");
    const [hidePassword, setHidePassword] = useState(true);

    const signUp = async () => {

        if (!userId || !userPassword) {
            return console.log("eksik id veya şifre");
        };
        if (!users[userId]) {
            const newUsers = { ...users };
            newUsers[userId] = { pw: userPassword };
            route.params.setUsers(newUsers);
            console.log(newUsers);
            AsyncStorage.setItem("users", JSON.stringify(newUsers));
            navigation.goBack();
        }
    }
    const showPassword = () => {
        icon !== "eye-slash" ? (setIcon("eye-slash"), setHidePassword(false))
            : (setIcon("eye"), setHidePassword(true))
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputViewStyle}>
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
                    style={styles.buttonStyle}
                    onPress={() => signUp()}>
                    <Text style={styles.buttonTextStyle}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SignUpScreen;

