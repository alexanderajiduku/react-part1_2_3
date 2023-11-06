const Tweet = (props) => {
	return (
		<div>
			<p>{props.username}</p>
			<p>{props.name}</p>
			<p>{props.date.toLocaleDateString()}</p>
			<p>{props.message}</p>
		</div>
	);
}