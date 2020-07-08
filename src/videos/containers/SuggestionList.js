import React from 'react';
import {FlatList, Text} from 'react-native';
import {SuggestionLayout as Layout} from '../components/SuggestionLayout';
import {Empty} from '../components/Empty';
import {VerticalSeparator} from '../components/Separator';

export const SuggestionList = props => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Anaconda',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Dracula',
    },
    {
      id: '3ac68afc-c605-123-de4dw-fbd91aa97f63',
      title: 'Marvel',
    },
  ];

  const renderEmpty = () => <Empty title="No hay coincidencias" />;

  const renderSeparator = () => <VerticalSeparator color="green" />;

  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={data}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
};
