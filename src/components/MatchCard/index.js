// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = matchCardDetails

  const getMatchStatus = status =>
    status === 'won' ? 'match-won' : 'match-lost'

  const matchStatusClassName = `match-status ${getMatchStatus(matchStatus)}`

  return (
    <li className="match-container">
      <img
        className="logo-image"
        src={competingTeamLogo}
        alt={`competingTeam ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="competing-team-result">{result}</p>
      <p className={matchStatusClassName}> {matchStatus}</p>
    </li>
  )
}

export default MatchCard
