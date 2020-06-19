import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ComponentPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  }
  
  componentDidMount(){
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error());
  }

  componentWillUnmount(){
    // clean timers, listeners
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest => 
            <ContestPreview key={contest.id} {...contest} />
          )}
          {/* <ContestPreview {...this.props.contests[0]} /> */}

        </div>
      </div>
    );
  }
}

export default App;