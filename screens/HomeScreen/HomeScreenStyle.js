import { StyleSheet } from "react-native";
import HomeScreen from "./Home";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#787e85",
    },
    dayContainerStyle: {
        borderRadius: 30,
        height: 110,
        marginTop: 20,
        color: "white",
        paddingHorizontal: 5,
        justifyContent: "space-around",
        backgroundColor: "#6b7076",
        alignItems: "center",
        flexDirection: "row"
    },
    dayStyle: {
        //#868d94
        width: 48,
        height: 90,
        borderRightWidth: 1,
        borderRightColor: "#ced1d4",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    dayTextStyle: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#c2cbd4"
    },
    temperatureTextStyle: {
        marginTop: 5,
        textAlign: "center",
        color: "#f2f3f4"
    },
    topViewContainerStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cityViewStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20
    },
    cityTextStyle: {
        fontSize: 25,
        color: "#76f5ff",
        fontWeight: "bold"
    },
    logoutButtonViewStyle: {
        marginRight: 30,
        marginTop: 10,
    },
    buttonStyle: {
        borderRadius: 10,
        width: 40,
        height: 40,
        backgroundColor: "#6b7076",
        alignItems: "center",
        justifyContent: "center"
    },
    clickedButtonStyle: {
        width: 48,
        height: 90,
        borderRightWidth: 1,
        borderRightColor: "#ced1d4",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTextStyle: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },
    graphFirstBoxStyle: {
        paddingLeft: 5,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: "transparent",
        borderLeftColor: "white",
        borderBottomColor: "white",

    },
    graphBoxStyle: {
        borderBottomWidth: 1,
        borderColor: "white",
    },
    showContainerStyle: {
        marginTop: 30,
        marginHorizontal: 10
    },
    showViewStyle: {
        borderWidth: 1,
        borderColor: "#b6babe",
        height: 100,
        marginTop: 10,
        borderRadius: 40,
    },
    hourlyDataStyle: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10
    },
    timeTextStyle: {
        flex: 3,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        marginHorizontal: 5
    },
    horulyTemperatureTextStyle: {
        flex: 2,
        color: "#cbced1"
    },
    weatherTextStyle: {
        flex: 3,
        color: "white",
        fontWeight: "bold",
        fontStyle: "italic",
    },
    iconStyle: {
        flex: 2
    }



})
export { styles };