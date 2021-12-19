import React from "react";
import List from "./components/List";


const App = () => {

  const listCustomer = [
    {
      id: 1,
      name: 'Bruno Carneiro',
      skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
      id: 2,
      name: 'Aline Carneiro',
      skills: ['HTML', 'React Native', 'Go', 'JS']
    },
    {
      id: 3,
      name: 'Fulano de Tal',
      skills: ['Assembly']
    },
    {
      id: 4,
      name: 'José Ciclano',
      skills: ['Reason']
    }
  ]


  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <List 
        listCustomer={listCustomer}
        >
        </List>
      </div>
    </div>
  );
};
export default App;