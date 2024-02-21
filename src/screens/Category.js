import React, { useState } from 'react';
import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const DATA = [
    {
        id: 'item1',
        title: 'Mollywood',
    },
    {
        id: 'item2',
        title: 'Kollywood',
    },
    {
        id: 'item3',
        title: 'Hollywood',
    },
    {
        id: 'item4',
        title: 'Bollywood',


    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);

const App = () => {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
            />
        );
    };

    return (

        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
        />




    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        padding: 20,
        marginTop: 10,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,


        height: 140,
    },
    title: {
        fontSize: 20,
    },
});

export default App;