import React from 'react';
import Header from './Header';
import ContestPreview from './ComponentPreview';
import data from './testData.json';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  }
  
  componentDidMount(){
    this.setState({
      contests: data.contests
    });
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