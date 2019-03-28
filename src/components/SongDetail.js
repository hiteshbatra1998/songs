import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song})=>{
    if(!song){
        return <div>Select A Song</div>
    }
    return(<div>
            <h3>Details for:</h3>
            <p>Title:{song.title}<br></br>
                Duration:{song.duration}
            </p>
        </div>);
}

const maspStateToProps=(state)=>{
    return {song:state.selectedsong}
}
export default connect(maspStateToProps)(SongDetail)