import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => 
  window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  }
  
  componentDidMount(){
  }

  componentWillUnmount(){
    // clean timers, listeners
  }

  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
    api.fetchContest(contestId)
      .then(contest => {
        this.setState({
          currentContestId: contest.id,
          pageHeader: contest.contestName,
          contests: {
            ...this.state.contests,
            // This helps to retain the description
            // on object once it is fetched.
            [contest.id]: contest
          }
        });
      });
  };

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    else {
      return <ContestList 
        onContestClick={this.fetchContest}
        contests={this.state.contests} />;
    }
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;