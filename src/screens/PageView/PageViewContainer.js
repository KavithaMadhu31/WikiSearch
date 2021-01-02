import React, {useState} from 'react';
import {Alert} from 'react-native';
import SearchApiService from '../../apiConfig/services/SearchApiService';
import PageViewComponent from './PageViewComponent';
export default function PageViewContainer({navigation, route}) {
  const {pageid} = route.params;
  const [loading, setLoading] = useState(true);
  const [pageResult, setPageResult] = useState('');
  React.useEffect(() => {
    handleSelectedPage();
  }, [pageResult]);
  const handleSelectedPage = async () => {
    await SearchApiService.getSearchResult(pageid, 2)
      .then(async result => {
        setPageResult(result);
        setLoading(false);
      })
      .catch(err => {
        Alert.alert('', 'Try again later');
        setLoading(false);
      });
  };
  return <PageViewComponent loading={loading} pageResult={pageResult} />;
}
