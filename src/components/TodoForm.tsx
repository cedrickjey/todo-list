import React , { FC, ChangeEvent ,useState ,useEffect , useRef  } from 'react';

interface Props {
    onSubmit: (todo: any) => void;
    edit: any
}

 
const TodoForm : FC<Props> = (props) => {

    const [ input , setInput ] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
     
    useEffect( () => {
      if(inputRef.current){
        inputRef.current.focus();
      }
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    }

    const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()* 10000),
            text: input
        });

        setInput('')

    };

    return (
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button> Ad Todo </button>
      </form>
    );
}

export default TodoForm;