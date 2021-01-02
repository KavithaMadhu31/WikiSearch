import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import colors from '../../theme/colors';
import {responsiveVerticalSize} from '../../theme/ResponsiveSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
export default function DashboardComponent(props) {
  const {
    searchList,
    handleParticularPage,
    handleSearchInput,
    searchValue,
    handleSearchPressed,
    loading,
  } = props;
  return (
    <View style={styles.mainView1}>
      <View style={styles.mainView}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={'Search here...'}
          onChangeText={text => handleSearchInput(text)}
          value={searchValue}
        />
        <TouchableOpacity onPress={() => handleSearchPressed()}>
          <Ionicons
            size={28}
            style={{marginRight: responsiveVerticalSize(2)}}
            color={colors.PRIMARY_COLOR}
            name={'ios-search'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.flex_1}>
        {loading ? (
          <View style={styles.mainView2}>
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            data={searchList}
            renderItem={({item, index}) => (
              <ShowSearchResult
                item={item}
                handleParticularPage={handleParticularPage}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
}

function ShowSearchResult(props) {
  const {handleParticularPage, item} = props;
  return (
    <TouchableOpacity onPress={() => handleParticularPage(item.pageid)}>
      <View style={styles.list_style}>
        <Image
          style={styles.list_image}
          source={{
            uri: item.thumbnail,
          }}
        />
        <View style={styles.mainView3}>
          <Text style={{color: colors.PRIMARY_COLOR}}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
