

import {useContext} from 'react';
import { sharedData } from './App';

function UserHeader(){
    const username = useContext(sharedData);
    return(
        <h1 class="heading" >{username}</h1>
    )
}

export default UserHeader;