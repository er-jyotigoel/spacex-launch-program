import React, { Component } from "react";
import RecordsFilter from "../records-filter/RecordsFilter";
import "./LandingPage.css";

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      spacexPrograms: [],
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches?limit=100", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          spacexPrograms: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.spacexPrograms.length ? (
      <React.Fragment>
        <header>
          <h1 className="landing-page-heading">SpaceX Launch Programs</h1>
        </header>
        <main className="content-container">
          <RecordsFilter
            spacexPrograms={this.state.spacexPrograms}
          ></RecordsFilter>
        </main>
        <footer className="landing-page-footer">
          <b>Developed by:</b> Jyoti Goel
        </footer>
      </React.Fragment>
    ) : (
      <>
        <main>Loading ...</main>
      </>
    );
  }
}
