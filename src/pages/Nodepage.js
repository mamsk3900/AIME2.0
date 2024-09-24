import { useEffect } from 'react';
import AppBar from '../Components/AppBar';


function BlankAime() {
    useEffect(() => {
        document.title = "NodePage";
    }, [])

    return (
        <div id="page">
            <div>fdsaffd</div>
        </div>
    )
}

export default BlankAime;