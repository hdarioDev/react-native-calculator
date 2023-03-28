import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
    display: string,
    color?: string,
    action: (numberText: string) => void
}

export default function ButtonCalc({ display, color = '#2D2D2D', action }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => action(display)}
        >
            <View
                style={{
                    ...styles.boton, backgroundColor: color,
                    width: (display == '0') ? 180 : 80
                }}>
                <Text
                    style={{
                        ...styles.botonText,
                        color: (color == '#9B9B9B' ? 'black' : 'white')
                    }}
                >{display}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',

    }
})