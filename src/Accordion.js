import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {

//section = [sec1, sec2, sec3] 
// {title, content}

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }

  handleClick(num) {
    this.setState({
      currentTab: num
    });
  }

  render() {
    return(
      <div>
        <ul className="accordion-list">
          {this.props.sections.map((section, index) => (
                      <li className="accordion-list-item" key={index}>
                      <button onClick={() => this.handleClick(index)}>{section.title}</button>
          {this.state.currentTab === index && <p>{section.content}</p>}
                    </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default Accordion;