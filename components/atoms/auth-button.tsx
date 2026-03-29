
import { Button } from "@/components/ui/button"
import { signIn, signOut } from "@/auth";


const logIn = async () => {
    "use server"
    await signIn("github", { callbackUrl: "/" })

}

export function SignInButton() {
    return (
        <Button onClick={logIn}>Sign In</Button>
    )
}

const logOut = async () => {
    "use server"
    await signOut()
}

export function SignOutButton() {
    return (
        <Button onClick={logOut}>Sign Out</Button>
    )
}