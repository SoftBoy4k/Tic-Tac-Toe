import { Container } from "@mui/material";
import ScoreBar from "./components/ScoreBar"
import PlayingField from "./components/PlayingField";
import ResetButton from "./components/ResetButton";
import { useEffect, useState } from "react";



function App() {

	const [score, setScore] = useState({
		cross: 0,
		circle: 0
	})

	const [steps, setSteps] = useState([
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
    ]);

	const[clickCount, setClickCount] = useState(0);
	const[clearImg, setClearImg] = useState(false);

	let winner;

    const check = () => {
        if (steps[0][0] === steps[0][1] && steps[0][1] === steps[0][2] && steps[0][1] !== undefined) {
            return steps[0][0]
        } else if (steps[1][0] === steps[1][1] && steps[1][1] === steps[1][2] && steps[1][1] !== undefined) {
            return steps[1][0]
        } else if (steps[2][0] === steps[2][1] && steps[2][1] === steps[2][2] && steps[2][1] !== undefined) {
            return steps[2][0]
        } else if (steps[0][0] === steps[1][0] && steps[1][0] === steps[2][0] && steps[1][0] !== undefined) {
            return steps[0][0]
        } else if (steps[0][1] === steps[1][1] && steps[1][1] === steps[2][1] && steps[1][1] !== undefined) {
            return steps[0][1]
        } else if (steps[0][2] === steps[1][2] && steps[1][2] === steps[2][2] && steps[1][2] !== undefined) {
            return steps[0][2]
        } else if (steps[0][0] === steps[1][1] && steps[1][1] === steps[2][2] && steps[1][1] !== undefined) {
            return steps[0][0]
        } else if (steps[0][2] === steps[1][1] && steps[1][1] === steps[2][0] && steps[1][1] !== undefined) {
            return steps[0][2]
        } else {
            return;
        }
    }

    const clickPermission = !check();


	useEffect(() => {
		const el = check();
		winner = el;
		setScore(el === "x" 
		? {cross: score.cross + 1, circle: score.circle} 
		: el === "o" 
		? {cross: score.cross, circle: score.circle + 1}
		: score);
	}, [clickPermission]);

	return (
		<Container maxWidth="sm" sx={{ marginTop: "3%", padding: "2%" }}>
			<ScoreBar scores = {score}/>
			<PlayingField clickCount={clickCount} setClickCount={setClickCount} clearImg={clearImg} setClearImg={setClearImg} steps={steps} clickPermission={clickPermission} setSteps={setSteps}/>
			<ResetButton setClearImg={setClearImg} winner={winner} clickCount={clickCount} setClickCount={setClickCount} setSteps={setSteps}/>
		</Container>
	);
}

export default App;
