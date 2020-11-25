import { useState } from "react";

const Form = ({ datas, setDatas, t }) => {

	const [x,setX] = useState(0);
	const [y, setY] = useState(0);
	const [logo, setLogo] = useState("");
	const [highestX, setHighestX] = useState(0);
	const [highestY, setHighestY] = useState(0);

	const onChangeX = (e) => {
		const val = e.target.value;
		setX((Number(val)) - ((Number(val)) * 0.15));
		if (val > highestX) setHighestX(val);
	}
	const onChangeY = (e) => {
		const val = e.target.value;
		setY((Number(val)) - ((Number(val)) * 0.15));
		if (val > highestY) setHighestY(val);
	}
	const onChangeLogo = (e) => {
		setLogo(e.target.value);
	}
	const onClick = () => {
		if (!x || !y || !logo) return;
		setDatas([...datas,
			{logo,x,y}
		])
		setLogo("");
		t.setXTotal(highestX);
		t.setYTotal(highestY);
		setX(0);
		setY(0);
	}
	return (
		<div className="form">
			<input onChange={(e) => onChangeLogo(e)} value={logo} type="text" placeholder="logo" /><br />
			<input onChange={(e) => onChangeX(e)} value={x} type="text" placeholder="x value" /><br />
			<input onChange={(e) => onChangeY(e)} value={y} type="text" placeholder="y value" /><br />
			<input onClick={() => onClick()}type="submit" value="submit" /><br />
		</div>
	)
}

export default Form;
