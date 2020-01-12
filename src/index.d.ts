declare module 'ink-tab' {
  import React from 'react';
  export class Tabs extends React.Component<TabsProps> {}
  export class Tab extends React.Component<TabProps> {}

  export interface TabProps {
    children: React.ReactNode;
    name: string;
  }
  export interface TabsProps {
    onChange: Function;
    children: React.ReactNode;
    flexDirection?: string;
    keyMap: {
      useNumbers: boolean;
      useTab: boolean;
      previous: string[];
      next: string[];
    } | null;
  }
}
