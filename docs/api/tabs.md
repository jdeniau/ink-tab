---
description: Tabs component
---

# Tabs

### **children**

`Tabs` must only contain `Tab` children

### **onChange**

Type: `Function`

Parameters:

- `name`: the name specified in the `name` prop
- `activeTab`: the current active tab component

`onChange` function is called on component start and on every changes in tabs

### **keyMap**

The default keyMap is the following:

- use left / right or up / down to move to previous / next tab \(depending if you use column or row direction\),
- use shift+tab / tab to move to previous / next tab (disabled if the focus is managed externally, see [#Focus management](Focus management)),
- use meta \(alt\) + 1-9 number to go to selected tab.

You can override it this way:

```javascript
<Tabs keyMap={{
    useTab: false,
    useNumbers: false,
    previous: ['h', 'j'],
    next: ['k', 'l'],
}}>
```

### **flexDirection**

The `<Tabs>` component pass every props given to the containing `<Box>` of the tabs. This way you can easily build a vertical tabs component by using `<Tabs flexDirection="column">`.

![Demo column](https://github.com/jdeniau/ink-tab/raw/master/media/demo-column.svg?sanitize=true)

### **width**

If you specify a `width` to `<Tabs flexDirection="column"`, the width will be used to force the separator width.

### **initialActiveTab**

The first tab is active by default on component mount, you can choose another tab by setting
`initialActiveTab` to the index of it.

## **Focus management**

The `Tabs` accept a `isFocused` prop to handle focus management by an external source.

If `isFocused` is `true` or `false`, the TAB key is disabled for navigations.

The props can be controlled by any component / application, but the recommended way to let ink manage the focus and use it like that:

```javascript
import { useFocus } from 'ink';
import { Tabs, Tab } from 'ink-tab';

function FocusableTabs() {
  const { isFocused } = useFocus({ autoFocus: true });

  return (
    <Tabs isFocused={isFocused}>
      <Tab name="foo">Some tab</Tab>
    </Tabs>
  );
}
```

If ink focus management is used, then the "TAB" key won't work for tab switching.
