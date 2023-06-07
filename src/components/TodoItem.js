import React from 'react';
import { View, Text } from 'react-native';

// style
import StylingTodoItem from './utils/TodoItem';

const TodoItem = ({ text }) => {
    return (
        <View style={StylingTodoItem.container}>
            <Text>{text}</Text>
        </View>
    );
};

export default TodoItem;
