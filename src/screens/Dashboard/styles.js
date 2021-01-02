import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../theme/ResponsiveSize';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
export default StyleSheet.create({
  flex_1: {flex: 1},
  mainView: {
    marginHorizontal: responsiveHorizontalSize(4),
    marginVertical: responsiveVerticalSize(2),
    height: heightPercentageToDP(7),
    borderWidth: 1,
    borderColor: colors.GREY,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainView1: {flex: 1, backgroundColor: colors.WHITE},
  textInputStyle: {
    fontFamily: fonts.REGULAR_FONT,
    fontSize: responsiveFontSize(18),
    paddingHorizontal: responsiveHorizontalSize(4),
    flex: 1,
  },
  mainView2: {flex: 1, justifyContent: 'center', alignContent: 'center'},
  list_style: {
    flexDirection: 'row',
    backgroundColor: colors.MIXED_GREY,
    marginVertical: responsiveVerticalSize(0.9),
    marginHorizontal: responsiveHorizontalSize(3),
    paddingHorizontal: responsiveHorizontalSize(2),
    paddingVertical: responsiveVerticalSize(2),
    borderRadius: 20,
    alignItems: 'center',
  },
  list_image: {
    width: widthPercentageToDP('20%'),
    height: heightPercentageToDP('9%'),
    resizeMode: 'contain',
  },
  mainView3: {flex: 1, paddingLeft: responsiveHorizontalSize(2)},
});
