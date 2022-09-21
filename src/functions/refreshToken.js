import axios from 'axios';
import { getCookie, setCookie } from 'react-use-cookie';

const refreshToken = async setTokenData => {
	// Get the tokenData from the cookie
	const tokenDataFromCookie = getCookie('tokenData');

	// If token cookie exists
	if (tokenDataFromCookie) {
		const tokenDataFromCookieParsed = JSON.parse(tokenDataFromCookie);

		// Check weather its expired or not
		// Fake force a token to be expired then (currentTime * 1000)
		const currentTime = new Date().getTime();
		if (tokenDataFromCookieParsed.expiratedDate > currentTime) {
			// Token is all good
			setTokenData(tokenDataFromCookieParsed);
		} else {
			// Token needs a refresh
			axios
				.post(
					'/.netlify/functions/refresh_token',
					JSON.stringify({
						refresh_token: tokenDataFromCookieParsed.refreshToken,
					})
				)
				.then(response => {
					const resData = {
						accessToken: response.data.access_token,
						refreshToken: response.data.refresh_token
							? response.data.refresh_token
							: tokenDataFromCookieParsed.refreshToken,
						expiratedDate:
							new Date().getTime() + response.data.expires_in * 1000,
					};
					setTokenData(resData);
					setCookie('tokenData', JSON.stringify(resData));
				});
		}
	} else {
		console.info('%cNo tokenData stored in cookie ❌🍪', 'color: red');
	}
};

export default refreshToken;
