import './index.css'
import {Link} from "react-router-dom"

export default function Rules() {
    return (
        <div className="min-h-screen bg-red-700">
            <div className="flex flex-row justify-center">
                <header className="mt-5 font-caveat font-bold text-10xl text-center text-amber-200 tracking-widest">Rules</header>
            </div>
        
        <div className="flex flex-row justify-center mt-20">
            <ul className="space-y-6 ml-5 mr-5 text-white font-bold font-poorStory text-base md:text-xl">
                <li className="flex flex-row"><img src="./svgs/caret-forward-outline.svg"/> First, you need to add the name of the participants one by one and click on ADD for each one of them;</li>
                <li className="flex flex-row"><img src="./svgs/caret-forward-outline.svg"/>Then, type your name in the box above the buttons "RAFFLE" and "CONFIRM";</li>
                <li className="flex flex-row"><img src="./svgs/caret-forward-outline.svg"/>Then, click on RAFFLE;</li>
                <li className="flex flex-row"><img src="./svgs/caret-forward-outline.svg"/>If you like the result, then click on CONFIRM to save it;</li>
                <li className="flex flex-row"><img src="./svgs/caret-forward-outline.svg"/>It's very important to strictly follow these rules to avoid repetitions; </li>
                <li className="flex flex-row"><img src="./svgs/caret-forward-outline.svg"/>If there are a odd number of players the next player to play cannot be the same player who just had their name raffled.</li>
                <li className="flex flex-row"><img src="./svgs/caret-forward-outline.svg"/>If there are a odd number of players repeat the last rule at least for the two or three first rounds.</li>
            </ul>
        </div>
        <div className="flex flex-row justify-center mt-20">
            <h1 className="text-center mb-5">
                <Link to="/"><img src="./svgs/acl.svg"/></Link>
            </h1>
        </div>
        </div>
    )
}