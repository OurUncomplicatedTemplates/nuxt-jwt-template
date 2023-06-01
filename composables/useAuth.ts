export const useAuth = () => {
    return useState('user', () => {
        return {
            name: 'John Doe',
            email: '',
        }
    })
}