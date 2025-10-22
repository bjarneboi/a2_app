import { StyleSheet } from 'react-native';

const allStyles = StyleSheet.create({
    // Login
    loginContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Register

    
    //InputField
    inputFieldContainer: {
        width: '80%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
});


export const styles = StyleSheet.create({
  ...allStyles,
});
  