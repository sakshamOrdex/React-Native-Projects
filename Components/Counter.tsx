import { TouchableOpacity, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Counter = () => {
    let [count, setCount] = useState(0);

    const inc = () => {
        count++;
        setCount(count);
    }
    const dec = () => {
        if (count > 0) {
            count--;
            setCount(count);
        }
    }
    const reset = () => {
        count = 0;
        setCount(count);
    }
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.count}>
                <Text style={styles.countTxt}>{count}</Text>
            </View>
            <View style={styles.buttonFlex}>
                <TouchableOpacity style={styles.btn}
                    onPress={inc}
                >
                    <Text style={styles.btnTxt}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                    onPress={dec}
                >
                    <Text style={styles.btnTxt}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonFlexTwo}>
                <TouchableOpacity style={styles.btn}
                    onPress={reset}
                >
                    <Text style={styles.btnTxt}>Reset</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Counter

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#005461',
        padding: 20,
    },
    count: {
        width: '100%',
        backgroundColor: '#018790',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    },
    countTxt: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    buttonFlex: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-evenly',
    },
    btn: {
        width: '45%',
        backgroundColor: '#018790',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    btnTxt: {
        fontSize: 30,
        fontWeight: '400'
    },
    buttonFlexTwo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})