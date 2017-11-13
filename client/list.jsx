import React from 'react'
import {connect} from "react-redux";
import Remote from './remote'

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.handleClick = this.handleClick.bind(this);
  }

  getInitialState() {
    return {
      component: null
    };
  }

  handleClick(e) {
    this.setState({ component: e.target.dataset.component })
  }

  render() {
    let {component} = this.state;
    let myProp = "HEELLLLOOOOO";

    console.log(component);
    console.log("list - store: " + this.props.widgets);

    return <table>
      <tbody>
        <tr>
          <td style={{verticalAlign: 'top'}}>
            {`Selected component ${component}`}
            <ul>
              <li style={{cursor: 'pointer'}}
                  onClick={this.handleClick} data-component="1">
                Show first remote component
              </li>
              <li style={{cursor: 'pointer'}}
                  onClick={this.handleClick} data-component="2">
                Show second remote component
              </li>
              <li style={{cursor: 'pointer'}}
                  onClick={this.handleClick} data-component="3">
                Show third remote component
              </li>
            </ul>
          </td>
          <td>
            <Remote component={component} myProp={myProp} />
          </td>
        </tr>
      </tbody>
    </table>
  }
}

function mapStateToProps(state) {
    return {
        widgets: state.widgets.widgets,
        cols: state.widgetsPanel.cols,
    }
}

export default connect(mapStateToProps)(List);