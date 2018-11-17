import React, { Component } from "react";
import { connect } from "react-redux";

import { getCurrentProfile } from "../../actions/profileActions";

const mapState = (state) => ({});

const actions = {
  getCurrentProfile
};

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div>
        <h1> Dashboard </h1>
      </div>
    );
  }
}

export default connect(mapState, actions)(Dashboard);

