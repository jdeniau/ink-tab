---
description: Tabs component
---

# Tabs

**childrens**

`Tabs` must only contain `Tab` children

**onChange**

Type: `Function`

Parameters:

* `name`: the name specified in the `name` prop
* `activeTab`: the current active tab component

`onChange` function is called on component start and on every changes in tabs

**keyMap**

The default keyMap is the following:

* use left / right or up / down to move to previous / next tab \(depending if you use column or row direction\),
* use shift+tab / tab to move to previous / next tab,
* use meta \(alt\) + 1-9 number to go to selected tab.

You can override it this way:

```javascript
<Tabs keyMap={{
    useTab: false,
    useNumbers: false,
    previous: ['h', 'j'],
    next: ['k', 'l'],
}}>
```

**flexDirection**

The `<Tabs>` component pass every props given to the containing `<Box>` of the tabs. This way you can easily build a vertical tabs component by using `<Tabs flexDirection="column">`.

![Demo column](https://github.com/jdeniau/ink-tab/raw/master/media/demo-column.svg?sanitize=true)

**width**

If you specify a `width` to `<Tabs flexDirection="column"`, the width will be used to force the separator width.

**hasFocus**

See [Focus management](tab.md)

