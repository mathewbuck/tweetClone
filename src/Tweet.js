import Reac, {useState} from 'react';
import "./App.css";

function Tweet({name, message, likes}) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div className = "tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h5>likes:{count}</h5>
            <button onClick={increment}>like</button>
        </div>
    );
}

export default Tweet;

