import React, { Component } from "react";
import { observer } from "mobx-react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const classes = {
  listContainer: {
    maxHeight: "60vh",
    width: "35%",
    border: "1px solid lightGrey",
    borderRadius: "5px",
    overflow: "scroll",
    backgroundColor: "#fff8dc",
    fontFamily: "cursive sans-serif",
    color: "#9d9da5"
  }
};

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px"
        }}
      >
        <List component="nav" style={classes.listContainer}>
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
              <Divider />
            </ListItem>
          ))}
        </List>

        <div
          style={{
            alignSelf: "center",
            justifySelf: "center",
            width: "60%",
            border: "1px solid lightGrey",
            borderRadius: "5px",
            textAlign: "center",
            fontSize: "1.5em",
            minHeight: "50vh",
            padding: "20px"
          }}
        >
          <span style={{ verticalAlign: "middle", color: "#19857b" }}>
            {selectedItem && selectedItem.description}
          </span>
        </div>
      </div>
    );
  }
}

export default observer(MainView);
