import React from "react";
import "./Cert.css";

class Cert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cert-card">
        <div className="cert-title">{this.props.title}</div>
        <div className="cert-body">
          <img src={this.props.image} />
          <p>{this.props.date}</p>
        </div>
      </div>
    );
  }
}

export default Cert;
