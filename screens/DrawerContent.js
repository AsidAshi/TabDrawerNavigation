
import RNExitApp from 'react-native-exit-app'
import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Text,
    Caption,
    Drawer,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/Ionicons'



export function DrawerContent(props) {

    const [modalVisible, setModalVisible] = useState(false);
    

    


    return (
        <View style={{ flex: 1, backgroundColor: '#009387' }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                                <Avatar.Image

                                    source={{  }}
                                    size={50}


                                /></TouchableOpacity>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}>
                                <View style={{
                                    height: '60%',

                                    marginTop: 100,
                                    backgroundColor: '#336655',
                                    width: '90%',
                                    alignSelf: 'center',
                                    backgroundColor: 'white'
                                }}>
                                    <View style={{flexDirection:'row',alignSelf: "flex-end",}}>
                                        
                                    {/* <TouchableOpacity >
                                        <Icon name="image-edit-outline" color={'#009387'} size={35} style={{ alignSelf: "flex-end", marginRight: 10, marginTop: 10 }} />

                                        </TouchableOpacity> */}
                                        <TouchableOpacity

                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                            }}>

                                            <Icon name="close" color={'#009387'} size={35} style={{ alignSelf: "flex-end", marginRight: 10, marginTop: 10 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <Image source={{  }}></Image>
                                </View>
                            </Modal>
                            <View style={{ marginLeft: 15, flexDirection: 'column' }} >
                                <Title style={styles.title}>user name</Title>
                                <Caption style={styles.caption}>user@exmple.com</Caption>
                            </View>

                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}
                    >
                        <DrawerItem
                            icon={({ size }) => (

                                <Icon
                                    name="home-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            activeTintColor="red"
                            activeBackgroundColor='transparent'
                            inactiveTintColor='black'
                            label="Dashboard"
                            labelStyle={{ color: 'white' }}
                            color="#fff"
                            onPress={() => { props.navigation.navigate('Dashboard') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="order-bool-descending-variant"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="Order"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('Order') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="account-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="Tab3"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('Tab3') }}
                        />

                        <DrawerItem
                            icon={({ size }) => (
                                <IconA
                                    name="settings-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="Settings"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('SettingsScreen') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="Support"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="About us"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('AboutUs') }}
                        />
                    </Drawer.Section>


                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
            <TouchableOpacity onpress ={()=> RNExitApp.exitApp()}>
                <DrawerItem
                    icon={({ size }) => (
                        <Icon
                            name="exit-to-app"
                            color="#fff"
                            size={size}
                        />
                    )}
                    label="Log Out"
                    labelStyle={{ color: 'white' }}
                    
                /></TouchableOpacity>
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        height: 70,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        color: "#fff",
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },

})
