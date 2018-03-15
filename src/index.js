import { h, Component, Text } from 'ink';

class Tab extends Component {
  render() {
    return <Text>{this.props.children}</Text>;
  }
}

class Tabs extends Component {
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
    process.stdin.on('keypress', this.handleKeyPress);

    this.handleTabChange(0);
  }

  componentWillUnmount() {
    process.stdin.removeListener('keypress', this.handleKeyPress);
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
    return this.props.children.map((child, key) => (
      <Text>
        {key !== 0 && <Text dim> | </Text>}
        <Text keyword="gray">{key}. </Text>
        <Text bgGreen={this.state.activeTab === key}>{child}</Text>
      </Text>
    ));
  }
}

export { Tab, Tabs };
