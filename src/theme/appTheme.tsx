import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    containerCalculator: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        // marginTop: 5,
        marginBottom: 5
    },
    resultSmall: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 30,
        textAlign: 'right',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        marginHorizontal: 10,
    },
});