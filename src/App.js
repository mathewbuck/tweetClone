import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {

const [users, setUsers] = useState ([
  {name: 'Mike', message: 'Doom eternal dude..'},
  {name: 'Julia', message: 'Did you do the dishes?'},
  {name: 'Melina', message: 'Ahhh!'}
])
 

  return(
    <div className="app">
   {users.map(user =>(
     <Tweet name={user.name} message={user.message} />
   ))}
    </div>
  );
}

export default App;