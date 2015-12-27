import modular from 'simple-modular-scale'

class Style {
  constructor (options) {
    this.ms = modular(options)
  }

  chart() {
    return ({
      maxHeight: '100%'
    })
  }

  inner () {
    return ({
      maxWidth: this.ms[10],
      maxHeight: '100%',
      margin: 'auto'
    })
  }

  center () {
    return ({
      display: 'table-cell',
      verticalAlign: 'middle'
    })
  }

  container () {
    return ({
      display: 'table',
      width: '100%',
      boxSizing: 'border-box',
      padding: this.ms[4],
      minHeight: '100vh',
      backgroundColor: 'white'
    })
  }
}

export default Style
