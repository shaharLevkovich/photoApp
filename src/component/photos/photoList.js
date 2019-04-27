import React, { Component } from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    btn:{
        flex:1,
        width:370
      },
      img:{
          height:50,
          width:50,
          marginRight:10
      },
      party:{
        height: 50,
        flexDirection: 'row',
        marginTop:20,
        marginLeft:10
      },
      title:{
          fontSize:20
      },
      txt:{
          fontSize: 13,
          color: 'grey'
      },
      txtDesign:{
        flex:1,
        flexDirection: 'row',
        width:370,
        flexWrap: 'wrap'
      }
    })
const mapStateToProps = (state) => {
    return {
        dataPhotos: state.photoReducer
    }
}

class photoList extends Component{
    
    render() {
        const{
            dataPhotos
        }=this.props

            return(
            <View>
                {this.props.dataPhotos.items.hits===undefined?null:
                    <View style={styles.btn}>
                        {this.props.dataPhotos.items.hits.map((item) => (
                        <View key={item.id} style={styles.party}>
                            <Image source={{uri: item.previewURL}} style={styles.img}></Image>
                            <View>
                                <Text style={styles.title}>some text</Text>
                                <View style={styles.txtDesign}>
                                    <Text style={styles.txt}>views: {item.views}    </Text>
                                    <Text style={styles.txt}>likes: {item.likes}</Text>
                                </View>
                            </View>
                        </View>
                        
                    ))}
                    </View>}
            </View>
            ) 
        }
}  

export default connect(
    mapStateToProps
  )(photoList)
