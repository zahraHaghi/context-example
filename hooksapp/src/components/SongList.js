import React, {useState, useEffect} from "react";
import uuid from 'uuid/v1';
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: "almost home", id: 1},
        {title: "memory gospel", id: 2},
        {title: "this wild darkness", id: 3},
    ]);
    const [age,setAge]=useState(20)
    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}])
    };
    useEffect(() => {
        console.log("useeffect");
    },[songs]);
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick={() => setAge(age + 1 )}>add 1 to age {age}</button>
            <NewSongForm addSong={addSong}/>
        </div>
    );
};
export default SongList;