import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Avatar from "./Avatar";
import { Suspense, use } from "react";

const Profile = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="cursor-pointer">
      {!session?.user && <Link href={"/auth/login"}>Sign in</Link>}
      {session?.user && (
        <Suspense fallback={<div>Loading...</div>}>
          <Avatar />
        </Suspense>
      )}
    </div>
  );
};

export default Profile;
