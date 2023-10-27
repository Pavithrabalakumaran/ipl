// Write your code here
// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const data = await fetch(teamsApiUrl)
    const fetchedData = await data.json()
    const formattedData = fetchedData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({
      teamsData: formattedData,
      isLoading: false,
    })
  }

  renderTeamsList = () => {
    const {teamsData} = this.state

    return (
      <ul className="teams-list">
        {teamsData.map(eachTeam => (
          <TeamCard id={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamsList()}
      </div>
    )
  }
}

export default Home
