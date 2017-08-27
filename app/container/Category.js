import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchHeader from '../components/Header/SearchHeader';
import BottomIndicator from '../components/BottomIndicator';
import * as ACTIONS from '../actions';
let screenWidth = Dimensions
  .get('window')
  .width;
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCateIndex: 0
    }
  }

  componentDidMount() {
    let navParam = this.props.navigation.state.params
    let categoryId = navParam && navParam.categoryId || null;
    this.props.action.getCategories();
    // let { categories } = this.props;
    // categoryId = categoryId || categories.data.cate[0].id;
    this.props.action.getCategoryDetail('58fd69dc936edf42508b48de');
  }

  render() {
    let { categories, categoryDetail } = this.props;
    console.log(categoryDetail)
    return (
      <View style={styles.root}>
        <SearchHeader></SearchHeader>
        <View style={styles.wrapper}>
          {categories.categories && categories.categories.data
            ? this.renderCategories(categories.categories.data.cate)
            : null}
          {categoryDetail.categoryDetail && categoryDetail.categoryDetail.data
            ? this.renderCategoryDetail(categoryDetail.categoryDetail.data.cate)
            : null
          }
        </View>
      </View>
    )
  }

  renderCategories(categories) {
    let cates = categories.map((cate, index) => {
      let active = index == 0 ? styles.menuActive : null;
      return (
        <View style={[styles.menu, active]} key={cate.id}>
          <Text style={[styles.menuText]}>{cate.name}</Text>
        </View>)
    });

    return (
      <View style={styles.menuContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cates}
        </ScrollView>
      </View>
    )
  }

  renderCategoryDetail(detailDatas) {
    let cateGroups = detailDatas.map((detailData) => {
      let products = detailData.products.map((product) => {
        return (
          <View style={styles.item} key={product.id}>
            <Image
              resizeMethod="resize"
              style={styles.itemAvatar}
              source={{
                uri: product.small_image
              }} />
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle} numberOfLines={2}>{product.name}</Text>
              <Text style={styles.itemSubTitle} numberOfLines={1}>{product.spec}</Text>
              <View style={styles.itemAction}>
                <Text style={styles.itemPrice}>￥{product.price}</Text>
                <Icon style={styles.itemCart} name="shopping-cart" />
              </View>
            </View>
          </View>
        )
      })
      return (
        <View style={styles.grounp} key={detailData.id}>
          <View style={styles.grounpTitleContainer}>
            <Text style={styles.title}>{detailData.name}</Text>
          </View>
          <View style={styles.grounpItemsContainer}>
            {products}
          </View>
        </View>
      )
    });

    return (<View style={styles.listContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cateGroups}
        <BottomIndicator></BottomIndicator>
      </ScrollView>
    </View>)
  }
}

const mapStateToProps = state => {
  let categories = state.categories;
  let categoryDetail = state.categoryDetail;
  return { categories, categoryDetail }
};

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(ACTIONS, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  menuContainer: {
    backgroundColor: '#f4f4f4',
  },
  menu: {
    maxWidth: 100,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#e8e9e8'
  },
  menuActive: {
    backgroundColor: '#fff',
    borderColor: '#fff'
  },
  menuText: {
    color: '#666',
    fontSize: 14
  },
  listContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 10,
    marginBottom: 48
  },
  grounpTitleContainer: {
    paddingVertical: 3,
    paddingLeft: 5,
    backgroundColor: '#f4f4f4'
  },
  item: {
    paddingVertical: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  itemAvatar: {
    marginRight: 10,
    width: 65,
    height: 65
  },
  itemContent: {
    flex: 1
  },
  itemTitle: {
    fontSize: 16,
    color: '#333',
  },
  itemSubTitle: {
    marginTop: 2,
    fontSize: 12,
    color: "#999"
  },
  itemAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  itemPrice: {
    fontSize: 16,
    color: '#f95824'
  },
  itemCart: {
    paddingTop: 6,
    fontSize: 14,
    width: 24,
    height: 24,
    color: '#2eb257',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#eee',
    textAlign: 'center'
  }
})