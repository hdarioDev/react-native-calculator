import { Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from '../theme/appTheme'
import ButtonCalc from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'


export default function CalculatorScreens() {

    const {
        previousNumber,
        number,
        handleClean,
        handlePositiveNegative,
        handleDelete,
        btnDivide,
        handleMakeNumber,
        btnMultiple,
        btnRest,
        btnSum,
        calculate,

    } = useCalculator();

    return (
        <View style={styles.containerCalculator}>
            {
                (previousNumber !== '0') && (
                    <Text style={styles.resultSmall}>{previousNumber}</Text>
                )
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{number}</Text>
            {/* Fila de botones */}
            <View style={styles.row}>
                <ButtonCalc display="CC" action={handleClean} color="#9B9B9B" />
                <ButtonCalc display="+/-" color="#9B9B9B" action={handlePositiveNegative} />
                <ButtonCalc display="C" color="#9B9B9B" action={handleDelete} />
                <ButtonCalc display="/" color="#FF9427" action={btnDivide} />
            </View>
            {/* Fila de botones */}
            <View style={styles.row}>
                <ButtonCalc display="7" action={handleMakeNumber} />
                <ButtonCalc display="8" action={handleMakeNumber} />
                <ButtonCalc display="9" action={handleMakeNumber} />
                <ButtonCalc display="X" color="#FF9427" action={btnMultiple} />
            </View>
            {/* Fila de botones */}
            <View style={styles.row}>
                <ButtonCalc display="4" action={handleMakeNumber} />
                <ButtonCalc display="5" action={handleMakeNumber} />
                <ButtonCalc display="6" action={handleMakeNumber} />
                <ButtonCalc display="-" color="#FF9427" action={btnRest} />
            </View>
            {/* Fila de botones */}
            <View style={styles.row}>
                <ButtonCalc display="1" action={handleMakeNumber} />
                <ButtonCalc display="2" action={handleMakeNumber} />
                <ButtonCalc display="3" action={handleMakeNumber} />
                <ButtonCalc display="+" color="#FF9427" action={btnSum} />
            </View>
            {/* Fila de botones */}
            <View style={styles.row}>
                <ButtonCalc display="0" action={handleMakeNumber} />
                <ButtonCalc display="." action={handleMakeNumber} />
                <ButtonCalc display="=" color="#FF9427" action={calculate} />
            </View>

        </View>
    )
}
