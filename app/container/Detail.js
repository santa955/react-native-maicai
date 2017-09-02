import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-looped-carousel';
import BottomIndicator from '../components/BottomIndicator';
import Header from '../components/Header/DetailHeader';
import Loading from '../components/Loading';
import { getProductDetail } from '../actions';
let screenWidth = Dimensions
  .get('window')
  .width;
class Detail extends React.Component {
  static navigationOptions = {
    header: (HeaderProps) => {
      return <Header navigation={HeaderProps} />
    }
  }
  constructor() {
    super();
    this.state = {
      size: {
        width: screenWidth,
        height: screenWidth
      }
    }
  }

  componentDidMount() {
    let { productId } = this.props.navigation.state.params;
    this.props.action.getProductDetail(productId);
  }

  render() {
    let data = this.props.data;
    let detail = data.detail;
    let detailData;
    if (!data.isFetching) {
      detailData = detail.data.detail
    }
    return (
      <View style={styles.root}>
        {!data.isFetching
          ? (<ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.slideContainer}>
              {this.renderSlides(detailData.image_list)}
            </View>
            <View style={styles.detailContainer}>
              <View>
                <Text style={styles.detailTitle}>{detailData.product_name}</Text>
              </View>
              <View>
                <Text style={styles.detailSubTitle}>{detailData.spec}</Text>
              </View>
              <View style={styles.detailMoreInfo}>
                <View style={styles.moreInfoMain}>
                  <Text style={styles.priceCurrent}>￥{detailData.price}</Text>
                  <Text style={styles.pricePrev}>￥{detailData.origin_price}</Text>
                  {detailData.buy_limit
                    ? <Text style={styles.buyLimit}>限购{detailData.buy_limit}份</Text>
                    : null
                  }
                </View>
                <View>
                  <Text style={styles.saleCount}>已售:{detailData.total_sales}</Text>
                </View>
              </View>
            </View>
            <View style={styles.paramContainer}>
              <View style={styles.paramHeader}>
                <Text style={styles.headeTitle}>规格</Text>
              </View>
              <View style={styles.paramTable}>
                {
                  detailData.propertys_array.map((param, index) => {
                    return (
                      <View style={styles.paramItem} key={index}>
                        <Text style={styles.lable}>{param.name}</Text>
                        <Text style={styles.param}>{param.value}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
            <BottomIndicator show="true"></BottomIndicator>
          </ScrollView>)
          : <Loading></Loading>}
      </View>
    )
  }
  renderSlides(data) {
    let len = data.length;
    let bullets = len > 1 ? true : false;
    let slides = data.map((slide, index) => {
      return (
        <Image
          key={index}
          style={styles.slide}
          source={{ uri: slide }}
        />
      )
    })
    return (<Carousel
      style={this.state.size}
      delay={3000}
      autoplay
      bullets={bullets}
      bulletStyle={{
        margin: 5,
        width: 6,
        height: 6,
        backgroundColor: '#ccc',
        borderColor: '#ccc'
      }}
      chosenBulletStyle={{
        margin: 5,
        width: 6,
        height: 6,
        backgroundColor: '#3cb963',
        borderColor: '#3cb963'
      }}
      bulletsContainerStyle={{
        bottom: -10
      }}>
      {slides}
    </Carousel>);
  }
}

const mapStateToProps = state => {
  return {
    data: state.detail
  }
};

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({ getProductDetail }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },
  fixedBottonContainer: {
    // position: 'fixed', top: 10, color: '#000',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0 , 0, 0)'
  },
  slideContainer: {
    width: screenWidth,
    height: screenWidth
  },
  slide: {
    flex: 1,
    resizeMode: 'contain',
    height: screenWidth
  },
  detailContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#efefef',
    backgroundColor: '#fff'
  },
  detailTitle: {
    fontSize: 18,
    color: '#333'
  },
  detailSubTitle: {
    marginTop: 5,
    fontSize: 14
  },
  detailMoreInfo: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  moreInfoMain: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  priceCurrent: {
    fontSize: 14,
    color: '#f95824'
  },
  pricePrev: {
    marginLeft: 6,
    fontSize: 10,
    color: '#b2b2b2',
    textDecorationLine: 'line-through'
  },
  buyLimit: {
    paddingHorizontal: 4,
    marginLeft: 6,
    fontSize: 10,
    backgroundColor: '#f85825',
    color: '#fff'
  },
  saleCount: {
    fontSize: 12,
    color: '#999'
  },
  paramContainer: {
    marginVertical: 6,
    backgroundColor: '#fff',
    padding: 10
  },
  paramHeader: {
    paddingVertical: 10
  },
  headeTitle: {
    fontSize: 18,
    color: '#333'
  },
  paramItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#efefef'
  },
  param: {
    fontSize: 14,
    color: '#666'
  },
  lable: {
    width: 100,
    fontSize: 14,
    color: '#666'
  }
})
