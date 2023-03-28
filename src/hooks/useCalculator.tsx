import React, { useRef, useState } from 'react'


enum Operators {
    sum, rest, multiple, divide
}

export const useCalculator = () => {

    const [previousNumber, setpreviousNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const refUltimateOp = useRef<Operators>();

    const handleClean = () => {
        setNumber('0');
        setpreviousNumber('0');
    }

    const handleMakeNumber = (value: string) => {
        //No aceptar punto
        if (number.includes('.') && value === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            //Punto decimal
            if (value === '.') {
                setNumber(number + value);

                //Evaluar si es otro cero y ya existe el punto
            } else if (value === '0' && number.includes('.')) {
                setNumber(number + value);

                //Evaluar es distinto de cero  y no hay punto 
            } else if (value !== '0' && !number.includes('.')) {
                setNumber(value);

                ///Evitar 000000.0
            } else if (value === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + value);
            }
        } else {

            setNumber(number + value);
        }
    }

    const handlePositiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const handleDelete = () => {
        let negative = '';
        let numberTemp = number;
        if (number.includes('-')) {
            negative = '-';
            numberTemp = number.substring(1);
        }

        if (numberTemp.length > 1) {
            setNumber(negative + numberTemp.slice(0, -1));
        } else {
            setNumber('0');
        }
    }

    const handleChangePrevious = () => {
        if (number.endsWith('.')) {
            setpreviousNumber(number.slice(0, -1));
        } else {
            setpreviousNumber(number);
        }
        setNumber('0');
    }

    const btnDivide = () => {
        handleChangePrevious();
        refUltimateOp.current = Operators.divide;
    }

    const btnMultiple = () => {
        handleChangePrevious();
        refUltimateOp.current = Operators.multiple;
    }

    const btnRest = () => {
        handleChangePrevious();
        refUltimateOp.current = Operators.rest;
    }

    const btnSum = () => {
        handleChangePrevious();
        refUltimateOp.current = Operators.sum;
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(previousNumber);

        switch (refUltimateOp.current) {
            case Operators.sum:
                setNumber(`${num1 + num2}`);
                break;
            case Operators.rest:
                setNumber(`${num2 - num1}`);
                break;
            case Operators.multiple:
                setNumber(`${num1 * num2}`);
                break;
            case Operators.divide:
                setNumber(`${num2 / num1}`);
                break;
        }
        setpreviousNumber('0');
    }


    return {
        handleClean,
        handleMakeNumber,
        previousNumber,
        number,
        handlePositiveNegative,
        handleDelete,
        btnDivide,
        btnMultiple,
        btnRest,
        btnSum,
        calculate
    }
}
