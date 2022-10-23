import React, { Component } from "react";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <form
        className="row m-3 p-2 "
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName, this.state.productPrice);
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(event) => {
              this.setState({ productName: event.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            onChange={(event) => {
              this.setState({ productPrice: event.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>

        <button type="submit" className="btn btn-primary  col-3">
          Add
        </button>
      </form>
    );
  }
}
