import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Truyền thông đa phương tiện</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/OASGscJQXp0"
              title="BookingCare: Hệ thống đặt khám trực tuyến"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Chúng tôi hiểu rằng, người bệnh xứng đáng được lựa chọn dịch vụ y
              tế chất lượng cao, như là: Đi khám đúng bác sĩ với vấn đề của mình
              Khám với bác sĩ chuyên khoa giỏi Thông tin bác sĩ đã được xác thực
              rõ ràng từ chuyên khoa, quá trình đào tạo, kinh nghiệm công tác Cơ
              sở y tế tiện nghi, giá cả dịch vụ hợp lý, công khai minh bạch
              
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
