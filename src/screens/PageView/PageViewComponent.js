import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import HTML from 'react-native-render-html';
export default function PageViewComponent(props) {
  const {pageResult, loading} = props;
  const contentWidth = useWindowDimensions().width;
  return (
    <ScrollView style={{flex: 1}}>
      {loading ? (
        <View
          style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <HTML html={pageResult} contentWidth={contentWidth} />
      )}
    </ScrollView>
  );
}
