import React from "react";
import { MdCloudDownload } from "react-icons/md";
import ReactLoading from 'react-loading';
import styled from "styled-components";
// import botIcon from "../assets/bot-icon.png";

export class DownloadTemplate extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            processing: props.processing
        }
    }

    componentDidMount() {
        const { previousStep } = this.props;
        const { metadata = {} } = previousStep;
        const trigger =  metadata.triggerNext;
        console.log(trigger)

        if(this.props.processing == "true"){
        setTimeout(function() { //Start the timer
            this.setState({processing: "false"}) //After 1 second, set render to true
            this.props.triggerNextStep({ value: metadata.triggerNext, trigger })
                
           
        }.bind(this), 4000)
    }
    // setTimeout(()=>{
    //     this.props.triggerNextStep({ value: metadata.triggerNext, trigger })
    // },3000)
   
      }
    

    render() {
      const downloadComponent = {
            cursor:"pointer"
      };
  return (
    <div style={{ width: "100%" }}>
        {this.state.processing == "true"? (
          <ReactLoading type={"bars"} color={"black"} height={"30px"} width={"35px"}/>
        ) : (
          <StyledDownload>
          
            <div style={downloadComponent}>
            {this.props.downloadText}  <MdCloudDownload/>
          </div>
            </StyledDownload>
            
        )}
      
    </div>
  );
        }
}

const StyledDownload = styled.div`
cursor:pointer;
`;
// const StyledLogo = styled.div`
// width:100%;
// height:auto;
// background:url(${botIcon}) no-repeat; 
// background-size: 4rem;
// background-position: center;`;