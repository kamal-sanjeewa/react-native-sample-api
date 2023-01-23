import {View, Button, StyleSheet, Image, Text} from 'react-native';
import Card from '../components/shared/Card';
import AutoHeightImage from 'react-native-auto-height-image'
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
    const [wrapperWidth, setWrapperWidth] = useState(0)

    return (
        <View style={styles.mainContainer}> 
            <Card>
                <View onLayout={event => setWrapperWidth(event.nativeEvent.layout.width)}>
                    <AutoHeightImage
                        style={styles.bankImage}
                        width={wrapperWidth}
                        source={require('../assets/img/bank-icon.png')}
                    />
                    <View style={styles.textwrapper}>
                        <Text style={styles.bankNameText}>Commercial Bank</Text>
                        <Text style={styles.bankDescriptionText}>Commercial Bank, the only ABC Country among the top 1000 Banks worldwide is known as the benchmark private sector bank in ABC Country.</Text>
                    </View>
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
    bankImage: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    textwrapper: {
        margin: 10
    },
    bankNameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    bankDescriptionText: {
        fontSize: 14,
        marginBottom: 5
    }
})

export default HomeScreen;