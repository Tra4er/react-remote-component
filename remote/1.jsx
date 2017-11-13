const style = {
    background: "green"
}
const a = {
  background: "red"
}
class CMP extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Remote render")
    console.log(this.props.myProp)
    return <div style={style}>
      <div>Hello from <strong>FIRST</strong> remote component!</div>
      <div>{this.props.now}</div>
      <a style={a}>{this.props.myProp}</a>
    </div>
  }
}

module.exports = CMP;