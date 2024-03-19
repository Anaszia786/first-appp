import React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
const LoadingScreen = () => {
  return (
  <>
<ActivityIndicator style={styles.loading} size='large' color='blue'/>
  </>
  )
}
const styles=StyleSheet.create({
    loading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }

})
export default LoadingScreen