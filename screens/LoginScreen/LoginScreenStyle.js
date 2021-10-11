import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#18181b",
        flex: 1,
    },
    inputViewStyle: {
        height: 250,
        width: 300,
        marginTop: 150,
        alignSelf: "center",
        justifyContent: "center",
    },
    inputFieldStyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconStyle: {
        height: 40,
        width: 40,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    idContainerStyle: {
        padding: 10,
        height: 60,
        width: 200,
        margin: 20,
        marginLeft: 10,
        borderRadius: 20,
        backgroundColor: "#484750",
        alignSelf: "center",
        color: "#f8f8f8",
    },
    passwordContainerStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    passwordInputStyle: {
        padding: 10,
        height: 60,
        width: 150,
        margin: 20,
        marginLeft: 10,
        marginRight: 0,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#484750",
        alignSelf: "center",
        color: "#f8f8f8"
    },
    showPasswordStyle: {
        height: 60,
        width: 50,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#484750"
    },
    rememberMeBoxStyle: {
        paddingLeft: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    rememberMeButtonStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#484750",
        height: 30,
        width: 30
    },
    rememberMeTextStyle: {
        marginLeft: 10,
        color: "white"
    },
    buttonStyle: {
        marginTop: 10,
        height: 50,
        width: 100,
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "#868d94",
        justifyContent: "center"
    },
    buttonTextStyle: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
    },
    signUpButtonStyle: {
        alignSelf: "center",
        marginTop: 10
    },
    signUpTextStyle: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
        color: "white"

    }
})
export { styles }