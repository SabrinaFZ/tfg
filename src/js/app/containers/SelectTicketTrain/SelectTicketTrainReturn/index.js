import { connect } from 'react-redux'

import SelectTicketTrainReturn from './../../../components/App/SelectTicketTrain/SelectTicketTrainReturn'

import { setOutwardReturn, setOpenMoreTicketsReturnId, setOpenMoreTicketsReturn, selectedOutward, selectedReturn, openModalInfoReturn, setOpenModalInfoReturnId, openModalInfoOutward, setOpenModalInfoOutwardId, setOpenMoreTicketsOutwardId, setOpenMoreTicketsOutward } from './../../../actions/actions'

const mapStateToProps = state => {
  return {
    originSelected: state.originSelected,
    destinationSelected: state.destinationSelected,
    outward: state.outward,
    returnBack: state.returnBack,
    listOrigin: state.listOrigin,
    listDestination: state.listDestination,
    journeyPlan: state.journeyPlan,
    outwardReturn: state.outwardReturn,
    openMoreTicketsReturnId: state.openMoreTicketsReturnId,
    openMoreTicketsReturn: state.openMoreTicketsReturn,
    openModalInfoReturn: state.openModalInfoReturn,
    openModalInfoReturnId: state.openModalInfoReturnId,
    openModalInfoOutward: state.openModalInfoOutward,
    openModalInfoOutwardId: state.openModalInfoOutwardId,
    openMoreTicketsOutwardId: state.openMoreTicketsOutwardId,
    openMoreTicketsOutward: state.openMoreTicketsOutward,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setOutwardReturn: (value) => {
      dispatch(setOutwardReturn(value))
    },
    setOpenMoreTicketsReturnId: (id) => {
      dispatch(setOpenMoreTicketsReturnId(id))
    },
    setOpenMoreTicketsReturn: (bool) => {
      dispatch(setOpenMoreTicketsReturn(bool))
    },
    selectedOutward: (value) => {
      dispatch(selectedOutward(value))
    },
    selectedReturn: (value) => {
      dispatch(selectedReturn(value))
    },
    setOpenModalInfoReturn: (bool) => {
      dispatch(openModalInfoReturn(bool))
    },
    setOpenModalInfoReturnId: (value) => {
      dispatch(setOpenModalInfoReturnId(value))
    },
    selectedOutward: (value) => {
      dispatch(selectedOutward(value))
    },
    setOpenModalInfoOutward: (bool) => {
      dispatch(openModalInfoOutward(bool))
    },
    setOpenModalInfoOutwardId: (value) => {
      dispatch(setOpenModalInfoOutwardId(value))
    },
    setOpenMoreTicketsOutwardId: (id) => {
      dispatch(setOpenMoreTicketsOutwardId(id))
    },
    setOpenMoreTicketsOutward: (bool) => {
      dispatch(setOpenMoreTicketsOutward(bool))
    }
  }
}

const SelectTicketTrainReturnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTicketTrainReturn)

export default SelectTicketTrainReturnContainer
