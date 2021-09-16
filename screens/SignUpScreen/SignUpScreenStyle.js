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
        marginBottom: 10,

        alignSelf: "center",
        justifyContent: "center",
        //#2e2e34 
    },
    inputFieldStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconStyle: {
        height: 40,
        width: 40,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "grey"
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
        color: "#f8f8f8"
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
    buttonStyle: {
        height: 50,
        width: 100,
        marginBottom: 5,
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "#868d94",
        justifyContent: "center"
    },
    buttonTextStyle: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    }
})
export { styles }