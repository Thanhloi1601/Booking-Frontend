import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";

class HomeFooter extends Component {
  render() {
    return (
    <div className="home-footer">
        <p>&copy; 2023 ThanhLoi. <a href="#">More information.&#8594;Click me &#8594;</a></p>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
