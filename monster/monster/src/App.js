
import './App.css';
import React, {Component} from 'react'
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/searchBox.component';
class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(user=>this.setState({ monsters : user}))
  }

  onChangeInput=(event)=>{
    this.setState({
      searchField:event.target.value
    });
  }


  render(){
    const { monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return(
      <div className="App">
      <h1> Monster Rolodex</h1>
      <SearchBox
      placeholder="검색하쇼"
      handleChange={this.onChangeInput}/>
      <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
