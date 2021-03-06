import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window');

const common = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F2F2F2',
  },

  center:{
    justifyContent:'center',
    alignItems: 'center'
  },

  start:{
    justifyContent:'flex-start',
  },

  end:{
    justifyContent: 'flex-end',
  },

  row:{
    flexDirection: 'row',
  },
  column:{
    flexDirection: 'column'
  },
  spaceBetween:{
    justifyContent:'space-between'
  },

  spaceAround: {
    justifyContent: 'space-around'
  },

  justifyContent: {
    justifyContent:'center',
  },

  alignItems: {
    alignItems: 'center'
  },

  scrollView: {
    backgroundColor:'#F2F2F2',
    marginTop:100,
  },

  textNormal:{
    color: '#444e55',
    fontSize: 18,
  },

  textBold:{
    color: '#585858',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textMedium:{
    color: '#585858',
    fontSize: 14,
    fontWeight: 'bold',
  },

  textSmall:{
    color: '#585858',
    fontSize: 12,
    fontWeight: 'bold',
  },

  textLarge:{
    color: '#585858',
    fontSize: 24,
    fontWeight: 'bold',
  },

  title:{
    color: '#e9418b',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },

  buttonActive:{
    alignItems: 'center',
    backgroundColor:'#e9418b',
    width: '40%',
    borderRadius: 5,
  },

  buttonActiveSmall:{
    alignItems: 'center',
    backgroundColor:'#e9418b',
    width: '30%',
    height: '30%',
    borderRadius: 5,
  },

  buttonDisabled:{
    alignItems: 'center',
    backgroundColor:'#e5a5c1',
    width: '40%',
    borderRadius: 5,
  },

  buttonActiveLarge: {
    alignItems: 'center',
    backgroundColor:'#e9418b',
    width: '100%',
    borderRadius: 5,
  },

  buttonNext: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9418b',
    width: '50%',
    borderRadius: 5,
  },

  textButtonNext: {
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
    color: '#e9418b',
    textAlign: 'center'
  },

  textButton:{
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
    color: '#F2F2F2',
    textAlign: 'center'
  },

  textPink:{
    color: '#e9418b',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textWhite:{
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  textWhiteMedium:{
    color: '#F2F2F2',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textWhiteSmall:{
    color: '#F2F2F2',
    fontSize: 14,
    fontWeight: 'bold',
  },

  textPinkSmall: {
    color: '#e9418b',
    fontSize: 14,
    fontWeight: 'bold',
  },

  input: {
    fontSize: 16,
  },

  searchBar:{
    width: '100%',
    borderWidth: 1,
    borderColor: '#e9418b',
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 10,
  },

  errorCredentials:{
    alignItems: 'center',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center'
  },

  marginTop10:{
    marginTop: 10
  },

  marginTop20:{
    marginTop: 20
  },

  marginTop30:{
    marginTop: 30
  },

  marginTop40:{
    marginTop: 40
  },

  marginTop50:{
    marginTop: 50
  },

  marginTop80: {
    marginTop: 80,
  },

  marginBottom20:{
    marginBottom: 20
  },
  marginBottom40:{
    marginBottom: 40
  },
  marginLeftRight40:{
    marginLeft: 40,
    marginRight: 40,
  },

  padding5:{
    padding: 5,
  },

  padding10:{
    padding: 10,
  },

  padding20:{
    padding: 20,
  },

  padding40:{
    padding: 40,
  },

  paddingLeftRight20:{
    paddingLeft: 20,
    paddingRight: 20
  },

  paddingLeftRight40:{
    paddingLeft: 40,
    paddingRight: 40
  },

  paddingTopBottom20:{
    paddingTop: 20,
    paddingBottom: 20,
  },

  paddingTopBottom10: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  paddingTop20:{
    paddingTop: 20
  },

  paddingTop40:{
    paddingTop: 40
  },

  paddingTop80:{
    paddingTop: 80
  },

  paddingRight20: {
    paddingRight: 20,
  },


  textCenter:{
    textAlign: 'center'
  },

  backgroundColor: {
    backgroundColor: '#F2F2F2'
  },

  backgroundColorWhite: {
    backgroundColor: '#FFFFFF'
  },

  backgroundColorPink: {
    backgroundColor: '#e9418b'
  },

  box:{
    borderWidth: 2,
    borderColor: '#e9418b',
    borderRadius: 5,
  },

  spinner:{
    color: '#e9418b',
    marginTop: 10,
  },

  separator:{
    borderStyle: 'dashed',
    borderTopWidth: 1,
    borderTopColor: '#e9418b'
  },

  separatorRight:{
    borderStyle: 'dashed',
    borderRightWidth: 1,
    borderRightColor: '#e9418b'
  },

  error:{
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#B22222',
  },

  buttonInfo: {
    alignItems: 'center',
    backgroundColor:'#e9418b',
    width: '100%',
  },

  widthBox:{
    width: window.width - 80
  }

})

export default common
