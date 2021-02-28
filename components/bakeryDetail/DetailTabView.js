import React,{useEffect} from 'react';
import { icons, images, SIZES, COLORS, FONTS } from '../../constants';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import Menu from './TabView/Menu';
import Review from './TabView/Review';
import Info from './TabView/Info';
import Blog from './TabView/Blog';

const initialLayout = { width: Dimensions.get('window').width };
const DetailTabView = ({navigation,writeVisible,setWriteVisible,bakeryId,bakeryDetail}) => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: '정보' },
        { key: 'second', title: '메뉴' },
        { key: 'third', title: '평점' },
        { key: 'four', title: '후기' },
    ]);
    
    // const renderScene = SceneMap({
    //     first: FirstRoute,
    //     second: SecondRoute, 
    //     third:ThirdRoute 
    // });
    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
          case 'first':
            return <Info bakeryDetail={bakeryDetail} />
          case 'second':
            return <Menu bakeryId={bakeryId} />
          case 'third':
            return <Review writeVisible={writeVisible} setWriteVisible={setWriteVisible} bakeryId={bakeryId} />
          case 'four':
            return <Blog navigation={navigation} bakeryId={bakeryId} />
        }
      };
    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor:COLORS.black }}
          style={{ backgroundColor: COLORS.white,width:'auto',left:0 }}
          renderLabel={({ route, focused, color }) => (
            <Text style={{ color:focused?COLORS.black:COLORS.darkgray,fontSize:SIZES.font*1.6,fontWeight: 'bold', margin: 8 }}>
              {route.title}
            </Text>
          )}
        />
      );
       
    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
                /> 
        </View>
    ) 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:50,
      width:'auto'
    },
  });
export default DetailTabView
