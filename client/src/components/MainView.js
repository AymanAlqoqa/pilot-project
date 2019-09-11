import React, { Component } from "react";
import { observer } from "mobx-react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import "./style.css";

class MainView extends Component {
  state = {
    selectedItem: null
  };
  handleSelect = item => {
    this.setState({ selectedItem: item });
  };
  render() {
    const { items } = this.props;
    const { selectedItem } = this.state;
    return (
      <section className="mainView">
        <div className="main-view__right-container">
          <h2
            style={{
              fontSize: "larger",
              color: "#8181a2",
              textAlign: "center"
            }}
          >
            Item Name
          </h2>
          <List component="nav" className="main-view__right-list">
            {items.map((item, i) => (
              <ListItem
                button
                style={{
                  cursor: "pointer",
                  marginBottom: "10px",
                  border: "1px solid lightGrey",
                  borderRadius: "5px",
                  width: "80%",
                  margin: "10px auto"
                }}
                key={i}
                onClick={() => this.handleSelect(item)}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>

        <div className="main-view__left-list">
          <h2
            style={{
              fontSize: "larger",
              color: "#8181a2",
              textAlign: "center"
            }}
          >
            Item Description
          </h2>
          <div
            style={{
              alignSelf: "center",
              justifySelf: "center",
              border: "1px solid lightGrey",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "1.5em",
              minHeight: "50vh",
              padding: "20px",
              backgroundColor: "#ecffbd"
            }}
          >
            <span style={{ verticalAlign: "middle", color: "#19857b" }}>
              {selectedItem && selectedItem.description}
            </span>
          </div>
        </div>
      </section>
    );
  }
}

MainView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default observer(MainView);
