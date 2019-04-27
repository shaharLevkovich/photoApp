import React, { Component } from 'react'
import { ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import LargePhoto from './largePhoto'
import {setSourcePhoto} from './photoAction'

const styles = StyleSheet.create({
    list: {
        height:123.3,
        width:123.3,
        borderWidth:1,
        backgroundColor:'white'
      },
      btn:{
        flex:1,
        flexDirection: 'row',
        width:370,
        flexWrap: 'wrap'
      },
      txt:{
          fontSize: 20,
          textAlign:'center'
      },
      img:{
        width:123.3, 
        height:123.3
      }
    })

    const mapStateToProps = (state) => {
        return {
          dataPhotos: state.photoReducer
        }
    }
    const mapDispatchToProps = dispatch => {
        return{
            setSourcePhoto: (source) => dispatch(setSourcePhoto(source))
        }
    }


class photo extends Component{
    temp(){
        return(
            <View>
                <LargePhoto/>
            </View>
        )
    }
    
    render() {
        const{
            dataPhotos
        }=this.props
            return(
            <View>
               {this.props.dataPhotos.items.length===0?null:
               this.props.dataPhotos.photoToEnhance!==""?
               <View>
                   <LargePhoto/>
               </View>:
                    <View style={styles.btn}>
                        {this.props.dataPhotos.items.hits.map((item) => (
                        <View key={item.id} style={styles.list}>
                            <TouchableOpacity style={styles.btn} onPress={() => {
                            this.props.setSourcePhoto(item.largeImageURL)
                            console.log(this.props.dataPhotos.photoToEnhance)
                            }}>
                                <ImageBackground source={{uri: item.previewURL}} style={styles.img}/>
                            </TouchableOpacity>
                        </View>
                        
                    ))}
                    </View>}
            </View>
            )
        }
}  


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(photo)

