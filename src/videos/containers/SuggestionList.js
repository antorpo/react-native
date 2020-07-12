import React from 'react';
import {FlatList, Text} from 'react-native';
import {SuggestionLayout as Layout} from '../components/SuggestionLayout';
import {Empty} from '../components/Empty';
import {VerticalSeparator} from '../components/Separator';
import {Suggestion} from '../components/Suggestion';

export const SuggestionList = ({data}) => {
  const renderEmpty = () => <Empty title="No hay coincidencias" />;

  const renderSeparator = () => <VerticalSeparator color="green" />;

  const renderItem = ({item}) => <Suggestion {...item} />;

  return (
    <Layout title="Recomendaciones para ti">
      <FlatList
        data={data}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Layout>
  );
};
