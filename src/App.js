import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cert from "./Cert.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      certList: [
        {
          title: "Progate Go",
          image: process.env.PUBLIC_URL + "/certs/go.png",
          date: "2021-03-04",
        },
        {
          title: "Progate HTML & CSS",
          image: process.env.PUBLIC_URL + "/certs/html&css.png",
          date: "2021-03-21",
        },
        {
          title: "Progate Java",
          image: process.env.PUBLIC_URL + "/certs/java.png",
          date: "2021-03-26",
        },
        {
          title: "Progate jQuery",
          image: process.env.PUBLIC_URL + "/certs/jquery.png",
          date: "2021-03-23",
        },
        {
          title: "Progate JavaScript",
          image: process.env.PUBLIC_URL + "/certs/js.png",
          date: "2021-03-21",
        },
        {
          title: "Progate Node.js",
          image: process.env.PUBLIC_URL + "/certs/node.png",
          date: "2021-03-04",
        },
        {
          title: "Progate PHP",
          image: process.env.PUBLIC_URL + "/certs/php.png",
          date: "2021-03-04",
        },
        {
          title: "Progate Python",
          image: process.env.PUBLIC_URL + "/certs/python.png",
          date: "2021-02-26",
        },
        {
          title: "Progate React",
          image: process.env.PUBLIC_URL + "/certs/react.png",
          date: "2021-03-24",
        },
        {
          title: "Progate Ruby",
          image: process.env.PUBLIC_URL + "/certs/ruby.png",
          date: "2021-03-04",
        },
        {
          title: "Progate Ruby on Rails5",
          image: process.env.PUBLIC_URL + "/certs/ruby_rails5.png",
          date: "2021-03-25",
        },
        {
          title: "Progate SASS",
          image: process.env.PUBLIC_URL + "/certs/sass.png",
          date: "2021-03-24",
        },
        {
          title: "Progate SQL",
          image: process.env.PUBLIC_URL + "/certs/sql.png",
          date: "2021-03-21",
        },
      ],
      itemsToShow: 4,
      expanded: false,
      bodyProperties: null,
    };
    this.ref_top = React.createRef();
    this.ref_certifications = React.createRef();
    this.ref_contact = React.createRef();
    this.ref_showBtn = React.createRef();
  }

  componentDidMount() {
    this.setState({ bodyProperties: document.body.getBoundingClientRect() });
  }

  handleOpenCert() {
    if (this.state.itemsToShow === 4) {
      this.setState({
        itemsToShow: this.state.certList.length,
        expanded: true,
      });

      setTimeout(() => this.scrollTo(this.ref_showBtn, "end"), 500);
    } else {
      this.setState({ itemsToShow: 4, expanded: false });
      setTimeout(() => this.scrollTo(this.ref_certifications), 100);
    }
  }

  scrollTo(ref, anchor_val = "start") {
    const node = ref.current;
    if (node /* + other conditions */) {
      node.scrollIntoView({ behavior: "smooth", block: anchor_val });
    }
  }

  render() {
    let certCards;
    let titles;

    certCards = this.state.certList
      .slice(0, this.state.itemsToShow)
      .map((certItem, i) => {
        return (
          <Cert
            title={certItem.title}
            image={certItem.image}
            date={certItem.date}
          />
        );
      });

    titles = (
      <div>
        <h1>Kenny Susanto</h1>
        <h3>Powered by react.js</h3>
      </div>
    );

    return (
      <div className="app">
        <div className="content" ref={this.ref_top}>
          <div className="title">{titles}</div>

          <div className="cert-container" ref={this.ref_certifications}>
            <h2>Certifications</h2>
            <div className="cert-sub-container">{certCards}</div>
            <div
              onClick={() => this.handleOpenCert()}
              className="showBtn"
              ref={this.ref_showBtn}
            >
              {this.state.expanded ? (
                <span>Show less</span>
              ) : (
                <span>Show more</span>
              )}
            </div>
          </div>

          <div className="logo">
            <div className="ripple"></div>
            <img src={logo} className="content-logo" alt="logo" />
          </div>

          <div className="contact-container" ref={this.ref_contact}>
            <h2>Contact</h2>
            <p>here</p>
          </div>
        </div>
        <div className="vertical-buttons">
          <ul>
            <li onClick={() => this.scrollTo(this.ref_top)}>Top</li>
            <li onClick={() => this.scrollTo(this.ref_certifications)}>
              Certifications
            </li>
            <li onClick={() => this.scrollTo(this.ref_contact)}>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
