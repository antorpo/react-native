import React from 'react';
import {FlatList} from 'react-native';
import {Layout} from '../components/Layout';
import {Empty} from '../components/Empty';
import {Separator} from '../components/Separator';

export const ItemList = ({
  data,
  title,
  RenderElement,
  horizontal,
  color,
  image,
}) => {
  const renderEmpty = () => <Empty title="No hay coincidencias" />;

  const renderSeparator = () => (
    <Separator horizontal={horizontal} color={color} />
  );

  const renderItem = ({item}) => <RenderElement {...item} />;

  return (
    <Layout title={title} image={image} horizontal={horizontal}>
      <FlatList
        horizontal={horizontal}
        data={data}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Layout>
  );
};
