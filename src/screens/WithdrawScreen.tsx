import {View, StyleSheet, Alert} from 'react-native';
import colors from '../util/colors';
import Card from '../components/shared/Card';
import {TextInput, Button, Text} from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withdrawDeposit } from '../redux/reducers/bankBalanceReducer';
import { ApplicationState } from '../redux/reducers';
import { addtransaction, Transaction } from '../redux/reducers/bankTransactionReducer';

const WithdrawScreen = ({ navigation }) => {
    const [amount, setAmount] = useState(''); 
    const [amountError, setAmountError] = useState(false);
    const [dissableSubmitButton, setDissableSubmitButton] = useState(true);

    const dispatch = useDispatch();
    const bankBalanceState = useSelector((state: ApplicationState) => state.bankBalanceReducer )
    const transactionsState = useSelector((state: ApplicationState) => state.bankTransactionReducer )

    useEffect(()=>{
        if(amount.length > 0){
            setDissableSubmitButton(false)
        }else{
            setDissableSubmitButton(true)
        }
    }, [amount]);

    const onSubmitWithdraw = ()=>{
        let amountInNumber = Number(amount);
        if(Number.isNaN(amountInNumber)){
            Alert.alert(
                'Not A Number!',
                'Please Enter valid number as amount',
                [{text: 'Okay', onPress: () => console.log()}],
                {
                  cancelable: false,
                }
            );
        }else{
            if(amountInNumber < 0){
                Alert.alert(
                    'Negative Deposit!',
                    'You can\'t deposit negative amount.',
                    [{text: 'Okay', onPress: () => console.log()}],
                    {
                      cancelable: false,
                    }
                );
            }else{
                if(amountInNumber > bankBalanceState.balance){
                    Alert.alert(
                        'Overdraft Failure!',
                        'You don\'t have suffcient account balance.',
                        [{text: 'Okay', onPress: () => console.log()}],
                        {
                        cancelable: false,
                        }
                    );
                }else{
                    const transaction: Transaction = {debitCredit: "debit", value: amountInNumber, bankBalance: bankBalanceState.balance - amountInNumber };
                    dispatch(addtransaction(transaction))
                    dispatch(withdrawDeposit(-Math.abs(amountInNumber)));
                    Alert.alert(
                        'Sucess',
                        'Your withdraw has been updated.',
                        [{text: 'Okay', onPress: () => console.log()}],
                        {
                        cancelable: false,
                        }
                    );
                }
            }
        }
    }

    return (
        <View style={styles.mainContainer}> 
            <Card>
                <View style={styles.cardWrapper}>
                    <View style={styles.sucessMessageWrapper}>
                        <Text style={styles.sucessMessage}>Bank Balance : $ {bankBalanceState.balance}</Text>
                    </View>
                    <TextInput
                        label="Amount"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={setAmount}
                        error={amountError}
                        placeholder="Enter Amount"  />
                    <Button 
                        style={dissableSubmitButton ? styles.submitButtonDissabled : styles.submitButton} 
                        disabled={dissableSubmitButton}
                        onPress={onSubmitWithdraw}> 
                            Withdraw
                    </Button>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical:10, 
        marginHorizontal: 10
    },
    cardWrapper: {
        margin: 10
    },
    input: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    submitButton: {
        marginVertical:10,
        marginHorizontal: 10,
        backgroundColor: colors.white,
        borderColor: colors.colorPrimaryDark,
        borderWidth: 1
    },
    submitButtonDissabled: {
        marginVertical:10,
        marginHorizontal: 10,
        backgroundColor: colors.white,
        borderColor: colors.inactiveColor,
        borderWidth: 1
    },
    sucessMessageWrapper: {
        backgroundColor: colors.fontColorGray,
        padding: 10,
    },
    sucessMessage: {
        fontSize: 14,
        color: colors.white
    }
})

export default WithdrawScreen;