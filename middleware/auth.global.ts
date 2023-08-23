export default defineNuxtRouteMiddleware(to => {
    // skip middleware on server
    if (process.server) return

    console.log('middleware auth');
})