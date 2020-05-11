---
description: Tab component
---

# Tab

**name**

Type: `string` the name that will be returned in the `onChange` function

### **Focus management**

The `Tabs` accept a `hasFocus` prop to handle focus management by an external source.

If `hasFocus` is `true` or `false`, the TAB key is disabled for navigations.

The props can be controlled by any component / application, but the recommended way to let ink manage the focus and use it like that:

```javascript
import { withFocus } from 'ink';
import { Tabs } from 'ink-tab';

const FocusableTabs = withFocus(Tabs);

<FocusableTabs>
    <Tab name="foo">Some tab</Tab>
<FocusableTabs>
```

![&#x26A0;](https://twemoji.maxcdn.com/36x36/26a0.png) Ink focus management feature has not been merged for now ![&#x26A0;](https://twemoji.maxcdn.com/36x36/26a0.png).   
See: [https://github.com/vadimdemedes/ink/pull/262](https://github.com/vadimdemedes/ink/pull/262)

Even though it is not merged in ink now, you can use this feature for `ink-tab`.

