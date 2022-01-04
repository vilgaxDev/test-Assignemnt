import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Animated, Easing } from 'react-native'
import Constants from 'expo-constants';
import { FontAwesome5, Feather } from '@expo/vector-icons';



const Main = () => {

    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('This is an in-app notification snackbar to show to the user when they perform an action.Clicking it should change the text')
    const fadeAnim = useRef(new Animated.Value(0)).current


    const fadeIn = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start();
    }


    const fadeOut = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start();
    }


    const handlePress = () => {
        setVisible(true)

        fadeIn()

        // auto close snackbar after 10
        setTimeout(() => {
            setVisible(false)
            fadeOut()
        }, 10000)
    }

    const handleClose = () => {
        setVisible(false);
        fadeOut(); 
    }

    return (
        <View style={styles.container} >
            <View style={{ backgroundColor: '#4A5E80', height: '28%', paddingLeft: 20, paddingTop: 30 }} >
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: 'white', fontSize: 24 }} >Afternoon</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, marginLeft: 10, }} >Jo</Text>
                </View>
                <Text style={{ color: 'white', fontSize: 16 }} >Here's the latest</Text>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: '#00e771', fontSize: 28, fontWeight: 'bold' }} >KES 42,000</Text>
                    <Text style={{ color: 'white', fontSize: 16 }} >Total funds</Text>
                </View>

            </View>

            <View style={{ backgroundColor: '#fff', paddingTop: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -40 }} >
                <Text style={{ color: '#4A5E80', fontSize: 20, fontWeight: 'bold', marginLeft: 30, marginBottom: 10 }}>Your Goals</Text>

                <View style={[{ height: '22%', backgroundColor: 'white', marginHorizontal: 15, borderRadius: 20, justifyContent: 'space-between', flexDirection: 'row' }, styles.cardShadow]}>
                    <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 20 }} >
                        <Text style={{ color: '#4A5E80', fontSize: 18, fontWeight: 'bold' }} >Goal 1</Text>
                        <Text style={{ color: 'gray' }}>KES 12,000</Text>
                    </View>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }} >
                        <View style={{ backgroundColor: '#00e771', padding: 5, borderRadius: 10, height: 30, marginRight: 20 }} >
                            <Text style={{ color: 'white' }}>Finish goal</Text>
                        </View>

                        <View style={{ borderLeftWidth: .3, height: '100%', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, borderLeftColor: 'gray' }}>
                            <FontAwesome5 name='chevron-right' size={20} color='gray' />
                        </View>
                    </View>
                </View>

                <View style={[{ height: '22%', backgroundColor: 'white', marginHorizontal: 15, borderRadius: 20, justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }, styles.cardShadow]}>
                    <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 20 }} >
                        <Text style={{ color: '#4A5E80', fontSize: 18, fontWeight: 'bold' }} >Goal 2</Text>
                        <Text style={{ color: 'gray' }}>KES 12,000</Text>
                    </View>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }} >
                        <View style={{ backgroundColor: '#00e771', padding: 5, borderRadius: 10, height: 30, marginRight: 20 }} >
                            <Text style={{ color: 'white' }}>Finish goal</Text>
                        </View>

                        <View style={{ borderLeftWidth: .3, height: '100%', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, borderLeftColor: 'gray' }}>
                            <FontAwesome5 name='chevron-right' size={20} color='gray' />
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={() => handlePress()} style={[styles.button, styles.cardShadow]} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Show Snackbar</Text>
            </TouchableOpacity>

            {/* snackbar */}
            {
                visible ? (
                    <Animated.View style={[styles.snackContainer, styles.cardShadow, { opacity: fadeAnim}]}>
                        <TouchableOpacity onPress={() => setMessage('User clicked on snackbar')} style={[styles.snackbar]}>
                            <Text style={{ color: 'white', fontSize: 16, width: '90%' }}>{message}</Text>
                            <Feather onPress={() => handleClose()} style={{ textAlign: 'center', marginRight: 10 }} name='x' size={30} color='white' />
                        </TouchableOpacity>
                    </Animated.View>
                ) : (
                    <Animated.View style={[styles.snackContainer, styles.cardShadow, { opacity: fadeAnim}]}>
                        <TouchableOpacity style={[styles.snackbar]}>
                            <Text style={{ color: 'white', fontSize: 16, width: '90%' }}>{message}</Text>
                            <Feather style={{ textAlign: 'center', marginRight: 10 }} name='x' size={30} color='white' />
                        </TouchableOpacity>
                    </Animated.View>
                )
            }

        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 0
        },
        shadowOpacity: 0.4,
        shadowRadius: 1.41,
        elevation: 20
    },
    snackbar: {
        backgroundColor: '#e8177f',
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '99%'
    },
    snackContainer:{
        position: 'absolute', 
        top: 10, 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#00e771',
        width: '90%',
        padding: 5,
        borderRadius: 30,
        height: 60,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 35,
        alignSelf: 'center'
    }
})
