// Write your code here
// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-container">
          <div className="latest-match-details-1">
            <p className="team-name">{competingTeam}</p>
            <p className="team-date">{date}</p>
            <p className="team-venue">{venue}</p>
            <p className="team-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="team-logo"
            alt={`latestMatch ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="latest-match-label">First Innings</p>
          <p className="latest-match-value">{firstInnings}</p>
          <p className="latest-match-label">Second Innings</p>
          <p className="latest-match-value">{secondInnings}</p>
          <p className="latest-match-label">Man of the Match</p>
          <p className="latest-match-value">{manOfTheMatch}</p>
          <p className="latest-match-label">Umpires</p>
          <p className="latest-match-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
