import React from "react";
import { useState } from "react";
import { SafeAreaView, View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./SignUpScreenStyle"
import Icon from 'react-native-vector-icons/FontAwesome';

function SignUpScreen({ route, navigation }) {
    const { users } = useState(route.params)[0];
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const signUp = () => {
        if (!userId || !userPassword) {
            return console.log("eksik id veya şifre");
        };
        if (!users[userId]) {
            const newUsers = { ...users };
            newUsers[userId] = { pw: userPassword };
            route.params.setUsers(newUsers);
            console.log("kayıt yapıldı");
            navigation.goBack();
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputViewStyle}>
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
                        placeholder="password"
                        placeholderTextColor="#979cb3"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(value) => setUserPassword(value)}>
                    </TextInput>
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

