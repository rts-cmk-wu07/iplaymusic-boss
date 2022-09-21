import querystring from 'querystring';
export default function Login() {
	// get client id from environment variable
	const clientId = process.env.REACT_APP_CLIENT_ID;
	var queryParameters = querystring.stringify({
		response_type: 'code',
		client_id: clientId,
		scope: 'user-read-private user-read-email',
		redirect_uri: 'http://127.0.0.1:8888/callback',
		state: '324y732467234763284678324htr',
	});
	return (
		<>
			<h1>Login</h1>
			<a
				className="text-2xl bg-red-700"
				href={`https://accounts.spotify.com/authorize?${queryParameters}`}
			>
				Log in with spotify
			</a>
			<br />
		</>
	);
}
