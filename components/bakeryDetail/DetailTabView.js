import React,{useEffect} from 'react';
import { icons, images, SIZES, COLORS, FONTS } from '../../constants';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import Menu from './TabView/Menu';
import Review from './TabView/Review';
import Info from './TabView/Info';
 
const initialLayout = { width: Dimensions.get('window').width };
const DetailTabView = ({writeVisible,setWriteVisible,bakeryId,bakeryDetail}) => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Menu' },
        { key: 'second', title: 'Review' },
        { key: 'third', title: 'Info' },
    ]);
    
    // const renderScene = SceneMap({
    //     first: FirstRoute,
    //     second: SecondRoute, 
    //     third:ThirdRoute 
    // });
    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
          case 'first':
            return <Menu bakeryId={bakeryId} />
          case 'second':
            return <Review writeVisible={writeVisible} setWriteVisible={setWriteVisible} bakeryId={bakeryId} />
          case 'third':
            return <Info bakeryDetail={bakeryDetail} />
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
