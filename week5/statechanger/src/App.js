import React from 'react';
import Counter from './Counter';

/*
* This is a functional Component
* It consists of a single function that returns some JSX code. 
* A React component should be the implementation of a single logical UI component.
*/

const App = () => {
    return (
        <div>
            This is the first page of the App
            <Counter title="1st Counter"/>
            <Counter title="2nd Counter"/>
            <Counter title="3rd Counter"/>

        </div>
    )
}

export default App;