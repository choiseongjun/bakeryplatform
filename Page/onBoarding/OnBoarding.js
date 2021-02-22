import React, {useState} from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

// constants
import {COLORS,FONTS,SIZES, images, theme } from "../../constants";
const { step1, step2, step3 } = images;

// theme

//page
import Loading from '../Loading/Loading';

const onBoardings = [
    {
        title: "",
        description: "",
        img: step1
    },
    {
        title: "",
        description: "",
        img: step2
    },
    {
        title: "",
        description: "",
        img: step3
    }
];



const OnBoarding = ({navigation}) => {
    const [completed, setCompleted] = React.useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            console.log(value)
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    // Render

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                    >
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                left: 40,
                                right: 40
                            }}
                        >
                            <Text style={{
                                ...FONTS.h1,
                                color: COLORS.gray,
                                textAlign: 'center',
                            }}
                            >
                                {item.title}
                            </Text>

                            <Text style={{
                                ...FONTS.body3,
                                textAlign: 'center',
                                marginTop: SIZES.base,
                                color: COLORS.gray,
                            }}
                            >
                                {item.description}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{    
                                position: 'absolute',
                                right: -50,
                                bottom: 40,

                                width: 150,
                                height: 60,
                                paddingLeft: 20,
                                justifyContent: 'center',
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                                backgroundColor: COLORS.blue
                            }}
                            onPress={() => { navigation.navigate("Home")}}
                        >
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{completed ? "Let's Go" : "Skip"}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: dotSize, }]}
                        />
                    );
                })}
            </View>
        );
    }

    if(isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <Loading /> 
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <View>
                        {renderContent()}
                    </View>
                    <View style={styles.dotsRootContainer}>
                        {renderDots()}
                    </View> 
                </View>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    imageAndTextContainer: {
        width: SIZES.width
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: SIZES.height > 700 ? '20%' : '16%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding / 2,
        marginBottom: SIZES.padding * 3,
        height: SIZES.padding,
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.blue,
        marginHorizontal: SIZES.radius / 2
    }
});

export default OnBoarding;