const React = require('react')

class HelloMessage extends React.Component {
    render() {
        return <div>Imię: {this.props.name}
        </div>
    }
}

module.exports = HelloMessage