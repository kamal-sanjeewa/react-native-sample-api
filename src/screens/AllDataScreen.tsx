import {View, Button, FlatList} from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/shared/Card';
import { ApplicationState } from '../redux/reducers';
const AllDataScreen = ({ navigation }) => {

    const transactionsState = useSelector((state: ApplicationState) => state.bankTransactionReducer );
    
    return (
        <View>
            <FlatList data={transactionsState.transactions} renderItem={({ item }) => (
                <View style={{marginVertical:5, marginHorizontal: 10}}>
                    <Card>
                        <View style={{marginHorizontal: 20, marginVertical: 20}}>
                            <Text>Transaction: {item.debitCredit }</Text>
                            <Text>Value: {item.value }</Text>
                            <Text>Balance: {item.bankBalance }</Text>
                        </View>
                    </Card>
                </View>
            )} />
        </View>
    );
}

export default AllDataScreen;