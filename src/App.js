import React, {Component} from 'react';
import './App.css';
import {CardList} from './Components/Card-List/card-list.component';
import {SearchBox} from './Components/Search-Box/search-box.component';
class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField:''
    }; 
    
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>this.setState({monsters:users}))
  }

  handleChange=(e)=>{
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
        <div className="App">
          <h1 className='Bi'>Monsters Rolodex</h1>
          <SearchBox 
            placeholder='search monsters' 
            handleChange={this.handleChange}/>
            
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;

/*Notes:
CLASS components have access to the STATE through the constructor method, and can pass it down as PROPS,
to components in it. It also has access to life-cycle methods,
which allow you to control some actions that happend before, after, and during the
applications execution. 


Something to consider when deciding if you want to 
give a component state or not is:
  "Who needs the information?" and "How are they going to get it?"
State is an property you inherit from the COMPONENT object, but its information is
not global. This means that information placed in it can only go from it to any component below it.
This is called "ONE WAY DATAFLOW"

*/