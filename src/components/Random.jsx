const Random = (props) => {
	const {min, max} = props;
	return (
    <p className="random-number">Random value between {min} and {max}: {Math.trunc(Math.random() * (max - min)) + min}</p>
    )
};

export default Random;