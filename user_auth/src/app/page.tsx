// page.tsx from app [base page]

import UserInfo from "@/components/UserInfo"
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";

export default async function HomePage() {
  const authSession = await getServerAuthSession();

  return (  
  <main className="flex items-center justify-center h-screen">
    {authSession?.user && <UserInfo user={authSession?.user} />} 
    {!authSession?.user && ( 
      <div> 
        <Link className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white" href="/auth">
          Authenticate Here!
        </Link> 
      </div>
      
    )}
  </main>
  );
}