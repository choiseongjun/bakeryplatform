import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Touchable
} from 'react-native'

import { SIZES, FONTS } from '../../../constants';

import CircleButton from '../../../components/common/CircleButton';

const SearchCriteria = () => {
  const [isClicked, setIsClicked] = useState(false)
  let criteriaWholeCount = [
    [
      {id: 1, standardText: '최신순', toggle: true},
      {id: 2, standardText: '리뷰많은순', toggle: false},
      {id: 3, standardText: '북마크순', toggle: false},
    ],
    [
      {id: 4, standardText: '가까운순', toggle: false},
      {id: 5, standardText: '별점순', toggle: false},
      {id: 6, standardText: '평균가격낮은순', toggle: false},
    ]
  ];


  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:SIZES.base * 2.1,
        fontWeight: "bold",
        paddingBottom: SIZES.padding
        }}
      >
        정렬 기준
      </Text>
      <View style={styles.circleButtonBox}>
        <View style={styles.circleButtonLayer}>
          {
            criteriaWholeCount[0].map((content) => {
              let toggle = useRef(false);
              return (
                <View
                  key={content.id}
                  style={styles.circleButtonLayerComponent}
                >
                  <CircleButton standardText={content.standardText} />
                </View>
              );
            })
          }
        </View>
        <View style={styles.circleButtonLayer}>
          {
            criteriaWholeCount[1].map((content) => {
              return (
                <View
                  key={content.id}
                  style={styles.circleButtonLayerComponent}
                >
                  <CircleButton standardText={content.standardText} />
                </View>
              );
            })
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1,
    height: '100%'
  },
  circleButtonBox: {
    flex:1,
    flexDirection:'column',
    paddingTop:SIZES.padding
  },
  circleButtonLayer: {
    flex: 1,
    flexDirection: 'row',
  },
  circleButtonLayerComponent: {
    flex: 1,
  }
})

export default SearchCriteria