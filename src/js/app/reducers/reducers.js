const date = new Date()

const initialState = {
  isVisible: false,
  listOrigin: [],
  originSelected: "",
  listDestination: [],
  destinationSelected: "",
  resultOrigin: [],
  resultDestination: [],
  error: false,
  loadingOrigin: false,
  loadingDestination: false,
  loadingTrains: false,
  journeyPlan: {},
  openOutward: false,
  openReturn: false,
  addReturn: false,
  showModal: false,
  outward: {
    rangeStart: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      9,
      0,
      0
    ),
    rangeEnd: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      0,
      0
    ),
    arriveDepart: ""
  },
  returnBack: {
    rangeStart: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      9,
      0,
      0
    ),
    rangeEnd: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      0,
      0
    ),
    arriveDepart: ""
  },
  openPassengersModal: false,
  adults: 1,
  children: 0,
  arrivingLeaving: "Leaving",
  outwardReturn: "Outward",
  openMoreTicketsOutwardId: 0,
  openMoreTicketsOutward: false,
  openMoreTicketsReturnId: 0,
  openMoreTicketsReturn: false,
  selectedOutward: {},
  selectedReturn: {},
  shoppingCart: [],
  addCart: false,
  longitudeOrigin: -0.118092,
  latitudeOrigin: 51.509865,
  longitudeDestination: -0.118092,
  latitudeDestination: 51.509865,
  openModalMap: false,
  selectedMap: "origin",
  openModalInfoOutward: false,
  openModalInfoOutwardId: 0,
  openModalInfoReturn: false,
  openModalInfoReturnId: 0,
  openModalPayment: false,
  selectedPayment: "",
  card: {
    nameholder: "",
    number: 0,
    cvv: 0,
    address_line1: "",
    address_line2: "",
    address_line3: "",
    city: "",
    country: "",
    postcode: "",
    expired_month: "",
    expired_year: "",
    email: "",
  },
  orders: {},
  pastOrders: [],
  deletedJourney: false,
  deletedJourneyShoppingCart: false,
  isAnotherTrip: false,
  isDeletedTrip: false,
  isDateTimePickerVisible: false,
  isPayment: false,
  isPaymentSuccess: false,
  emailSent: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_HIDE_WELCOME": {
      return Object.assign({}, state, { isVisible: action.bool });
    }
    case "POST_SUCCESS": {
      return Object.assign({}, state, {
        error: false,
        journeyPlan: action.data,
        loadingTrains: false
      });
    }
    case "SET_ORIGIN": {
      return Object.assign({}, state, { originSelected: action.itemValue });
    }
    case "SET_DEST": {
      return Object.assign({}, state, {
        destinationSelected: action.itemValue
      });
    }
    case "OPEN_OUTWARD_MODAL": {
      return Object.assign({}, state, {
        openOutward: !action.bool,
        openReturn: false,
        showModal: true
      });
    }
    case "OPEN_RETURN_MODAL": {
      return Object.assign({}, state, {
        openReturn: !action.bool,
        openOutward: false,
        addReturn: true,
        showModal: true
      });
    }
    case "CANCEL_RETURN": {
      return Object.assign({}, state, {
        cancelReturn: !action.bool,
        openReturn: false,
        addReturn: false
      });
    }
    case "SHOW_HIDE_MODAL": {
      return Object.assign({}, state, { showModal: !action.bool });
    }
    case "CHANGE_DATE_DEPARTURE_OUTWARD": {
      return Object.assign({}, state, {
        outward: {
          rangeStart: action.date.dateStart,
          rangeEnd: action.date.dateEnd,
          arriveDepart: "Depart"
        }
      });
    }
    case "CHANGE_DATE_DEPARTURE_RETURN": {
      return Object.assign({}, state, {
        returnBack: {
          rangeStart: action.date.dateStart,
          rangeEnd: action.date.dateEnd,
          arriveDepart: "Depart"
        }
      });
    }
    case "CHANGE_DATE_DEPARTURE_TIME_FROM_OUTWARD": {
      return Object.assign({}, state, {
        outward: {
          rangeStart: action.date,
          rangeEnd: state.outward.rangeEnd,
          arriveDepart: "Depart"
        }
      });
    }
    case "CHANGE_DATE_DEPARTURE_TIME_TO_OUTWARD": {
      return Object.assign({}, state, {
        outward: {
          rangeStart: state.outward.rangeStart,
          rangeEnd: action.date,
          arriveDepart: "Depart"
        }
      });
    }
    case "CHANGE_DATE_DEPARTURE_TIME_FROM_RETURN": {
      return Object.assign({}, state, {
        returnBack: {
          rangeStart: action.date,
          rangeEnd: state.returnBack.rangeEnd,
          arriveDepart: "Depart"
        }
      });
    }
    case "CHANGE_DATE_DEPARTURE_TIME_TO_RETURN": {
      return Object.assign({}, state, {
        returnBack: {
          rangeStart: state.returnBack.rangeStart,
          rangeEnd: action.date,
          arriveDepart: "Depart"
        }
      });
    }

    case "CHANGE_DATE_ARRIVAL_TIME_FROM_OUTWARD": {
      return Object.assign({}, state, {
        outward: {
          rangeStart: action.date,
          rangeEnd: state.outward.rangeEnd,
          arriveDepart: "Arrive"
        }
      });
    }
    case "CHANGE_DATE_ARRIVAL_TIME_TO_OUTWARD": {
      return Object.assign({}, state, {
        outward: {
          rangeStart: state.outward.rangeStart,
          rangeEnd: action.date,
          arriveDepart: "Arrive"
        }
      });
    }
    case "CHANGE_DATE_ARRIVAL_TIME_FROM_RETURN": {
      return Object.assign({}, state, {
        returnBack: {
          rangeStart: action.date,
          rangeEnd: state.returnBack.rangeEnd,
          arriveDepart: "Arrive"
        }
      });
    }
    case "CHANGE_DATE_ARRIVAL_TIME_TO_RETURN": {
      return Object.assign({}, state, {
        returnBack: {
          rangeStart: state.returnBack.rangeStart,
          rangeEnd: action.date,
          arriveDepart: "Arrive"
        }
      });
    }

    case "SHOW_HIDE_PASSENGERS": {
      return Object.assign({}, state, { openPassengersModal: action.bool });
    }
    case "CHANGE_NUMBER_ADULT": {
      return Object.assign({}, state, { adults: action.number });
    }
    case "CHANGE_NUMBER_CHILDREN": {
      return Object.assign({}, state, { children: action.number });
    }
    case "GET_ORIGIN_SUCCESS": {
      return Object.assign({}, state, {
        listOrigin: action.data,
        error: false,
        loadingOrigin: false
      });
    }
    case "GET_ORIGIN_ERROR": {
      return Object.assign({}, state, {
        listOrigin: [],
        resultOrigin: [],
        loadingOrigin: false
      });
    }
    case "RESET_LIST_ORIGIN": {
      return Object.assign({}, state, { listOrigin: [], resultOrigin: [] });
    }
    case "GET_DESTINATION_SUCCESS": {
      return Object.assign({}, state, {
        listDestination: action.data,
        error: false,
        loadingDestination: false
      });
    }
    case "GET_DESTINATION_ERROR": {
      return Object.assign({}, state, {
        listDestination: [],
        resultDestination: [],
        loadingDestination: false
      });
    }
    case "RESET_LIST_DESTINATION": {
      return Object.assign({}, state, {
        listDestination: [],
        resultDestination: []
      });
    }
    case "SET_RESULT_ORIGIN": {
      return Object.assign({}, state, { resultOrigin: action.data });
    }
    case "SET_RESULT_DESTINATION": {
      return Object.assign({}, state, { resultDestination: action.data });
    }
    case "ERROR": {
      return Object.assign({}, state, { error: true, loadingTrains: false });
    }
    case "IS_LOADING_ORIGIN": {
      return Object.assign({}, state, { loadingOrigin: action.bool });
    }
    case "IS_LOADING_DESTINATION": {
      return Object.assign({}, state, { loadingDestination: action.bool });
    }
    case "SET_ARRIVING_LEAVING": {
      return Object.assign({}, state, { arrivingLeaving: action.value });
    }
    case "IS_LOADING_TRAINS": {
      return Object.assign({}, state, { loadingTrains: action.bool });
    }
    case "SET_OUTWARD_RETURN": {
      return Object.assign({}, state, { outwardReturn: action.value });
    }
    case "SET_OPEN_MORE_TICKETS_OUTWARD_ID": {
      return Object.assign({}, state, {
        openMoreTicketsOutwardId: action.id
      });
    }
    case "SET_OPEN_MORE_TICKETS_OUTWARD": {
      return Object.assign({}, state, {
        openMoreTicketsOutward: action.bool
      });
    }
    case "SET_OPEN_MORE_TICKETS_RETURN_ID": {
      return Object.assign({}, state, { openMoreTicketsReturnId: action.id });
    }
    case "SET_OPEN_MORE_TICKETS_RETURN": {
      return Object.assign({}, state, { openMoreTicketsReturn: action.bool });
    }
    case "SET_OPEN_MORE_TICKETS_RETURN": {
      return Object.assign({}, state, { openMoreTicketsReturn: action.bool });
    }
    case "SELECT_OUTWARD": {
      return Object.assign({}, state, { selectedOutward: action.value });
    }
    case "SELECT_RETURN": {
      return Object.assign({}, state, { selectedReturn: action.value });
    }
    case "ADD_SHOPPING_CART": {
      return Object.assign({}, state, {
        shoppingCart: state.shoppingCart.concat(action.value)
      });
    }
    case "ADD_CART": {
      return Object.assign({}, state, { addCart: action.bool });
    }
    case "UPDATE": {
      return Object.assign({}, state, { shoppingCart: action.value });
    }
    case "SET_LATITUDE_ORIGIN": {
      return Object.assign({}, state, { latitudeOrigin: action.value });
    }
    case "SET_LONGITUDE_ORIGIN": {
      return Object.assign({}, state, { longitudeOrigin: action.value });
    }
    case "SET_LATITUDE_DESTINATION": {
      return Object.assign({}, state, { latitudeDestination: action.value });
    }
    case "SET_LONGITUDE_DESTINATION": {
      return Object.assign({}, state, { longitudeDestination: action.value });
    }
    case "SET_LATITUDE_ORIGIN": {
      return Object.assign({}, state, { latitudeOrigin: action.value });
    }
    case "SET_LONGITUDE_ORIGIN": {
      return Object.assign({}, state, { longitudeOrigin: action.value });
    }
    case "OPEN_MODAL_MAP": {
      return Object.assign({}, state, { openModalMap: action.bool });
    }
    case "SELECTED_MAP": {
      return Object.assign({}, state, { selectedMap: action.value });
    }
    case "OPEN_MODAL_INFO_OUTWARD": {
      return Object.assign({}, state, { openModalInfoOutward: action.bool });
    }
    case "OPEN_MODAL_INFO_OUTWARD_ID": {
      return Object.assign({}, state, {
        openModalInfoOutwardId: action.value
      });
    }
    case "OPEN_MODAL_INFO_RETURN": {
      return Object.assign({}, state, { openModalInfoReturn: action.bool });
    }
    case "OPEN_MODAL_INFO_RETURN_ID": {
      return Object.assign({}, state, {
        openModalInfoReturnId: action.value
      });
    }
    case "OPEN_MODAL_PAYMENT": {
      return Object.assign({}, state, { openModalPayment: action.bool });
    }
    case "SET_SELECTED_PAYMENT": {
      return Object.assign({}, state, { selectedPayment: action.value });
    }
    case "CHANGE_NAME_HOLDER": {
      return Object.assign({}, state, {
        card: {
          nameholder: action.value,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_NUMBER": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: action.value,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_CVV": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: action.value,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_ADDRESS_LINE_1": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: action.value,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_ADDRESS_LINE_2": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: action.value,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_ADDRESS_LINE_3": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: action.value,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_CITY": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: action.value,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_COUNTRY": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: action.value,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_POSTCODE": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: action.value,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_EXPIRED_MONTH": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: action.value,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_EXPIRED_YEAR": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: action.value,
          email: state.card.email,
          token: state.card.token
        }
      });
    }
    case "CHANGE_EMAIL": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: action.value,
          token: state.card.token
        }
      });
    }
    case "CREATE_TOKEN_CARD": {
      return Object.assign({}, state, {
        card: {
          nameholder: state.card.nameholder,
          number: state.card.number,
          cvv: state.card.cvv,
          address_line1: state.card.address_line1,
          address_line2: state.card.address_line2,
          address_line3: state.card.address_line3,
          city: state.card.city,
          country: state.card.country,
          postcode: state.card.postcode,
          expired_month: state.card.expired_month,
          expired_year: state.card.expired_year,
          email: state.card.email,
          token: action.value
        }
      });
    }
    case "SET_ORDER": {
      return Object.assign({}, state, { orders: action.data });
    }
    case "RESET_ORDER": {
      return Object.assign({}, state, { 
        pastOrders: state.pastOrders.concat(state.orders), orders: {} 
      });
    }
    case "DELETED_JOURNEY": {
      return Object.assign({}, state, { deletedJourney: action.bool });
    }
    case "DELETED_JOURNEY_SHOPPING_CART": {
      return Object.assign({}, state, {
        deletedJourneyShoppingCart: action.bool
      });
    }
    case "SET_ANOTHER_TRIP": {
      return Object.assign({}, state, { isAnotherTrip: action.bool });
    }
    case "IS_DELETED_TRIP": {
      return Object.assign({}, state, { isDeletedTrip: action.bool });
    }
    case "SET_OPEN_DATETIME": {
      return Object.assign({}, state, {
        isDateTimePickerVisible: action.bool
      });
    }
    case "IS_PAYMENT": {
      return Object.assign({}, state, { isPayment: action.bool });
    }
    case "IS_PAYMENT_SUCCESS": {
      return Object.assign({}, state, { isPaymentSuccess: action.bool });
    }
    case "EMAIL_SENT": {
      return Object.assign({}, state, { emailSent: action.bool });
    }
    case "RESET_ALL": {
      return Object.assign({}, state, {
        listOrigin: [],
        originSelected: "",
        listDestination: [],
        destinationSelected: "",
        resultOrigin: [],
        resultDestination: [],
        addReturn: false,
        outward: {
          rangeStart: new Date(),
          rangeEnd: new Date(),
          arriveDepart: ""
        },
        returnBack: {
          rangeStart: new Date(),
          rangeEnd: new Date(),
          arriveDepart: ""
        },
        adults: 1,
        children: 0,
        arrivingLeaving: "Leaving",
        outwardReturn: "Outward",
        addCart: false,
        selectedReturn: {} 
      });
    }
    default: {
      return state;
    }
  }
}

export default reducer
