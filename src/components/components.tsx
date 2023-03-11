import React, { useState } from 'react'

const Hello = () => {
    // 初期値として、'000000'を設定 
    const firstNumber: string = '000000'
    const [randomNumber, setRandomNumber] = useState(firstNumber)
    const onClick = () => {
        let stringNumber: string = ''
        for (let i = 0; i < 6; i++) {
            const random: number = Math.floor(Math.random() * 10)
            stringNumber += random.toString()
        }
        setRandomNumber(stringNumber)
    }
    const text = '乱数生成ボタン'
    return (
        <>
            <div className='btm'>
                <h2>{randomNumber}</h2>
                <button onClick={onClick}>{text}</button>
            </div>
        </>
    )
}

export default Hello