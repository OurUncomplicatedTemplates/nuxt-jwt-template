import { User } from "utils/types";

export const useAuth = async () => {
    // Check if user is logged in, by checking Auth Tokens.
    const authToken = await useAuthTokens()
    
    if (authToken === null) {
        console.log('not logged in useAuth')
        return null;
    }

    let user: User;

    const runtimeConfig = useRuntimeConfig()
    const refreshResponse = await fetch(`${runtimeConfig.public.apiBaseUrl}/auth/user`, {
        headers: new Headers({
            'Authorization': `Bearer ${authToken}`,
        }),
    });

    // If /auth/refresh gives us a valid access token, then we save that in localstorage and return true.
    if (refreshResponse && refreshResponse.ok) {
        const jsonResponse = await refreshResponse.json();
        user = jsonResponse;
    } else {
        return null;
    }

    return useState('user', () => {
        return user as User;
    })
}