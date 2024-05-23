import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    flex: 1,
    marginLeft: horizontalScale(6),
  },
  searchInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    alignItems: 'center',
  },
});

export default style;
