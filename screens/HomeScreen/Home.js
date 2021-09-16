import axios from 'axios';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Text, View, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { styles } from './HomeScreenStyle';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let isCurrentDayNow;
const hours = 24;

function HomeScreen({ navigation }) {
    const [isPressed, setIsPressed] = useState(false);
    const [temperatures, setTemperatures] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    const [location, setLocation] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const [days, setDays] = useState(["Sun", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."]);
    const [init, setInitialized] = useState(false);
    const [weathersOfCurrentDay, setWeathersOfCurrentDay] = useState([]);
    const [currentIndexToShow, setCurrentIndexToShow] = useState();
    const [show, setShow] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setWeatherData([]);
        setTemperatures([]);
        getLocation();
    }, []);

    useEffect(() => {
        getLocation();
        daySequencer();
    }, []);

    const logOut = () => {
        AsyncStorage.setItem("userId", "");
        navigation.navigate("Login");
    }
    const getLocation = async () => {
        try {
            await Geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setLocation({
                        latitude,
                        longitude,
                    });
                    getData(latitude, longitude)
                },
                error => {
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
            );
        }
        catch (err) {
            alert("LOCATION ERROR");
            setRefreshing(false);
        }
    }

    const getData = async (latitude, longitude) => {
        try {
            const { data } = await axios.get("https://api.open-meteo.com/v1/forecast?", {
                params: {
                    latitude,
                    longitude,
                    hourly: "temperature_2m,weathercode",
                }
            })
            setTemperatures(data.hourly.temperature_2m);
            setWeatherData(data.hourly.weathercode);
        }
        catch (err) {
            alert("CONNECTION ERROR");
        }
        setRefreshing(false);
    }

    const daySequencer = () => {
        const newDayArray = days;
        for (i = 0; i < new Date().getDay(); i++) {
            const temp = newDayArray.shift()
            newDayArray.push(temp);
        }
        setDays(newDayArray);
        setInitialized(true);
    }

    const renderDays = useMemo(() => {
        if (!init) return <ActivityIndicator />
        let start = 0;
        let end = 0;
        let averageTemperature = 0;
        return days.map((days, index) => {
            start = end;
            end = start + 24;
            let temperaturuesOfADay = temperatures.slice(start, end);
            let totalTemperature = temperaturuesOfADay.reduce((total, number) => {
                return total + number;
            }, 0)
            averageTemperature = Math.round(totalTemperature / hours);
            console.log("renderDays", currentIndexToShow, index)
            const backgroundColor = currentIndexToShow == index ? "#f0b966" : null
            return <TouchableOpacity
                key={index}
                style={isPressed ? { ...styles.clickedButtonStyle, backgroundColor: backgroundColor } : styles.dayStyle}
                onPress={() => {
                    if (currentIndexToShow != index) {
                        if (isPressed == true) {
                            displayTime(index);
                            return isShowing(index);
                        }
                    }
                    setIsPressed(!isPressed)
                    displayTime(index);
                    isShowing(index);
                }}>
                <Text style={styles.dayTextStyle}>{days}</Text>
                <Text style={styles.temperatureTextStyle}>{averageTemperature}°C</Text>
            </TouchableOpacity>
        })
    }, [temperatures, weatherData, show, currentIndexToShow])

    const isShowing = (index) => {
        const myShow = currentIndexToShow != index ? true : !show;
        console.log("ishowing index", index)
        setCurrentIndexToShow(index);
        setShow(myShow);

        if (myShow) {
            let start = index * 24;
            let end = start + 24;
            return showWeather(start, end, index);
        }
    }

    const displayTime = (index) => {
        let newHour = new Date().getHours() + index;
        if (isCurrentDayNow) {
            if (newHour < 10) {
                return "0" + newHour;
            }
            return newHour;
        }
        else {
            if (index < 10) {
                return "0" + index;
            }
            else {
                return index;
            }
        }

    }

    const showWeather = (start, end, index) => {
        if (index == 0) {
            isCurrentDayNow = true;
            return setWeathersOfCurrentDay(weatherData.slice(new Date().getHours(), end));
        }
        isCurrentDayNow = false;
        setWeathersOfCurrentDay(weatherData.slice(start, end));
    }
    const weatherCodeToType = (currentHour) => {
        if (currentHour == 0) {
            iconName = "weather-cloudy";
            return weatherType = "clear";
        }
        if (currentHour == 1 || currentHour == 2 || currentHour == 3) {
            iconName = "weather-partly-cloudy";
            return weatherType = "partly cloudy";
        }
        if (currentHour == 45 || currentHour == 48) {
            iconName = "weather-fog"
            return weatherType = "foggy";
        }
        if (currentHour == 51 || currentHour == 53 || currentHour == 55) {
            iconName = "weather-partly-rainy";
            return weatherType = "drizzle";
        }
        if (currentHour == 56 || currentHour == 57) {
            iconName = "weather-pouring";
            return weatherType = "freezing drizzle";
        }
        if (currentHour == 61 || currentHour == 63 || 65) {
            iconName = "weather-rainy";
            return weatherType = "rainy";
        }
        if (currentHour == 66 || 67) {
            iconName = "weather-lightning-rainy";
            return weatherType = "freezing rain";
        }
        if (currentHour == 71 || currentHour == 73 || currentHour == 75) {
            iconName = "weather-snowy"
            return weatherType = "snoww fall";
        }
        if (currentHour == 77) {
            iconName = "weather-snowy-rainy";
            return weatherType = "snow grains";
        }
        if (currentHour == 80 || 81 || currentHour == 82) {
            iconName = "weather-pouring"
            return weatherType = "rain showers";
        }
        if (currentHour == 85 || currentHour == 86) {
            iconName = "weather-snowy-heavy"
            return weatherType = "snow showers";
        }
        if (currentHour == 95) {
            iconName = "weather-partly-lightning"
            return weatherType = "slight or moderate thunderstorm";
        }
        if (currentHour == 99 || currentHour == 96) {
            iconName = "weather-lightning"
            return weatherType = "slight and heavy thunderstorm";
        }
    }
    const showDetails = () => {
        let temperaturesOfHours = [];
        if (show) {
            if (isCurrentDayNow) {
                temperaturesOfHours = (temperatures.slice(new Date().getHours(), 24));
            } else {
                temperaturesOfHours = temperatures.slice(currentIndexToShow * 24, currentIndexToShow * 24 + 24)
            }
            return weathersOfCurrentDay.map((weatherCode, index) => {
                let weatherType = weatherCodeToType(weatherCode);
                return <View
                    key={index}
                    style={styles.showViewStyle}>
                    <View style={styles.hourlyDataStyle}>
                        <Text style={styles.timeTextStyle}> {displayTime(index)}:00</Text>
                        <Text style={styles.horulyTemperatureTextStyle}>{temperaturesOfHours[index]}°C </Text>
                        <Text style={styles.weatherTextStyle}>
                            {weatherType}
                        </Text>
                        <Icon name={iconName} size={50} color="#aaafb4" style={styles.iconStyle} />
                    </View>
                </View>
            });
        }
    }

    return (
        <SafeAreaView
            style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}>
                    </RefreshControl>
                }>
                <View
                    style={styles.logoutButtonViewStyle}>
                    <TouchableOpacity
                        onPress={() => logOut()}>
                        <Text
                            style={styles.buttonTextStyle}>
                            LOGOUT
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dayContainerStyle}>
                    {renderDays}
                </View>
                <View style={styles.showContainerStyle}>
                    {showDetails()}
                </View>
            </ScrollView>
        </SafeAreaView>)
}
export default HomeScreen;