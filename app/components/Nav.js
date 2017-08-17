import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navigation = StackNavigator({
    Main: {
        screen: TabsNavigator
    },
    Detail: {
        screen: DetailScreen
    }
});

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() { }
    render() {
        return (
            <View style={{ flex: 1, position: 'relative' }}>
                <Text>测试</Text>
                <View style={styles.tabs}>
                    <View style={styles.tab}>
                        <Text style={styles.text}>首页</Text>
                    </View>
                    <View style={styles.tab}>
                        <Text style={styles.text}>分类</Text>
                    </View>
                    <View style={styles.tab}>
                        <Text style={styles.text}>购物车</Text>
                    </View>
                    <View style={styles.tab}>
                        <Text style={styles.text}>我的</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.8)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        left: 0,
        bottom: 0
    },

    tab: {
        width: 50,
        height: 40
    },

    text: {
        color: 'rgba(255, 255, 255, 1)'
    }

});