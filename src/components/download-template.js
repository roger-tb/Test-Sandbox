import React from "react";
import { MdCloudDownload } from "react-icons/md";
import ReactLoading from 'react-loading';

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
                
           
        }.bind(this), 3000)
    }
    // setTimeout(()=>{
    //     this.props.triggerNextStep({ value: metadata.triggerNext, trigger })
    // },3000)
   
      }
    

    render() {
        
  return (
    <div style={{ width: "100%" }}>
        {this.state.processing == "true"? (
          <ReactLoading type={"bars"} color={"white"} />
        ) : (
            <a>
            {this.props.downloadText}  <MdCloudDownload/>
          </a>
        )}
      
    </div>
  );
        }
}
