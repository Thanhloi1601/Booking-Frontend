import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class UserRedux extends Component {
  componentDidMount() {}
constructor(props){
    super(props);
    this.state ={

    }
}
  render() {
    return (
      <div className="user-redux-container">
        <div className="title">User Redux</div>
        <div className="user-redux-body">
            <div>Thêm mới người dùng</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
