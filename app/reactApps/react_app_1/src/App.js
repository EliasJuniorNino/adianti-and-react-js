import React, {useState, useCallback} from 'react';

const MIN_INPUT_VALUE_LENGTH = 1;

export default function App() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    const handleInputChange = useCallback((e) => {
        setValue(e.target.value);
    }, [value])

    const handleButtonClick = useCallback(() => {
        setTodos([
            ...todos,
            value
        ]);
    }, [todos, value])

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="input-group mb-3">
                    <input 
                        value={value} 
                        onChange={handleInputChange} 
                        type="text" class="form-control" 
                        placeholder="Digite um texto aqui..." 
                        aria-label="Digite um texto aqui..." 
                        aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button
                            disabled={value.length < MIN_INPUT_VALUE_LENGTH}
                            onClick={handleButtonClick} 
                            className="btn btn-outline-success" 
                            type="button">ADICIONAR
                        </button>
                    </div>
                </div>
            </form>
            
            <div className="list-group">
                {todos.length === 0 ? (
                    <span>Nenhum item adicionado</span>
                ) : (
                    <div>
                        <legend>Itens:</legend>
                        {todos.map((item, index) => (
                            <div className="list-group-item" key={index}>{item}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}