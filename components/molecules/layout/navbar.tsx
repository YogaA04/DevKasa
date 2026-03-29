import { auth } from "@/auth";
import { SignInButton, SignOutButton } from "@/components/atoms/auth-button";
import Image from "next/image";

export default async function NavBar() {
    const session = await auth()
    console.log(session)
    return (
        <nav className="w-full min-h-12 bg-gray-800 text-white flex items-center justify-between px-5 py-3">
            <h1 className="text-2xl font-bold">DevKasa</h1>

            <div className="flex items-center space-x-4">
                <p>search</p>
            </div>
            <div className="flex items-center space-x-4">
                {session ? (
                    <div className="flex items-center space-x-2">
                        <Image
                            src={session.user?.image || "/default-avatar.png"}
                            alt="User Avatar"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <SignOutButton />
                    </div>
                ) : (
                    <SignInButton />
                )}
            </div>
        </nav>
    )
}