import { auth } from "@/auth";
import { SignInButton, SignOutButton } from "@/components/atoms/auth-button";
import CardSnippets from "@/components/molecules/snippets/card-snippets";
import { FcIdea } from "react-icons/fc";

export default async function Home() {
  const session = await auth();
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <FcIdea className="inline mr-2" />
        React Snippets
      </h1>
      <CardSnippets />
    </div>
  );
}
