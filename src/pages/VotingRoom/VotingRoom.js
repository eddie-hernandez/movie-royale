import { useNavigate } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'
import './VotingRoom.css'

export default function VotingRoom({movies}) {
  return (
    <div className="VotingRoom">
        <div className="CardContainer">
          <h2>Let's Get Votin'</h2>
          <ul className="MovieCardContainer">
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
            <li>Movie Test</li>
          {/* <MovieCard movies={movies} /> */}
          </ul>
        </div>
      </div>
  )
}
