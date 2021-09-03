import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { styles } from './HomeScreenStyle';

function HomeScreen({ navigation }) {
    const [location, setLocation] = useState("");
    const componentDidMount = () => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude,
                    //enlem
                    longitude,
                    //boylam
                });
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    }
    if (location) console.log("current location =", location);
    return (
        <View
            style={styles.container}>
            <TouchableOpacity
                onPress={() => componentDidMount()}
                style={styles.buttonStyle}>
                <Text
                    style={styles.buttonTextStyle}>
                    MY LOCATION
                </Text>
            </TouchableOpacity>
        </View>)
}
export default HomeScreen;