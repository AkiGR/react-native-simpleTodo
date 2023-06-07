import { FlatList, View } from "react-native";
import { useState } from "react";

// style
import StylingTodo from "./utils/todo";

// component
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const TodoScreen = () => {
    const [TodoItems , setTodoItems] = useState([]);
    
    const addTodoItem = ( newTodoText ) => {
        setTodoItems([...TodoItems, newTodoText])
    }

    return (
        <View style={StylingTodo.container}>
            <FlatList
                data={TodoItems}
                renderItem={({ item }) => <TodoItem text={item} />}
                keyExtractor={( item, index) => index.toString()}
            />
            <AddTodo onAddTodo={addTodoItem} />
        </View>
    )
};

export default TodoScreen;