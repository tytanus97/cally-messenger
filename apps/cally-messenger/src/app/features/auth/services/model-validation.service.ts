import { create, enforce, omitWhen, only, test } from 'vest';
import { RegisterUser } from '../models/register-user.model';

export const userValidation = create((model: RegisterUser,field: string) => {
    test("username","Username cannot be empty",() => {
        enforce(model.username).isNotEmpty()
    })

    test("passwords.password","Password cannot be empty",() => {
        enforce(model.passwords.password).isNotEmpty()
    })

    test("passwords.confirmPassword","Password cannot be empty",() => {
        enforce(model.passwords.confirmPassword).isNotEmpty()
    })

    omitWhen(!model.passwords.password?.length || !model.passwords.confirmPassword?.length,() => {
        test("passwords.confirmPassword","Passwords should match",() => {
            enforce(model.passwords.password).equals(model.passwords.confirmPassword)
        })
    })
})