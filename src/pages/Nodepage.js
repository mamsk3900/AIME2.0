import { useEffect } from 'react';
import AppBar from '../Components/AppBar';


function BlankAime() {
    useEffect(() => {
        document.title = "NodePage";
    }, [])

    return (
        <div>
            <html>
            <title>fjdksl</title>

            </html>
            <AppBar></AppBar>

        </div>
    )
}

export default BlankAime;