import { StyleSheet } from "react-native";

const StylingAddToDo = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input : {
        flex: 1,
        marginRight: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    }
});

export default StylingAddToDo;