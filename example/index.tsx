import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'react-app-polyfill/ie11'

import { Button } from '../src/button'

const App = () => {
  return (
    <div>
      <Button>Example</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
