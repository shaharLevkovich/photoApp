import React, { Component } from 'react'
import { ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
const styles = StyleSheet.create({
    image:{
        height:350,
        width:350,
        marginBottom:20
    },
    like:{
        height: 45,
        width: 45,
    },
    designPage:{
        width:370,
        alignItems: 'center',
        paddingTop:50,
        
    }
})
const mapStateToProps = (state) => {
    return {
        dataPhotos: state.photoReducer
    }
}

class largePhoto extends Component{
    render(){
        const{
            dataPhotos
        }=this.props
        return(
            <View style={styles.designPage}>
                
                <ImageBackground style={styles.image} source={{uri: this.props.dataPhotos.photoToEnhance}}/>
                <TouchableOpacity>
                    <ImageBackground source={require('../../../images/like.png')} style={styles.like}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(
    mapStateToProps
  )(largePhoto)