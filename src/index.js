import React, { Fragment, Component } from 'react';
import { Box, Color, StdinContext } from 'ink';
import keypress from 'keypress';

class Tab extends Component {
  render() {
    return this.props.children;
  }
}

class TabsWithStdin extends Component {
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.moveToNextTab = this.moveToNextTab.bind(this);
    this.moveToPreviousTab = this.moveToPreviousTab.bind(this);

    this.state = {
      activeTab: 0,
    };
  }

  componentDidMount() {
    const { stdin, setRawMode } = this.props;

    // use ink / node `setRawMode` to read key-by-key
    setRawMode(true);
    // and use user-friendly "keypress" library
    keypress(stdin);

    stdin.on('keypress', this.handleKeyPress);

    // select the first tab on component mount
    this.handleTabChange(0);
  }

  componentWillUnmount() {
    const { stdin } = this.props;

    stdin.removeListener('keypress', this.handleKeyPress);
  }

  handleTabChange(tabId) {
    const tab = this.props.children[tabId];

    if (!tab) {
      return;
    }

    this.setState({
      activeTab: tabId,
    });

    this.props.onChange(tab.props.name, tab);
  }

  handleKeyPress(ch, key) {
    if (!key) {
      return;
    }
    switch (key.name) {
      case 'left': {
        this.moveToPreviousTab();
        break;
      }

      case 'right': {
        this.moveToNextTab();
        break;
      }

      case 'tab': {
        if (true === key.shift) {
          this.moveToPreviousTab();
        } else {
          this.moveToNextTab();
        }

        break;
      }

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9': {
        if (true === key.meta) {
          const tabId = '0' === key.name ? 9 : parseInt(key.name, 10) - 1;

          this.handleTabChange(tabId);
        }
      }

      default:
        return;
    }
  }

  moveToNextTab() {
    let nextTabId = this.state.activeTab + 1;
    if (nextTabId >= this.props.children.length) {
      nextTabId = 0;
    }

    this.handleTabChange(nextTabId);
  }

  moveToPreviousTab() {
    let nextTabId = this.state.activeTab - 1;
    if (nextTabId < 0) {
      nextTabId = this.props.children.length - 1;
    }

    this.handleTabChange(nextTabId);
  }

  render() {
    return (
      <Box>
        {this.props.children.map((child, key) => {
          return (
            <Box key={child.props.name}>
              {key !== 0 && <Color dim> | </Color>}
              <Color keyword="grey">{key + 1}. </Color>
              <Color
                bgGreen={this.state.activeTab === key}
                black={this.state.activeTab === key}
              >
                {child}
              </Color>
            </Box>
          );
        })}
      </Box>
    );
  }
}

function Tabs(props) {
  return (
    <StdinContext.Consumer>
      {({ stdin, setRawMode }) => (
        <TabsWithStdin stdin={stdin} setRawMode={setRawMode} {...props} />
      )}
    </StdinContext.Consumer>
  );
}

export { Tab, Tabs };
