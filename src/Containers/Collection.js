import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Item from '../Components/Item'

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      hasItems: false
    };
    this.fetchCollectionItems()
  }

  fetchCollectionItems() {
      fetch("http://localhost:3000/items", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
        .then((response) => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                this.state.items.push(json[i])
            }
            this.setState({
              hasItems: true
            })
        })
        
    }


  render() {
    const listItems = this.state.items
    return (
      <div class="container">
        <div class="row h-100">
          <div className="col-sm-12 my-auto">
            { this.state.hasItems ? (
              listItems.map(data => {
                return <Item item={data}/>
              })
            ) : (
              <Card>
                <Card.Body>You don't have any items in your collection yet!</Card.Body>
              </Card>
            )}
            </div>
        </div>
      </div>
    );
  }
}

export default Collection;
