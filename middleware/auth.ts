export default defineNuxtRouteMiddleware(async (to, from) => {
    // skip middleware on server
    if (process.server) return

    if (await useAuth() === null) {
        console.log('not logged in middleware')
        return navigateTo('/login');
    }
})