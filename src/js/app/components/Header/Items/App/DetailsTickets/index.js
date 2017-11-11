import React, { Component, PropTypes } from 'react'
import { NavigationActions } from 'react-navigation'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import InfoModalContainer from './../../../../../containers/InfoModal'

import common from './../../../../../../../styles'

export default class DetailsTickets extends Component{
  constructor(props){
    super(props)

    this.handleOnPress = this.handleOnPress.bind(this)
    this.handleOnPressInfoOutward = this.handleOnPressInfoOutward.bind(this)
    this.handleOnPressInfoReturn = this.handleOnPressInfoReturn.bind(this)
  }

  static propTypes = {
    selectedOutward: PropTypes.object.isRequired,
    selectedReturn: PropTypes.object.isRequired,
    addReturn: PropTypes.bool.isRequired,
    journeyPlan: PropTypes.object.isRequired,
    addedCart: PropTypes.bool.isRequired,
    openModalInfoOutward:PropTypes.bool.isRequired,
    openModalInfoReturn: PropTypes.bool.isRequired,
    addShoppingCart: PropTypes.func.isRequired,
    addedCart: PropTypes.func.isRequired,
    setOpenModalInfoOutward: PropTypes.func.isRequired,
    setOpenModalInfoReturn: PropTypes.func.isRequired
  }


  handleOnPress(){
    let item = {
      outward: this.props.selectedOutward,
      return: this.props.selectedReturn,
      hasReturn: this.props.addReturn,
    }
    this.props.addShoppingCart(item)
    this.props.addedCart(!this.props.addCart)
    this.props.navigation.navigate('ShoppingCart')
  }

  handleOnPressInfoOutward(){
    console.log(this.props.openModalInfoReturn)
    console.log(this.props.openModalInfoOutward)
    this.props.setOpenModalInfoOutward(true)
    this.forceUpdate()
  }

  handleOnPressInfoReturn(){
    this.props.setOpenModalInfoReturn(true)
    this.forceUpdate()
  }

  render(){
    let returnTicketInfo =  null
    let modalInfo = null
    if(this.props.openModalInfoOutward && !this.props.openModalInfoReturn){
      modalInfo = <InfoModalContainer routeTrains={this.props.selectedOutward.legs}/>
    }
    else if(this.props.openModalInfoReturn && !this.props.openModalInfoOutward){
      modalInfo = <InfoModalContainer routeTrains={this.props.selectedReturn.legs}/>
    }
    if(this.props.addReturn){
      returnTicketInfo =
      <View style={[common.marginTop20, common.box, common.paddingTopBottom20, common.backgroundColorWhite]}>
        <View style={[common.alignItems]}>
          <Text style={common.textPink}> RETURN </Text>
          <Text style={common.textBold}> {this.props.selectedReturn.origin_time.slice(0, 10)} </Text>
          <Text style={common.textNormal}> {this.props.selectedReturn.origin_station_id} </Text>
          <Text style={common.textBold}> {this.props.selectedReturn.origin_time.slice(-8, -3)} </Text>
          <Text style={common.textNormal}> {this.props.selectedReturn.destination_station_id} </Text>
          <Text style={common.textBold}> {this.props.selectedReturn.destination_time.slice(-8, -3)} </Text>
          <Text style={common.textNormal}> Changes: {this.props.selectedReturn.changes} </Text>
          <Text style={[common.marginTop20, common.textPink, common.textCenter]}> {((this.props.selectedReturn.cheapest)/1000).toFixed(2)} £ </Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.handleOnPressInfoReturn()}>
          <View style={[common.marginTop20, common.separator]}>
            <Text style={[common.paddingTop20, common.textCenter, common.textBold]}> INFO </Text>
          </View>
        </TouchableOpacity>
      </View>
    }
    return(
      <ScrollView contentContainerStyle={[common.padding40]}>
        <Text style={[common.textCenter, common.title]}> YOUR TICKETS </Text>
        <View style={[common.marginTop20, common.box, common.paddingTopBottom20, common.backgroundColorWhite]}>
          <View style={[common.alignItems]}>
            <Text style={common.textPink}> OUTWARD </Text>
            <Text style={common.textBold}> {this.props.selectedOutward.origin_time.slice(0, 10)} </Text>
            <Text style={common.textNormal}> {this.props.selectedOutward.origin_station_id} </Text>
            <Text style={common.textBold}> {this.props.selectedOutward.origin_time.slice(-8, -3)} </Text>
            <Text style={common.textNormal}> {this.props.selectedOutward.destination_station_id} </Text>
            <Text style={common.textBold}> {this.props.selectedOutward.destination_time.slice(-8, -3)} </Text>
            <Text style={common.textNormal}> Changes: {this.props.selectedOutward.changes} </Text>
            <Text style={[common.marginTop20, common.textPink, common.textCenter]}> {((this.props.selectedOutward.cheapest)/1000).toFixed(2)} £ </Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => this.handleOnPressInfoOutward()}>
            <View style={[common.marginTop20, common.separator]}>
              <Text style={[common.paddingTop20, common.textCenter, common.textBold]}> INFO </Text>
            </View>
          </TouchableOpacity>
        </View>
        {returnTicketInfo}
        {modalInfo}
        <View style={[common.row, common.end,  common.marginTop50, common.marginBottom40]}>
          <TouchableOpacity activeOpacity={0.8} style={common.buttonNext} onPress={() => this.handleOnPress()}>
            <Text style={common.textButtonNext}> ADD TO CART </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

}
