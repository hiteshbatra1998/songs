import { combineReducers } from 'redux';

const songsReducer = ()=>{
    return[
        { title:'abc' , duration:'5:00' },
        { title:'gsgsfg' , duration:'2:00' },
        { title:'grgrsg' , duration:'3:01' },
        { title:'gtrgrefg' , duration:'4:05'}
    ];
};

const selecedtSongResducer= (selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedsong:selecedtSongResducer
}); 