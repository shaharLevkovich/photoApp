import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import PhotoGrid from './photoGrid'
import PhotoList from './photoList'
import {fetchData, handleGrid, handleList, setSearchWord} from './photoAction'

const mapStateToProps = (state) => {
  return {
    dataPhotos: state.photoReducer
  }
}
const mapDispatchToProps = dispatch => {
  return{
      fetchData: (searchWord) => dispatch(fetchData(searchWord)),
      handleList: () => dispatch(handleList()),
      handleGrid: () => dispatch(handleGrid()),
      setSearchWord: (wrd)=> dispatch(setSearchWord(wrd))
  }
}

export class allPhotos extends Component {
    
    componentWillMount() {
      this.props.fetchData(this.props.dataPhotos.searchWord)
    }

    render() {
      const{
        dataPhotos
      }=this.props

      return(
          <View style={styles.allScreen}>
            <View style={styles.header}>
              <Text style={styles.txt}>Images Browser</Text>
              <TouchableOpacity ><Image style={styles.favorite} source={require('../../../images/like.png')}></Image></TouchableOpacity>
            </View>
            <View style={styles.search}>
              <TextInput
                style={styles.textInputStyle} 
                onChangeText={(search)=>this.props.setSearchWord(search)}
                placeholder="Search Here"
                onEndEditing={()=>{temp=this.props.dataPhotos.searchWord.toLowerCase().replace(' ', '+')
                this.props.setSearchWord(temp)
              this.props.fetchData(this.props.dataPhotos.searchWord)}}
              />
            </View>
            <View style={styles.views}>
              <TouchableOpacity style={{paddingTop:7, height:33,width:184,backgroundColor: this.props.dataPhotos.showGrid? 'white': '#3333ff'}} onPress={this.props.handleGrid}><Text style={{textAlign: 'center', fontSize: 15}}>Grid View</Text></TouchableOpacity>
              <TouchableOpacity style={{paddingTop:7,height:33,width:184,backgroundColor: this.props.dataPhotos.showGrid? '#3333ff':'white'}} onPress={this.props.handleList}><Text style={{textAlign: 'center', fontSize: 15}}>List View</Text></TouchableOpacity>
            </View>
            
            {!this.props.dataPhotos.showGrid && (
              <View>
                {(this.props.dataPhotos.isFetching) ?
                <View style={styles.loading}>
                    <ActivityIndicator size={'large'} /> 
                </View> 
                :this.props.dataPhotos.items.totalHits?
                <View>
                  <PhotoGrid/>
                </View>:
                <View>
                  <Text style={styles.noResults}>No{"\n"} Results{"\n"} Were{"\n"} Found</Text>
                </View>}
                </View>)}
            {this.props.dataPhotos.showGrid && (
              <View>
                {console.log(this.props.dataPhotos.showGrid)}
                {(this.props.dataPhotos.isFetching) ?
                  <View style={styles.loading}>
                      <ActivityIndicator size={'large'} /> 
                  </View> 
                  :this.props.dataPhotos.items.totalHits?
                    <View>
                      <PhotoList/>
                    </View>:
                    <View>
                      <Text style={styles.noResults}>No{"\n"} Results{"\n"} Were{"\n"} Found</Text>
                    </View>}
                  </View>)}
          </View>
      )
    }
} 
const styles = StyleSheet.create({
  allScreen:{
    flex:1
  },
  header: {
    height: 50,
    flexDirection: 'row',
    paddingLeft:60,
    top:40,
    width: 370,
    borderWidth:1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  favorite:{
    height: 35,
    width: 35
  },
  txt:{
    fontSize:30,
    paddingRight: 45
  },
  views:{
    borderWidth:1,
    flexDirection: 'row',
    height:35,
    width:370,
    alignItems: 'center'
  },
  search:{
    justifyContent: 'center',
    marginTop: 40,
    padding: 8,
    backgroundColor:'#e8e8e8'
  },
  textInputStyle:{
    height: 40,
    width:350,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  loading:{
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  noResults:{
    textAlign:'center', 
    fontSize: 30, 
    paddingTop: 100
  }
})
allPhotos.PropTypes={
  showGrid:PropTypes.bool,
  searchWord: PropTypes.string
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(allPhotos)


