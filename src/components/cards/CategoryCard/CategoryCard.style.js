import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 0.5,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: "#e6e6e6",
        borderColor: "transparent"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain",

    },
    text: {
        marginLeft: 10,
        fontSize: 24,
    }
});