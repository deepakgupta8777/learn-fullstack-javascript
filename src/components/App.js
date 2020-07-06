import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => 
  window.history.pushState(obj, '', url);

class App extends React.Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired
  }
  state = this.props.initialData;
  
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
          contests: {
            ...this.state.contests,
            // This helps to retain the description
            // on object once it is fetched.
            [contest.id]: contest
          }
        });
      });
  };

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.currentContest()} />;
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
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;