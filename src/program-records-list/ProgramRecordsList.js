import React, { Component } from "react";
import "./ProgramRecordsList.css";

export default class ProgramRecordsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spacexProgramsList } = this.props;
    return (
      <div className="program-record-container">
        {spacexProgramsList.map((program) => {
          return (
            <div className="program-record-container-card">
              <div className="image-container">
                <img
                  src={program.links.mission_patch}
                  className="image-style"
                />
              </div>
              <p className="left-align-content text-cloro-blue">
                <b>{`${program.mission_name} # ${program.flight_number}`}</b>
              </p>
              <p className="left-align-content">
                <b>{`Mission Ids:`}</b>
                {program.mission_id.map((id) => {
                  return (
                    <li key={id} className="text-cloro-blue">
                      {id}
                    </li>
                  );
                })}
              </p>
              <p className="left-align-content">
                <b>{`Launch Year:`}</b>{" "}
                <span className="text-cloro-blue">{` ${program.launch_year}`}</span>
              </p>
              <p className="left-align-content">
                <b>{`Successful Launch:`}</b>
                <span className="text-cloro-blue">{` ${
                  program.launch_success ? "True" : "False"
                }`}</span>
              </p>
              <p className="left-align-content">
                <b>{`Successful Landing:`}</b>
                <span className="text-cloro-blue">
                  {` ${
                    program.rocket.first_stage.cores[0].land_success
                      ? "True"
                      : "False"
                  }`}
                </span>
              </p>
            </div>
          );
        })}
        <i area-hidden="true"></i>
        <i area-hidden="true"></i>
        <i area-hidden="true"></i>
      </div>
    );
  }
}
