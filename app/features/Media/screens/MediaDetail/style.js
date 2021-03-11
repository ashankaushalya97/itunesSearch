import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    flex: 1,
  },
  flexRowCC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowSP:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  inputSearch: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    color: '#9b9b9b',
    fontSize: 16,
    height: 55,
    textAlign: 'center',
    width: '100%',
    paddingLeft: 60,
    paddingRight: 60,
  },
  searchWrap: {
    borderRadius: 10,
    position: 'relative',
    zIndex: 1,
    marginBottom: 28,
    marginTop:20,
    padding:10
  },
  item: {
    bottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 1,
    marginVertical: 1,
    paddingLeft: 13,
    paddingRight: 9,
    paddingTop: 10,
    paddingBottom: 12,
    justifyContent: 'center',
    zIndex: 1,
  },
  flexRowCSB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexColCSB: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  itemContent: {
    flex: 2,
    // justifyContent: 'center',
    marginHorizontal: 15,
  },
  itemTitle: {
    color: '#272140',
    fontSize: 16,
    lineHeight: 22,
  },
  title: {
    color: '#566573',
    fontSize: 18,
    lineHeight: 22,
    fontWeight:'bold'
  },
  itemSubTitle: {
    color: '#808B96',
    fontSize: 12,
    lineHeight: 22,
  },
  icon: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  mT20:{
    marginTop: 20,
  },
  backArrow:{
    height: 28,
    width: 24,
    resizeMode: 'contain',
  },
});
