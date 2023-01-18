import React from "react";
import Interval from "./Interval";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
          fullName: "John Doe",
          bio: "Software developer with 5 years of experience",
          imgSrc: "https://via.placeholder.com/150",
          profession: "Developer"
      },
      show: false
    }
  }

  render() { 
    return (
        <div>
            <button onClick={() => this.setState({ show: !this.state.show })}>
                {this.state.show ? "Hide" : "Show"}
            </button>
            {this.state.show && (
                <div>
                    <h2>{this.state.person.fullName}</h2>
                    <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
                    <p>{this.state.person.bio}</p>
                    <p>Profession: {this.state.person.profession}</p>
                </div>
            )}
            <Interval />
        </div>
    );
  }
}

export default App;