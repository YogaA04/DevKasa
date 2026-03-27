import { signIn } from "@/auth";


const login = async () => {
  "use server"
  await signIn("github", { callbackUrl: "/" })
}

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to DevKasa</h1>
      <button
        onClick={login}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sign In
      </button> 
    </main>
  );
}
