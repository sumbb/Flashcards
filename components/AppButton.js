import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function AppButton({ onPress, isDisabled, btnStyle, btnTextStyle, text, ...onPressArgs }) {
    return (
        <TouchableOpacity
            style={btnStyle}
            disabled={typeof isDisabled === 'function' ? isDisabled() : isDisabled }
            onPress={() => onPress(onPressArgs)}
        >
            <Text style={btnTextStyle}>{text}</Text>
        </TouchableOpacity>
    )
} 