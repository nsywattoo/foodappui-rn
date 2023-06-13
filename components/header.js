import { CurrentRenderContext } from '@react-navigation/native'
import React from 'react'
import {View, Text,} from 'react-native'
import { Surface, Title} from 'react-native-paper'

const header = (title) => {
  return (
      <Surface style={style.header}>
          <View> <Title>{title}</Title></View>
      </Surface>
  )
}

export default header

