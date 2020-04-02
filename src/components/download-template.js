import React from "react";
import { MdCloudDownload } from "react-icons/md";
import ReactLoading from "react-loading";
import styled from "styled-components";
import axios from 'axios';
// import botIcon from "../assets/bot-icon.png";

export class DownloadTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processing: props.processing
    };
  }

  componentDidMount() {
    const { previousStep } = this.props;
    const { metadata = {} } = previousStep;
    const trigger = metadata.triggerNext;
    console.log(trigger);

    if (this.props.processing == "true") {
      setTimeout(
        function() {
          //Start the timer
          this.setState({ processing: "false" }); //After 1 second, set render to true
          this.props.triggerNextStep({ value: metadata.triggerNext, trigger });
        }.bind(this),
        4000
      );
    }
    // setTimeout(()=>{
    //     this.props.triggerNextStep({ value: metadata.triggerNext, trigger })
    // },3000)
  }
  downloadFile(){
    console.log("download here");
    axios({
      url: 'https://cors-anywhere.herokuapp.com/https://terobotsapi.azurewebsites.net/api/filehandler/downloadfile/SalesInquiryTemplate.xlsx/terobotstemplate', //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'Salestemplate.xlsx'); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }
  render() {
    const downloadComponent = {
      cursor: "pointer"
    };
    return (
      <div style={{ width: "100%" }}>
        {this.state.processing == "true" ? (
          <ReactLoading
            type={"bars"}
            color={"black"}
            height={"30px"}
            width={"35px"}
          />
        ) : (
          <StyledDownload>
            <div style={downloadComponent}>
              {this.props.downloadText}{" "}
              <MdCloudDownload onClick={this.downloadFile} />
            </div>
          </StyledDownload>
        )}
      </div>
    );
  }
}

const StyledDownload = styled.div`
  cursor: pointer;
`;
// const StyledLogo = styled.div`
// width:100%;
// height:auto;
// background:url(${botIcon}) no-repeat;
// background-size: 4rem;
// background-position: center;`;
