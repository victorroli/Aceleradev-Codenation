import React from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contacts : [],
      filteredContacts: [],
      loading: true,
      search: '',
      order: ''
    }

    this.setSearch = this.setSearch.bind(this);
    this.setOrder = this.setOrder.bind(this);
  }
  
  setSearch(text){
    this.setState({search: text})
  }

  setOrder(data){
      this.setState({order: data})
  }

  filterByName(search){
      return (value) => {
        if (!search) {
          return true;
        }
        let subName = value.name.toLowerCase().substr(0, search.length);
        return subName.includes(search.toLowerCase());
      };
  }

  orderBy(key) {
    return (a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    };
  }

  componentDidMount(){
    this.setState({ loading: true })
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then(response => response.json())
    .then(data => 
        this.setState({
          contacts: data,
          loading: false
        })
    );
  }

  render() {
    return (
      // <>
        <div className="app" data-testid="app">
          <Topbar />
          <Filters 
            handleFilter={this.setOrder}
            order={this.state.order}
            handleSearch={this.setSearch}
            search={this.state.search}
          />
          <Contacts>
            {this.state.loading ? <h2>Carregando Dados...</h2> : null}
            {this.state.contacts
              .filter(this.filterByName(this.state.search))
              .sort(this.orderBy(this.state.order))
              .map(contact => 
            <Contact key={contact.id} data={contact}/>  )}
          </Contacts>
        </div>
      // </>
    )
  }
}

export default App;
