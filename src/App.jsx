import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class App extends React.Component<{}, {}> {
  
  public hello(): void {
    console.log('Hello');
  }

  render(): JSX.Element {
    return <div>App works!!</div>;
  }
}
