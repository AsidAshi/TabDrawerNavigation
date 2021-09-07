import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard_Screen</Text>

        </View>
    )
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'center',
        justifyContent:'center'
    },
    
});
