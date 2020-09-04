import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

import './App.css';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
}

class App extends Component {


    componentDidMount() {
        this.props.onRequestRobots();  
		}


    render() {

        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
             <h1>Loading</h1> :
          (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>                    
                    <CardList robots = {filteredRobots} />                    
                </Scroll>
                {/*used to be this.state.robots why different*/}
            </div>
            );
    }
}           

export default connect(mapStateToProps, mapDispatchToProps)(App);