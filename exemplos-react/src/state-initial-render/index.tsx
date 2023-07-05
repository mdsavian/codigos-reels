import { useState } from 'react';

function criarTodosIniciais() {
    const todosIniciais = [];
    for (let i = 0; i < 50; i++) {
        todosIniciais.push({
            id: i,
            texto: 'Item ' + (i + 1)
        });
    }
    return todosIniciais;
}

export default function TodoList() {
    const [todos, setTodos] = useState(criarTodosIniciais());
    const [texto, setTexto] = useState('');

    return (
        <>
            <input
                value={texto}
                onChange={e => setTexto(e.target.value)}
            />
            <button onClick={() => {
                setTexto('');
                setTodos([{
                    id: todos.length,
                    texto: texto
                }, ...todos]);
            }}>Add</button>
            <ul>
                {todos.map(item => (
                    <li key={item.id}>
                        {item.texto}
                    </li>
                ))}
            </ul>
        </>
    );
}
