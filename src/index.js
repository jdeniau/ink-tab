import { h, Component, Text } from 'ink';

class Tab extends Component {
  render() {
    return <Text>{this.props.children}</Text>;
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      activeTab: 0,
    };
  }

  componentDidMount() {
    process.stdin.on('keypress', this.handleKeyPress);

    this.handleTabChange(this.props.children[0]);
  }

  componentWillUnmount() {
    process.stdin.removeListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(ch, key) {
    switch (key.name) {
      case 'left': {
        this.handleTabChange(this.props.children[this.state.activeTab - 1]);

        this.setState(prevState => ({
          activeTab: Math.max(0, prevState.activeTab - 1),
        }));

        return;
      }

      case 'right': {
        this.handleTabChange(this.props.children[this.state.activeTab + 1]);

        this.setState(prevState => ({
          activeTab: Math.min(
            this.props.children.length - 1,
            prevState.activeTab + 1
          ),
        }));

        return;
      }

      default:
        return;
    }
  }

  handleTabChange(tab) {
    this.props.onChange(tab.props.name, tab);
  }

  render() {
    return this.props.children.map((child, key) => (
      <Text>
        {key !== 0 && <Text dim> | </Text>}
        <Text bgGreen={this.state.activeTab === key}>{child}</Text>
      </Text>
    ));
  }
}

export { Tab, Tabs };
