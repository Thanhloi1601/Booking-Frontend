import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { getExtraInforDoctorById } from "../../../services/userService";
import { FormattedMessage } from "react-intl";
import NumberFormat from "react-number-format";
import "./DoctorExtrainfor.scss";
import localization from "moment/locale/vi";
class DoctorExtrainfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: false,
      extraInfor: {},
    };
  }
  componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }

    if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
      let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
      if (res && res.errCode === 0) {
        this.setState({
          extraInfor: res.data,
        });
      }
    }
  }

  showHideDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status,
    });
  };
  render() {
    let { isShowDetailInfor, extraInfor } = this.state;
    let { language } = this.props;
    console.log("check state", extraInfor);
    return (
      <div className="doctor-extra-infor">
        <div className="content-up">
          <div className="text-address"><FormattedMessage id="patient.extra-infor-doctor.address"/></div>
          <div className="name-clinic">
            {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ""}
          </div>
          <div className="detai-address">
            {" "}
            {extraInfor && extraInfor.addressClinic
              ? extraInfor.addressClinic
              : ""}
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfor === false && (
            <div className="short-infor">
              <FormattedMessage id="patient.extra-infor-doctor.money"/>
              {extraInfor &&
                extraInfor.priceTypeData &&
                language === LANGUAGES.VI && (
                  <NumberFormat
                    className="currency"
                    value={extraInfor.priceTypeData.valueVi}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"VND"}
                  />
                )}
              {extraInfor &&
                extraInfor.priceTypeData &&
                language === LANGUAGES.EN && (
                  <NumberFormat
                    className="currency"
                    value={extraInfor.priceTypeData.valueEn}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"USD"}
                  />
                )}
              <span
                className="detail"
                onClick={() => this.showHideDetailInfor(true)}
              >
                {" "}
                <FormattedMessage id="patient.extra-infor-doctor.detail"/> 
              </span>
            </div>
          )}

          {isShowDetailInfor === true && (
            <>
              <div className="title-price"><FormattedMessage id="patient.extra-infor-doctor.MONEY"/> </div>
              <div className="detail-infor">
                <div className="price">
                  <span className="left"><FormattedMessage id="patient.extra-infor-doctor.money"/></span>
                  <span className="right">
                    {extraInfor &&
                      extraInfor.priceTypeData &&
                      language === LANGUAGES.VI && (
                        <NumberFormat
                          className="currency"
                          value={extraInfor.priceTypeData.valueVi}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"VND"}
                        />
                      )}
                    {extraInfor &&
                      extraInfor.priceTypeData &&
                      language === LANGUAGES.EN && (
                        <NumberFormat
                          className="currency"
                          value={extraInfor.priceTypeData.valueEn}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"USD"}
                        />
                      )}
                  </span>
                </div>
                <div className="note">
                  {extraInfor && extraInfor.note ? extraInfor.note : ""}
                </div>
              </div>
              <div className="payment">
              <FormattedMessage id="patient.extra-infor-doctor.infor"/>
                {extraInfor && extraInfor.paymentTypeData
                  ? extraInfor.paymentTypeData.valueVi
                  : ""}
              </div>
              <div className="hide-price">
                <span onClick={() => this.showHideDetailInfor(false)}>
                  {" "}
                  <FormattedMessage id="patient.extra-infor-doctor.undetail"/>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtrainfor);
