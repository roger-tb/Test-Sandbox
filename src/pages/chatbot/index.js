import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { botList } from "../../api/constants";

class CustomChatbot extends React.Component {
  constructor(props) {
    super(props);
    console.log("inside constrcutotr");
    console.log(this.props);
    this.state = {
      access_token: "",
      robotList: [],
      releaseKey: ""
    };
  }
  componentDidMount() {
    this.handleClear();
    this.setState({
      access_token: ""
    });
    if (this.props.access_token) {
      this.getBotList(this.props.access_token);
      this.getReleaseKeys(this.props.access_token);
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(this.props.access_token);
    // console.log(this.state);
    // if (prevProps.data !== this.props.data)
    //   this.setState({
    //     access_token: this.props.access_token
    //   });
    // this.setState( {access_token: this.props.access_token });
  }

  getBotList(token) {
    console.log("inside botlist method" + this.state.access_token);
    this.setState(
      {
        access_token: this.props.access_token
      },
      () => {
        console.log("state updated");
        console.log(this.props);
      }
    );
    const AuthStr = "Bearer ".concat(token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: AuthStr,
      "X-UIPATH-TenantName": "AnuragDefaup29d298910"
    };
    console.log(headers);
    const URL =
      "https://cors-anywhere.herokuapp.com/https://platform.uipath.com/anuraplyzyiv/AnuragDefaup29d298910/odata/Robots";
    axios
      .get(URL, { headers: headers })
      .then(response => {
        // If request is good...
        console.log(response);

        this.setState({
          robotList: response.data.value
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  getReleaseKeys(token) {
    const AuthStr = "Bearer ".concat(token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: AuthStr,
      "X-UIPATH-TenantName": "AnuragDefaup29d298910"
    };
    console.log(headers);
    const URL =
      "https://cors-anywhere.herokuapp.com/https://platform.uipath.com/anuraplyzyiv/AnuragDefaup29d298910/odata/Releases";
    axios
      .get(URL, { headers: headers })
      .then(response => {
        // If request is good...
        console.log(response);
        this.setState({
          releaseKey: response.data.value[0].Key
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  handleClear = () => {
    this.setState({ clear: true }, () => {
      this.setState({ clear: false });
    });
  }
  render() {
    console.log("inside render method");
    // console.log(this.props.access_token)
    if (this.state.robotList.length <= 0) return null;

    console.log(this.state);
    console.log(botSteps);

    return (
      <ThemeProvider theme={theme}>
      <ChatBot
          key={this.state.access_token}
          steps={botSteps(this.prepareBotList())}
          {...config}
        />
      </ThemeProvider>
    );
  }
   runBot(botId) {
    console.log(this.state);
    console.log("Running bot" + botId);
    const AuthStr = "Bearer ".concat(this.state.access_token);
    const url =
      "https://cors-anywhere.herokuapp.com/https://platform.uipath.com/anuraplyzyiv/AnuragDefaup29d298910/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs";
    const headers = {
      "Content-Type": "application/json",
      Authorization: AuthStr,
      "X-UIPATH-TenantName": "AnuragDefaup29d298910",
      "X-UIPATH-FolderPath": "default"
    };
    let data = {
      startInfo: {
        ReleaseKey: this.state.releaseKey,
        RobotIds: [botId],
        Strategy: "Specific"
      }
    };
    console.log(data);
    axios
      .post(url, data, {
        headers: headers
      })
      .then(response => {
        console.log(response);
      });
    return "Done";
  }
  prepareBotList() {
    let options = [];
    console.log(this.state);
    if (this.state.robotList) {
      this.state.robotList.forEach(bot => {
        options.push({
          value: bot.Id,
          id: bot.Id,
          label: bot.Name,
          trigger: () => {
            return this.runBot(bot.Id);
          }
        });
      });
    }
    console.log(options);
    return options;
  }
}

const config = {
  width: "500px",
  height: "500px",
  floating: true
};
const theme = {
  background: "white",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#00B2B2",
  headerFontColor: "#fff",
  headerFontSize: "25px",
  botBubbleColor: "#00B2B2",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4c4c4c"
};

const botSteps = botsteps => [
  {
    id: "Greet",
    message: "Hello, Welcome to Terobots",
    trigger: "Available Bots"
  },
  {
    id: "Available Bots",
    message: "Please select the bot you want to run",
    trigger: "Display list of bots"
  },
  {
    id: "Display list of bots",
    options: botsteps
  },
  {
    id:"Ask for more",
    message:"Do you wanna run any more bot?",
    trigger:"display options"
  },
  {
    id:"display options",
    options: [
      {
        value: "Yes",
        label: "Yes",
        trigger: "Available Bots"
      },
      {
        value: "No",
        label: "No",
        trigger: "Final"
      }
    ]
  },
  {
    id: "Done",
    message: "Success!",
    trigger: "Ask for more"
  },
  {
    id: "Final",
    message: "Have a nice day!",
    end: true
  }
];
const steps = [
  {
    id: "Greet",
    message: "Hello, Welcome to our shop",
    trigger: "Ask Name"
  },
  {
    id: "Ask Name",
    message: "Please type your name?",
    trigger: "Waiting user input for name"
  },
  {
    id: "Waiting user input for name",
    user: true,
    trigger: "Asking options to eat"
  },
  {
    id: "Asking options to eat",
    message: "Hi {previousValue}, Please click on what you want to eat!",
    trigger: "Displaying options to eat"
  },
  {
    id: "Displaying options to eat",
    options: [
      {
        value: "pizza",
        label: "Pizza",
        trigger: "Asking for Tomatoes in Pizza"
      },
      {
        value: "burger",
        label: "Burger",
        trigger: "Burger Not available"
      }
    ]
  },
  {
    id: "Burger Not available",
    message:
      "Sorry, We don't have burger available at the moment. Would you like to try our pizza?",
    trigger: "Asking for pizza after burger"
  },
  {
    id: "Asking for pizza after burger",
    options: [
      {
        value: true,
        label: "Yes",
        trigger: "Asking for Tomatoes in Pizza"
      },
      {
        value: "false",
        label: "No",
        trigger: "Done"
      }
    ]
  },
  {
    id: "Asking for Tomatoes in Pizza",
    message: "Would you like to have tomatoes in your pizza",
    trigger: "Adding Tomatoes in Pizza"
  },
  {
    id: "Adding Tomatoes in Pizza",
    options: [
      {
        value: true,
        label: "Yes",
        trigger: () => {
          this.props.eventHandler("tomato");
          return "Asking for Mushroom in Pizza";
        }
      },
      {
        value: "false",
        label: "No",
        trigger: "Asking for Mushroom in Pizza"
      }
    ]
  },

  {
    id: "Asking for Mushroom in Pizza",
    message: "Would you like to have mushroom in your pizza",
    trigger: "Adding Mushroom in Pizza"
  },

  {
    id: "Adding Mushroom in Pizza",
    options: [
      {
        value: true,
        label: "Yes",
        trigger: () => {
          this.props.eventHandler("mushroom");
          return "Asking for Corn in Pizza";
        }
      },
      {
        value: "false",
        label: "No",
        trigger: "Asking for Corn in Pizza"
      }
    ]
  },
  {
    id: "Asking for Corn in Pizza",
    message: "Would you like to have corn in your pizza",
    trigger: "Adding Corn in Pizza"
  },

  {
    id: "Adding Corn in Pizza",
    options: [
      {
        value: true,
        label: "Yes",
        trigger: () => {
          this.props.eventHandler("corn");
          return "Asking for Veggies in Pizza";
        }
      },
      {
        value: "false",
        label: "No",
        trigger: "Asking for Veggies in Pizza"
      }
    ]
  },

  {
    id: "Asking for Veggies in Pizza",
    message: "Would you like to have veggies in your pizza",
    trigger: "Adding Veggies in Pizza"
  },

  {
    id: "Adding Veggies in Pizza",
    options: [
      {
        value: true,
        label: "Yes",
        trigger: () => {
          this.props.eventHandler("veggie");
          return "Done";
        }
      },
      {
        value: "false",
        label: "No",
        trigger: "Done"
      }
    ]
  },
  {
    id: "Done",
    message: "Have a great day !!",
    end: true
  }
];
const mapStateToProps = state => ({
  access_token: state.access_token
  // any props you need else
});
export default connect(mapStateToProps)(CustomChatbot);
