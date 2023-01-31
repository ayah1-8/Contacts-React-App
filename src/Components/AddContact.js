import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  render() {
    return (
      <div className="ui main" onSubmit={this.add}>
        <h1> Add Contact</h1>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state}
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
