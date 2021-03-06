import {StyleSheet , Platform } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subcontainer1: {
    // flex: 1,
    height:moderateScale(253),
    backgroundColor: colors.up_green,
    // paddingTop: moderateScale(24),
  },
  done_received: {
    // marginTop: moderateScale(8),
  },
  mainconainer: {
    flex: 1,
    alignItems: 'center',
  },
  receivedstyle: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.poppinsMedium,
    color: colors.white,
  },
  Value: {
    flexDirection: 'row',
    // marginTop: moderateScale(8),
    alignItems:'center'
  },
  coinImg: {
    height: moderateScale(32),
    width: moderateScale(32),
  },
  coinvalue: {
    ...commonStyles.fontSize20,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.white,
    marginLeft: moderateScale(8),
  },
  profile: {
    // flex: 0.2,
    marginHorizontal: moderateScale(24),
    marginTop: -moderateScale(70),
    alignItem: 'center',
    height:moderateScale(144),
    // backgroundColor:'red'
  },
  profilepic: {
    height: moderateScale(64),
    width: moderateScale(64),
    borderRadius: 32,
    borderWidth: 3,
    borderColor: colors.white,
    marginTop: -moderateScale(32),
    backgroundColor:colors.white
  },
  
  transaction_NAME: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.OBSIDIAN,
    marginTop: moderateScale(12),
  },
  transaction_TIME: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    marginTop: moderateScale(8),
  },
  btcaddess: {
   
    borderRadius: 16,
    padding: moderateScale(16),
    
    paddingHorizontal:moderateScale(16),
    flexDirection: 'row',
    height: moderateScale(104),
    // shadowColor: 'red',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
    // elevation: 18,
    borderWidth:1,
    borderColor:'#F1F1F2',
    marginTop: moderateScale(16),
  },
  subcontainer2: {
    flex: 0.5,
    paddingHorizontal: moderateScale(24),
  },
  txtbtcadress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btcsubView: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  btctxt: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.OBSIDIAN,
  },
  btcid: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  Needhelpview: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical:moderateScaleVertical(8),

    flex: 0.1,
    padding: moderateScale(10),
  },
  Needhelp: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.Blue,
  },
  subprofile: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
   
    marginTop: moderateScale(32),
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
    }
});

export default styles;
