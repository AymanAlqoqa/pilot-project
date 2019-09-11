import React, { Component } from "react";
import { observer } from "mobx-react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MainView from "./MainView";
import PropTypes from "prop-types";
import "./style.css";

const styles = {
  root: {
    padding: "5px",
    width: "90%",
    marginBottom: "20px"
  },
  messages: {
    width: "80%",
    margin: "0 auto"
  }
};

class App extends Component {
  state = {
    name: "",
    description: "",
    valiationError: false
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const {
      list: { add }
    } = this.props;

    const { name, description } = this.state;
    if (name.trim() === "" || description.trim() === "") {
      return this.setState({ valiationError: true }, () => {
        setTimeout(() => {
          this.setState({ valiationError: false });
        }, 1000);
      });
    }
    add({
      name: name,
      description: description
    });

    this.setState({ name: "", description: "" });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { list } = this.props;
    const { valiationError } = this.state;
    return (
      <Container style={styles.root}>
        <div className="main-container">
          <h2
            style={{
              textAlign: "center",
              color: "#8181b1",
              backgroundColor: "#bcf76e",
              fontFamily: "fantasy, sans-serif",
              lineHeight: "50px",
              letterSpacing: "5px"
            }}
          >
            Pilot Project
          </h2>
          <div style={styles.messages}>
            {list.isLoading && <h3>loading....</h3>}
            {list.loadingError && <h3>OOPS! .... Error Fetching data</h3>}
          </div>
          <form
            onSubmit={this.handleFormSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "40%",
              margin: "10px  auto"
            }}
          >
            <TextField
              required
              id="name"
              label="name"
              value={this.state.name}
              margin="dense"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />

            <TextField
              required
              id="description"
              label="description"
              value={this.state.description}
              margin="dense"
              onChange={this.handleChange}
              multiline
              rowsMax="4"
            />
            {valiationError && (
              <span style={{ color: "red" }}>Empty is not allowed!!!</span>
            )}
            <Button
              style={{
                backgroundColor: "#bcf76e",
                marginTop: "10px",
                color: "#8181b1"
              }}
              variant="contained"
              onClick={this.handleFormSubmit}
            >
              ADD
            </Button>
          </form>
          {/* list */}
          <div style={{ display: "block", margin: "0 auto", width: "90%" }}>
            <MainView items={list.items} />
          </div>
        </div>
      </Container>
    );
  }
}

App.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    isLoading: PropTypes.bool,
    loadingError: PropTypes.bool
  })
};

export default observer(App);
