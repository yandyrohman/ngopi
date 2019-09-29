import React from 'react';
import 'material-design-icons/iconfont/material-icons.css';

export default class RoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      style: {
        width: '0'
      }
    };
  }

  openSearch = () => {
    if (!this.state.search) {
      document.getElementById('room-control-input').focus();
      this.setState({
        search: true,
        style: {
          width: '180px',
          animation: 'RoomControlSearchShow 0.3s'
        }
      })
    } else {
      this.setState({
        search: false,
        style: {
          width: '0',
          animation: 'RoomControlSearchHide 0.3s'
        }
      })
    }
  }

  render() {
    return(
      <div className="room-control">
        <div 
          className="room-control-search"
          onClick={this.openSearch}
        >
          <i className="material-icons">search</i>
        </div>
        <input 
          className="room-control-input"
          id="room-control-input"
          placeholder="Cari Room"
          style={this.state.style}
        />
        <div className="room-control-add">
          <i className="material-icons">add_box</i>
        </div>
      </div>
    ) 
  }
}