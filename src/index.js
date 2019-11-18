import React, { Component } from 'react';
import PropTypes from 'prop-types';
import readline from 'readline';
import { Box, Color, StdinContext } from 'ink';

class Tab extends Component {
  render() {
    const { children } = this.props;

    return children;
  }
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
};

class TabsWithStdin extends Component {
  constructor(props) {
    super(props);

    this.isColumn = this.isColumn.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.moveToNextTab = this.moveToNextTab.bind(this);
    this.moveToPreviousTab = this.moveToPreviousTab.bind(this);

    this.state = {
      activeTab: 0,
    };

    this.defaultKeyMap = {
      useNumbers: true,
      useTab: true,
      previous: [this.isColumn() ? 'up' : 'left'],
      next: [this.isColumn() ? 'down' : 'right'],
    };
  }

  componentDidMount() {
    const { stdin, setRawMode, isRawModeSupported } = this.props;

    if (isRawModeSupported) {
      // use ink / node `setRawMode` to read key-by-key
      setRawMode(true);

      readline.emitKeypressEvents(stdin);
      stdin.on('keypress', this.handleKeyPress);
    }

    // select the first tab on component mount
    this.handleTabChange(0);
  }

  componentWillUnmount() {
    const { stdin, setRawMode, isRawModeSupported } = this.props;

    if (isRawModeSupported) {
      setRawMode(false); // remove set raw mode, as it might interfere with CTRL-C
      stdin.removeListener('keypress', this.handleKeyPress);
    }
  }

  handleTabChange(tabId) {
    const { children, onChange } = this.props;

    const tab = children[tabId];

    if (!tab) {
      return;
    }

    this.setState({
      activeTab: tabId,
    });

    onChange(tab.props.name, tab);
  }

  handleKeyPress(ch, key) {
    const { keyMap } = this.props;

    if (!key) {
      return;
    }

    const currentKeyMap = { ...this.defaultKeyMap, ...keyMap };
    const { useNumbers, useTab, previous, next } = currentKeyMap;

    if (previous.some(keyName => keyName === key.name)) {
      this.moveToPreviousTab();
    }

    if (next.some(keyName => keyName === key.name)) {
      this.moveToNextTab();
    }

    switch (key.name) {
      case 'tab': {
        if (!useTab) {
          return;
        }

        if (key.shift === true) {
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
        if (!useNumbers) {
          return;
        }
        if (key.meta === true) {
          const tabId = key.name === '0' ? 9 : parseInt(key.name, 10) - 1;

          this.handleTabChange(tabId);
        }

        break;
      }

      default:
        break;
    }
  }

  isColumn() {
    const { flexDirection } = this.props;

    return flexDirection === 'column' || flexDirection === 'column-reverse';
  }

  moveToNextTab() {
    const { children } = this.props;
    const { activeTab } = this.state;

    let nextTabId = activeTab + 1;
    if (nextTabId >= children.length) {
      nextTabId = 0;
    }

    this.handleTabChange(nextTabId);
  }

  moveToPreviousTab() {
    const { children } = this.props;
    const { activeTab } = this.state;

    let nextTabId = activeTab - 1;
    if (nextTabId < 0) {
      nextTabId = children.length - 1;
    }

    this.handleTabChange(nextTabId);
  }

  render() {
    const { children, onChange, flexDirection, ...rest } = this.props;
    const { activeTab } = this.state;

    const separatorWidth = rest.width || 6;

    const separator = this.isColumn()
      ? new Array(separatorWidth).fill('─').join('')
      : ' | ';

    return (
      <Box flexDirection={flexDirection} {...rest}>
        {children.map((child, key) => {
          const { name } = child.props;

          return (
            <Box key={name} flexDirection={flexDirection}>
              {key !== 0 && <Color dim>{separator}</Color>}
              <Box>
                <Color keyword="grey">{key + 1}. </Color>
                <Color bgGreen={activeTab === key} black={activeTab === key}>
                  {child}
                </Color>
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  }
}

TabsWithStdin.defaultProps = {
  flexDirection: 'row',
  keyMap: null,
};

TabsWithStdin.propTypes = {
  isRawModeSupported: PropTypes.bool.isRequired,
  setRawMode: PropTypes.func.isRequired,
  stdin: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.string,
  keyMap: PropTypes.shape({
    useNumbers: PropTypes.bool,
    useTab: PropTypes.bool,
    previous: PropTypes.arrayOf(PropTypes.string),
    next: PropTypes.arrayOf(PropTypes.string),
  }),
};

function Tabs(props) {
  return (
    <StdinContext.Consumer>
      {({ isRawModeSupported, stdin, setRawMode }) => (
        <TabsWithStdin
          isRawModeSupported={isRawModeSupported}
          stdin={stdin}
          setRawMode={setRawMode}
          {...props}
        />
      )}
    </StdinContext.Consumer>
  );
}

export { Tab, Tabs };
