import React from 'react'
import modular from 'simple-modular-scale'
import Pie from './Pie.jsx'

class App extends React.Component {

  render () {
    let ms = modular()

    let styles = {
      container: {
        display: 'table',
        width: '100%',
        boxSizing: 'border-box',
        padding: ms[4],
        minHeight: '100vh',
        backgroundColor: 'black',
      },
      center: {
        display: 'table-cell',
        verticalAlign: 'middle',
      },
      pie: {
        maxWidth: ms[10],
        maxHeight: '100%',
        margin: 'auto'
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.center}>
          <div style={styles.pie}>
            <Pie size={128} center={64} radius={32}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
