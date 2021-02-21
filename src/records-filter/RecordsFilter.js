import React, { Component } from "react";
import "./RecordsFilter.css";
import { LAUNCH_YEAR } from "../constants/constants";
import ProgramRecordsList from "../program-records-list/ProgramRecordsList";

export default class RecordsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spacexPrograms: this.props.spacexPrograms,
      selectedYear: "",
      launchSuccess: null,
      landSuccess: null,
      loading: false,
    };
    this.toggleLaunchYear = this.toggleLaunchYear.bind(this);
  }

  toggleLaunchYear(year) {
    this.setState(
      {
        selectedYear: this.state.selectedYear === year.value ? "" : year.value,
      },
      () => {
        this.filterRecord();
      }
    );
  }

  toggleLaunchSuccess(launch) {
    this.setState(
      (prevState) => ({
        launchSuccess: prevState.launchSuccess !== launch ? launch : null,
      }),
      () => {
        this.filterRecord();
      }
    );
  }

  toggleLandSuccess(land) {
    this.setState(
      (prevState) => ({
        landSuccess: prevState.landSuccess !== land ? land : null,
      }),
      () => {
        this.filterRecord();
      }
    );
  }

  filterRecord() {
    const launchYearQuery =
      this.state.selectedYear !== ""
        ? `&launch_year=${this.state.selectedYear}`
        : "";
    const launchSuccessQuery =
      this.state.launchSuccess !== null
        ? `&launch_success=${this.state.launchSuccess}`
        : "";
    const landSuccessQuery =
      this.state.landSuccess !== null
        ? `&land_success=${this.state.landSuccess}`
        : "";

    this.setState({ loading: true });
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100${launchYearQuery}${launchSuccessQuery}${landSuccessQuery}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          loading: false,
          spacexPrograms: response,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="filter-container-wrapper">
          <p className="filter-container-heading">Filters</p>
          <div className="filter-container">
            <p className="filter-label">Launch Year</p>
            <hr />
            <div className="filter-options-container">
              {LAUNCH_YEAR.map((year) => {
                return (
                  <button
                    key={year.id}
                    className={
                      this.state.selectedYear === year.value
                        ? "filter-options-container-button filter-options-container-item-select"
                        : "filter-options-container-button filter-options-container-item-deselect"
                    }
                    onClick={() => this.toggleLaunchYear(year)}
                  >
                    {year.value}
                  </button>
                );
              })}
              <i area-hidden="true"></i>
            </div>
          </div>
          <div className="filter-container">
            <p className="filter-label">Successful Launch</p>
            <hr />
            <div className="filter-options-container">
              {[true, false].map((launch) => {
                return (
                  <button
                    key={launch}
                    className={
                      this.state.launchSuccess === launch
                        ? "filter-options-container-button filter-options-container-item-select"
                        : "filter-options-container-button filter-options-container-item-deselect"
                    }
                    onClick={() => this.toggleLaunchSuccess(launch)}
                  >
                    {launch ? "True" : "False"}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="filter-container">
            <p className="filter-label">Successful Landing</p>
            <hr />
            <div className="filter-options-container">
              {[true, false].map((landing) => {
                return (
                  <button
                    key={landing}
                    className={
                      this.state.landSuccess === landing
                        ? "filter-options-container-button filter-options-container-item-select"
                        : "filter-options-container-button filter-options-container-item-deselect"
                    }
                    onClick={() => this.toggleLandSuccess(landing)}
                  >
                    {landing ? "True" : "False"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {this.state.loading ? (
          <div>Loading ...</div>
        ) : this.state.spacexPrograms.length ? (
          <ProgramRecordsList
            spacexProgramsList={this.state.spacexPrograms}
          ></ProgramRecordsList>
        ) : (
          <div>No Records Found</div>
        )}
      </React.Fragment>
    );
  }
}
