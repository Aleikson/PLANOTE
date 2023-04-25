import Todo from './Todo';
import styles from "./GlobalTodo.module.css"

export const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <div className={styles.list}>
            <ul>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}