import React from "react";
import { MdCloudUpload } from "react-icons/md";
export class UploadTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", files: [] };
  }
  handleInputChange = (e) => {
    const files = e.target.files;
    if (files.length) {
      this.setState({
        message: e.target.value,
        files: files
      });
    }
  }
  
  handleSendFiles = () => {
    console.log(this.state.files[0]);
    
    // this.state.files
    
  }
  resetFile = () =>{
    this.setState({
        message: "",
        files:[]
    })
  }
  render() {
    return (
      <div className="FileUploadForm" style={{width:'100%'}}>
        <InputFile onChange={this.handleInputChange} message={this.state.message}/>
        {/* <MessageBox message={this.state.message} /> */}
        <ActionBar
          enabled={this.state.files.length > 0}
          onSendClick={this.handleSendFiles}
          onReset={this.resetFile}
        />
      </div>
    );
  }
}
function ActionBar (props) {
    return (
      props.enabled
      && (
        <div className="ActionBar">
          <button onClick={props.onSendClick}>Upload</button>
          <button onClick={props.onReset}>Reset</button>
        </div>
      )
    )
  }
  
  function MessageBox (props) {
    return (
      props.message.length > 0
      && <div className="MessageBox">{props.message}</div>
    );
  }
  
  function InputFile (props) {
    return (
      <label className="InputFile">
        {' '}
        <input type="file" value={props.message} onChange={props.onChange} />
      </label>
    );
  }
  
