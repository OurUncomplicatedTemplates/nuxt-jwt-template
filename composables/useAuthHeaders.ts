export const useAuthHeaders = async () => {
    // Check if user is logged in, by checking Auth Tokens.
    const authToken = await useAuthTokens()
    
    if (authToken === null) {
        return navigateTo('/login');
    }

    return {
        headers: new Headers({
            'Authorization': `Bearer ${authToken}`,
        }),
    }
}