import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

// style
import StylingAddToDo from './utils/AddTodo';

const AddTodo = ({ onAddTodo }) => {
    const [todoText, setTodoText] = useState('');

    const addTodoItem = () => {
        onAddTodo(todoText);
        setTodoText('');
    };

    return (
        <View style={StylingAddToDo.container}>
            <TextInput 
                style={StylingAddToDo.input}
                placeholder="Enter a todo item"
                value={todoText}
                onChangeText={(text) => setTodoText(text)}
            />
            <Button title="Add" onPress={addTodoItem} />
        </View>
    );
};

export default AddTodo;