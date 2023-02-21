import { useNavigate } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'
import * as roomsServices from '../../utilities/rooms-services'
import './RoomPage.css'

export default function RoomPage({ user, room, movies, setRoom }) {
  const movieNames = room.recommendedMovies.map((movie) => movie.title)
  const navigate = useNavigate()

  async function enterVoting() {
    // re-fetch the room
    const newRoom = await roomsServices.fetchRoom(room.roomCode)
    // re-set the room
    setRoom(newRoom)
    // navigate to voting
    navigate('/vote')
  }

  // for testing
  function createRoomConsole() {
    console.log(room)
  }

  // for testing
  function checkUser() {
    console.log(user)
  }

  return (
    <div className="RoomPageContainer">
      <div className="RoomCardContainer">
        <h2 className="PageTitle" style={{ textTransform: 'capitalize' }}>
          <u>{room.roomName} Page</u>
        </h2>
        <div className="SelectMovieContainer">
          <h2
            style={{
              backgroundColor: 'rgb(178, 194, 211)',
              marginLeft: '50vmin',
              marginRight: '50vmin',
              padding: '1vmin',
              borderStyle: 'solid',
              borderRadius: '1vmin',
            }}
          >
            {room.roomCode}{' '}
          </h2>
          <h4>
            <i>
              (Anyone with this room code will be able to join your session)
            </i>
          </h4>
        </div>
        <ul className="MovieGridContainer">
          {movies.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={index}
              room={room}
              setRoom={setRoom}
              isRecommended={movieNames.includes(movie.title)}
            />
          ))}
        </ul>
      </div>
      <button onClick={enterVoting}>Enter Voting Room</button>
      <button onClick={createRoomConsole}>console room </button>
      <button onClick={checkUser}>console user</button>
    </div>
  )
}
