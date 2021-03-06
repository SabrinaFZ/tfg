import React, { PropTypes, Component } from 'react'
import { ScrollView, Platform, Modal, TextInput, Button, Picker, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import moment from 'moment'
import Spinner from 'react-native-spinkit'
import { NavigationActions } from 'react-navigation'

import InfoModalContainer from './../../../../containers/InfoModal'

import common from './../../../../../../styles'

export default class SelectTicketTrainOutward extends Component {
  constructor(props){
    super(props)

    this.getTrainsName = this.getTrainsName.bind(this)
    this.getTicketType = this.getTicketType.bind(this)
    this.handleOnPressOutward =  this.handleOnPressOutward.bind(this)
    this.handleOnPressSelectOutward = this.handleOnPressSelectOutward.bind(this)
    this.handleOnPressInfo = this.handleOnPressInfo.bind(this)
    this.handleOnPressSelectFare = this.handleOnPressSelectFare.bind(this)
    this.goNext = this.goNext.bind(this)
  }

  static propTypes = {
    listOrigin: PropTypes.arrayOf(PropTypes.object),
    listDestination: PropTypes.arrayOf(PropTypes.object),
    originSelected: PropTypes.string.isRequired,
    destinationSelected: PropTypes.string.isRequired,
    outward: PropTypes.object.isRequired,
    addReturn: PropTypes.bool.isRequired,
    journeyPlan: PropTypes.object.isRequired,
    outwardReturn: PropTypes.string.isRequired,
    openMoreTicketsOutwardId: PropTypes.number.isRequired,
    openMoreTicketsOutward: PropTypes.bool.isRequired,
    openModalInfoOutward: PropTypes.bool.isRequired,
    openModalInfoOutwardId: PropTypes.number.isRequired,
    setOutwardReturn: PropTypes.func.isRequired,
    setOpenMoreTicketsOutwardId: PropTypes.func.isRequired,
    setOpenMoreTicketsOutward: PropTypes.func.isRequired,
    selectedOutward: PropTypes.func.isRequired,
    setOpenModalInfoOutward: PropTypes.func.isRequired,
    setOpenModalInfoOutwardId: PropTypes.func.isRequired,
  }

  getTrainsName(trainId){
    let station = this.props.journeyPlan.links[trainId]
    return station.name
  }

  getTrainsCRS(trainId){
    let station = this.props.journeyPlan.links[trainId]
    return station.crs
  }

  getTicketType(ticketType){
    let ticket = this.props.journeyPlan.links[ticketType]
    return ticket.name
  }

  componentWillMount(){
    this.props.setOutwardReturn('Outward')
    this.props.setOpenMoreTicketsOutward(false)
    this.props.setOpenModalInfoOutward(false)
    this.props.setOpenMoreTicketsOutwardId(0)
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.openMoreTicketsOutwardId != this.props.openMoreTicketsOutwardId){
      this.props.setOpenMoreTicketsOutward(true)
    }
  }

  getTrains(){
    var outwardJourney = []
    var outwardSingleFares = []
    var outwardReturnFares = []
    var outwardCheapestFares = []
    var journeyOutwardInfo = []
    var outwardSinglePrice = []
    var outwardReturnPrice = []

    this.props.journeyPlan.result.outward.forEach((item) => {
      outwardJourney.push(item.journey)
      outwardSingleFares.push(item.fares.singles)
      outwardCheapestFares.push(item.fares.cheapest.outwardSingle)
    })

    outwardJourney.map((value, index) => {
      let info = {}
      let item = this.props.journeyPlan.links[value]
      info = {
        origin_station_id: this.getTrainsCRS(item.origin.station),
        destination_station_id: this.getTrainsCRS(item.destination.station),
        origin_station_name: this.getTrainsName(item.origin.station),
        destination_station_name: this.getTrainsName(item.destination.station),
        origin_time: item.origin.time.scheduledTime,
        destination_time: item.destination.time.scheduledTime,
        changes: item.changes,
        legs: item.legs,
        status: item.status,
        fares: outwardSingleFares[index],
        cheapest: outwardCheapestFares[index],
        selectedFare: outwardCheapestFares[index],
        links: this.props.journeyPlan.links
      }
      journeyOutwardInfo.push(info)
    })

    return journeyOutwardInfo
  }

  handleOnValueChange(itemValue){
    this.props.setOutwardReturn(itemValue)
  }

  handleOnPressOutward(index){
    this.props.setOpenMoreTicketsOutwardId(index)
    if(index == this.props.openMoreTicketsOutwardId){
      this.props.setOpenMoreTicketsOutward(!this.props.openMoreTicketsOutward)
    }
  }

  handleOnPressSelectOutward(item){
    let newItem = item
    newItem.selectedFare = newItem.cheapest
    this.props.selectedOutward(newItem)
    this.goNext()
  }

  handleOnPressInfo(index){
    this.props.setOpenModalInfoOutwardId(index)
    this.props.setOpenModalInfoOutward(true)
    this.forceUpdate()
  }

  handleOnPressSelectFare(item, fare){
    let newItem = item
    newItem.selectedFare = fare
    this.props.selectedOutward(newItem)
    this.goNext()
  }

  goNext(){
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'SelectTicketTrain',
        action: NavigationActions.navigate({ routeName: 'DetailsTickets' }),
      }),
    )
  }

  render(){
      //Return an object for outward and journey
    var modalInfo = null
    var trains = this.getTrains()
    var header =
      <View>
        <View style={common.center}>
          <Text style={common.textLarge}>SELECT YOUR TICKET</Text>
        </View>
        <View style={[common.marginTop20, common.padding10, common.backgroundColorPink, common.box]}>
          <Text style={common.textWhiteSmall}>{this.props.originSelected} - {this.props.destinationSelected}</Text>
          <Text style={common.textWhiteSmall}>Date: {moment(this.props.outward.rangeStart).format('DD/MM/YYYY')}</Text>
        </View>
      </View>
    var info_station = trains.map((outwardItem, index) => {
      let faresOutward = null
      if(this.props.openMoreTicketsOutwardId == index && this.props.openMoreTicketsOutward){
        faresOutward = outwardItem.fares.map((fare,i) => {
          return (
            <View key={i} style={common.paddingTopBottom10}>
              <TouchableOpacity activeOpacity={0.8} style={[common.backgroundColor, common.center, common.paddingLeftRight20]} onPress={()=>  this.handleOnPressSelectFare(outwardItem, fare)}>
                <Text style={common.textNormal}>{this.getTicketType(this.props.journeyPlan.links[fare].ticketType)}</Text>
                <Text style={common.textMedium}>{((this.props.journeyPlan.links[fare].totalPrice)/1000).toFixed(2)} £ </Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
    if(this.props.openModalInfoOutward){
      modalInfo = <InfoModalContainer links={trains[this.props.openModalInfoOutwardId].links} routeTrains={trains[this.props.openModalInfoOutwardId].legs}/>
    }
      return(
        <View key={index} style={[common.marginTop20, common.box, common.backgroundColorWhite]}>
          <View style={[common.row, common.spaceBetween]}>
            <TouchableOpacity style={[common.backgroundColor, common.center, common.padding20]} activeOpacity={0.8} onPress={() => this.handleOnPressInfo(index)}>
              <View style={common.alignItems}>
                <Text style={[common.textSmall]}> SHOW </Text>
                <Text style={[common.textSmall]}> MAP </Text>
              </View>
            </TouchableOpacity>
            <View style={common.padding10}>
              <Text style={[common.textCenter, common.textPinkSmall]}> OUTWARD </Text>
                <View style={common.center}>
                  <Text style={common.textNormal}> {outwardItem.origin_station_id} </Text>
                  <Text style={common.textMedium}> {outwardItem.origin_time.slice(-8, -3)} </Text>
                  <Text style={common.textNormal}> {outwardItem.destination_station_id} </Text>
                  <Text style={common.textMedium}> {outwardItem.destination_time.slice(-8, -3)} </Text>
                  <Text style={common.textNormal}> Changes</Text>
                  <Text style={common.textMedium}> {outwardItem.changes}</Text>
                  </View>
                </View>
            <TouchableOpacity style={[common.backgroundColorPink, common.center, common.padding5]} activeOpacity={0.8} onPress={() => this.handleOnPressSelectOutward(outwardItem)}>
              <View style={common.center}>
                <Text style={common.textWhiteSmall}> SELECT </Text>
                <Text style={common.textWhiteSmall}> {((this.props.journeyPlan.links[outwardItem.selectedFare].totalPrice) / 1000).toFixed(2)} £ </Text>
                <Text style={common.textWhiteSmall}> (cheapest) </Text>
                </View>
            </TouchableOpacity>
            </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => this.handleOnPressOutward(index)}>
            <View style={[common.padding20, common.separator]}>
              <Text style={[common.textCenter, common.textMedium]}> CHANGE TICKET TYPE </Text>
            </View>
          </TouchableOpacity>
          {faresOutward}
        </View>
      )
    })
    return(
      <ScrollView contentContainerStyle={[common.padding20, common.paddingTop40]}>
        {header}
        {info_station}
        {modalInfo}
      </ScrollView>
    )
  }
}
