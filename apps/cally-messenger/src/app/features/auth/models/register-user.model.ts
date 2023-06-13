export type RegisterUser = {
    email: string,
    username: string,

    passwords: {
        password: string,
        confirmPassword: string
    }

    dateOfBirth: Date
}