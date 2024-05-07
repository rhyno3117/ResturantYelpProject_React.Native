import { View, TextInput, StyleSheet,  } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
      <TextInput 
      style={styles.inputStyle}
      placeholder='Search'
      />
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

export default SearchBar