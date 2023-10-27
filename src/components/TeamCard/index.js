// Write your code here
// Write your code here
// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="team-link">
      <Link to={`./team-matches/"${id}`} className="linking">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-heading">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
