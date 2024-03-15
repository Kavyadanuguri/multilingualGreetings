import {Component} from 'react'
import './index.css'

class Languages extends Component {
  state = {idValue: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  getLanguage = id => {
    this.setState({idValue: id})
  }

  render() {
    const {idValue} = this.state
    const {languageGreetingsList} = this.props
    const filteredList = languageGreetingsList.find(each => each.id === idValue)
    const {imageUrl} = filteredList
    const {imageAltText} = filteredList
    return (
      <div className="bg-container">
        <h1 className="heading1">Multilingual Greetings</h1>
        <ul className="ul-container">
          {languageGreetingsList.map(each => (
            <li key={each.id} className="list-item">
              <button
                onClick={() => this.getLanguage(each.id)}
                className={idValue === each.id ? 'button2' : 'button1'}
                type="button"
              >
                {each.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <img className="image1" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default Languages
