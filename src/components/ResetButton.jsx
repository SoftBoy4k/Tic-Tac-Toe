import { Button } from "@mui/material"



const ResetButton = ({setSteps, clickCount, setClickCount, setClearImg}) => {

	const clickHandler = () => {
		setSteps([
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
		]);
		setClickCount(clickCount % 2);
		setClearImg(true);
	}

    return (
		<Button 
		variant="outlined"
		size="large"
		sx={{
			display: "block",
			margin: "0 auto",
			
		}}
		onClick={clickHandler}
		>
			Reset
		</Button>
    )
}

export default ResetButton