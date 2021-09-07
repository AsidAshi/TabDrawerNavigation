import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const OrderScreen = ( ) => {
    return (
        <View style={styles.container}>
            <Text>order Screen</Text>
        </View>
    )
}
export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

