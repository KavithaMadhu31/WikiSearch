import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import SearchApiService from '../../apiConfig/services/SearchApiService';
import DashboardComponent from './DashboardComponent';

export default function DashboardContainer({navigation}) {
  const [searchList, setSearchList] = useState([]);
  const [searchValue, handleSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const handleWikiSearchAPI = async () => {
    await SearchApiService.getSearchResult(searchValue, 1)
      .then(async result => {
        if (result.query.hasOwnProperty('pages')) {
          let tempSearchArray = [];
          let pages = result.query.pages;
          console.log('the value is ', pages.length);
          for (i = 0; i < pages.length; i++) {
            var pageObj = {};
            pageObj['id'] = i;
            pageObj['pageid'] = pages[i].pageid;
            pageObj['title'] = pages[i].title;

            if (pages[i].hasOwnProperty('terms')) {
              pageObj['description'] = pages[i].terms.description;
            } else {
              pageObj['description'] = '';
            }
            if (pages[i].hasOwnProperty('thumbnail')) {
              pageObj['thumbnail'] = pages[i].thumbnail.source;
            } else {
              pageObj['thumbnail'] =
                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Homepage_of_Wikipedia.png/45px-Homepage_of_Wikipedia.png';
            }
            tempSearchArray.push(pageObj);
          }
          setSearchList(tempSearchArray);
          setLoading(false);
        } else {
          setSearchList([]);
          setLoading(false);
        }
      })
      .catch(err => {
        setLoading(false);
        Alert.alert('', 'Try again later');
      });
  };
  function handleParticularPage(pageid) {
    navigation.navigate('PageViewContainer', {pageid: pageid});
  }
  function handleSearchPressed() {
    if (searchValue.length == 0) {
      Alert.alert('', 'Enter something to search..');
    } else {
      setLoading(true);
      handleWikiSearchAPI();
    }
  }
  return (
    <DashboardComponent
      loading={loading}
      searchList={searchList}
      handleParticularPage={handleParticularPage}
      handleSearchInput={handleSearchInput}
      searchValue={searchValue}
      handleSearchPressed={handleSearchPressed}
    />
  );
}
