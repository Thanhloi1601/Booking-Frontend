import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import { connect } from "react-redux";
import "./Specialty.scss";


class Specialty extends Component {
  render() {
  
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyên gia phổ biến</span>
            <button className="btn-section"> xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cơ xướng khớp 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cơ xướng khớp 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cơ xướng khớp 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cơ xướng khớp 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cơ xướng khớp 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Cơ xướng khớp 6</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
