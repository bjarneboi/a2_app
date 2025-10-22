import { StyleSheet } from 'react-native';

const allStyles = StyleSheet.create({
    // Login
    loginContainer: {
        flex: 1,
    paddingBottom: 30,
    gap: 25,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    },

    inputGroup: {
        width: "80%",
        gap: 5,
    },

    

    //Register

    
    //InputField
    inputFieldContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },

    inputFieldText: {
        fontSize: 32,
        textAlign: "center",
        width: "100%",
    },
});


export const styles = StyleSheet.create({
  ...allStyles,
});
  