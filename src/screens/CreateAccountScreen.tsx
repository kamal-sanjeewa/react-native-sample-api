import { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput, HelperText} from 'react-native-paper';
import Card from '../components/shared/Card';
import colors from '../util/colors';
const CreateAccountScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [nameErrorText, setNameErrorText] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorText, setNameEmailText] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [dissableSubmitButton, setDissableSubmitButton] = useState(true);
    const [createdAccount, setCreatedAccount] = useState(false);

    useEffect(()=>{
        setNameError(false)
        checkAndDissableSubmitButton()
    }, [name]);

    useEffect(()=>{
        setEmailError(false)
        checkAndDissableSubmitButton()
    }, [email]);

    useEffect(()=>{
        setPasswordError(false)
        checkAndDissableSubmitButton()
    }, [password]);


    const checkAndDissableSubmitButton = ()=>{
        if(name.length == 0 && email.length == 0 && password.length == 0){
            setDissableSubmitButton(true);
        }else{
            setDissableSubmitButton(false);
        }
    }

    const onSubmitAccount = ()=>{
        let validInputs = true

        if (name.length == 0) {
            validInputs= false;
            setNameError(true);
            setNameErrorText('Please enter valid name');
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) == false) {
            validInputs= false;
            setEmailError(true);
            setNameEmailText('Please enter valid email address');
        }

        if (password.length < 8) {
            validInputs= false;
            setPasswordError(true);
            setPasswordErrorText('Password atleast 8 characters');
        }

        if(validInputs){
            setCreatedAccount(true)
        }
    }

    const onCreateNewAccount = ()=>{
        setName('')
        setEmail('')
        setPassword('')
        setCreatedAccount(false)
    }

    const checkUI = ()=>{
        if(createdAccount){
            return (
                <View style={styles.cardWrapper}>
                    <View style={styles.sucessMessageWrapper}>
                        <Text style={styles.sucessMessage}>You have sucessfully created an account.</Text>
                    </View>
                    <Button 
                        style={styles.createButton} 
                        onPress={onCreateNewAccount}> 
                            Create New Account
                    </Button>
                </View>
            )
        }else{
            return (
                <View style={styles.cardWrapper}>
                    <TextInput
                        label="Name"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={setName}
                        error={nameError}
                        placeholder="Enter Name"  />
                        <HelperText type="error" visible={nameError}>{nameErrorText}</HelperText>
                    <TextInput
                        label="Email"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={setEmail}
                        error={emailError}
                        placeholder="Enter Email"  />
                        <HelperText type="error" visible={emailError}>{emailErrorText}</HelperText>
                    <TextInput
                        label="Password"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        error={passwordError}
                        placeholder="Enter Password"  />
                        <HelperText type="error" visible={passwordError}>{passwordErrorText}</HelperText>
                    <Button 
                        style={dissableSubmitButton ? styles.createButtonDissabled : styles.createButton} 
                        disabled= {dissableSubmitButton}
                        onPress={onSubmitAccount}> 
                            Create
                    </Button>
                </View>
            )
        }
    }

    return (
        <View style={styles.mainContainer}> 
            <Card>
                {checkUI()}
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical:10, 
        marginHorizontal: 10
    },
    bankImage: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardWrapper: {
        margin: 10
    },
    input: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    createButton: {
        marginVertical:10,
        marginHorizontal: 10,
        backgroundColor: colors.white,
        borderColor: colors.colorPrimaryDark,
        borderWidth: 1
    },
    createButtonDissabled: {
        marginVertical:10,
        marginHorizontal: 10,
        backgroundColor: colors.white,
        borderColor: colors.inactiveColor,
        borderWidth: 1
    },
    sucessMessageWrapper: {
        backgroundColor: colors.sucessLight,
        padding: 10,
        borderColor: colors.sucess,
        borderWidth: 2
    },
    sucessMessage: {
        fontSize: 14,
        color: colors.white
    }
})

export default CreateAccountScreen;

