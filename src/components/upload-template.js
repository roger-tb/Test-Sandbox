import React from "react";
import { MdCloudUpload } from "react-icons/md";
import axios, { post } from 'axios';

export class UploadTemplate extends React.Component {
  constructor(props) {
      console.log(props)
    super(props);
    this.state = { message: "", files: [] };
  }
  handleInputChange = e => {
    const files = e.target.files;
    if (files.length) {
      this.setState({
        message: e.target.value,
        files: files
      });
    }
  };

  handleSendFiles = () => {
    const { previousStep } = this.props;
    const { metadata = {} } = previousStep;
    const trigger =  metadata.triggerNext;
    console.log(this.state.files[0]);
    console.log(this.props)
    console.log("inside handle send files method");
    this.fileUpload(this.state.files[0]).then((response)=>{
      console.log(response.data);
      this.props.triggerNextStep({ value: metadata.triggerNext, trigger });
    })
   
  }

  fileUpload(file){
    const url = 'https://cors-anywhere.herokuapp.com/https://terobotsapi.azurewebsites.net/api/filehandler/uploadfile/terobotsinbound';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }


  resetFile = () => {
    this.setState({
      message: "",
      files: []
    });
  };
  render() {
    return (
      <div className="FileUploadForm" style={{ width: "100%" }}>
        {/* <form encType="multipart/form-data"> */}
          <InputFile
            onChange={this.handleInputChange}
            message={this.state.message}
          />
          {/* <MessageBox message={this.state.message} /> */}
          <ActionBar
            enabled={this.state.files.length > 0}
            onSendClick={this.handleSendFiles}
            onReset={this.resetFile}
          />
        {/* </form> */}
      </div>
    );
  }
}
function ActionBar(props) {
  return (
    props.enabled && (
      <div className="ActionBar">
        <button onClick={props.onSendClick}>Upload</button>
        <button onClick={props.onReset}>Reset</button>
      </div>
    )
  );
}

function MessageBox(props) {
  return (
    props.message.length > 0 && (
      <div className="MessageBox">{props.message}</div>
    )
  );
}

function InputFile(props) {
  return (
    <label className="InputFile">
      {" "}
      <input
        type="file"
        name="upl"
        value={props.message}
        onChange={props.onChange}
      />
    </label>
  );
}
