function checkAccessToken(): string|null|typeof ACCESS_TOKEN_CONFIRMED_UNAUTHORISED {
    // Get Access Token from localstorage
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)

    if (accessToken === null) {
        return null;
    }

    if (accessToken === ACCESS_TOKEN_CONFIRMED_UNAUTHORISED) {
        return ACCESS_TOKEN_CONFIRMED_UNAUTHORISED;
    }

    // Validate Access Token expiration
    const isValid = (() => {
        let decodedAndParsedJWTBody = JSON.parse(atob(accessToken.split('.')[1]));
        console.log(decodedAndParsedJWTBody)

        console.log(decodedAndParsedJWTBody.exp);
        console.log(Math.floor(Date.now() / 1000));
        return (decodedAndParsedJWTBody.exp > Math.floor(Date.now() / 1000));
    })();

    return isValid ? accessToken : null;
}

export const useAuthTokens = async () => {
    // Skip on server
    if (process.server) return

    // Check if we have an valid Access Token in LocalStorage
    const hasValidAccessToken = checkAccessToken();

    // If we have a valid access token then we return the token.
    if (hasValidAccessToken !== null && hasValidAccessToken !== ACCESS_TOKEN_CONFIRMED_UNAUTHORISED) {
        console.log('valid Token')
        return hasValidAccessToken;
    }

    if (hasValidAccessToken === ACCESS_TOKEN_CONFIRMED_UNAUTHORISED) {
        console.log('confirmed unauthorised')
        return null;
    }

    // If we don't have a valid Access Token then we call /auth/refresh
    const runtimeConfig = useRuntimeConfig()
    const refreshResponse = await fetch(`${runtimeConfig.public.apiBaseUrl}/auth/refresh`, {
        method: "POST",
    });

    // If /auth/refresh gives us a valid access token, then we save that in localstorage and return the token.
    if (refreshResponse && refreshResponse.ok) {
        const jsonResponse = await refreshResponse.json();
        localStorage.setItem(ACCESS_TOKEN_KEY, jsonResponse.access_token);
        return jsonResponse.access_token as string;
    }

    // If /auth/refresh does not give us a valid access token then we return null
    if (refreshResponse.status === 401) {
        localStorage.setItem(ACCESS_TOKEN_KEY, ACCESS_TOKEN_CONFIRMED_UNAUTHORISED);
        return null;
    }

    return null;
}