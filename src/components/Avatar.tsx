"use client";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Avatar = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const logout = async () => {
    console.log();
    await supabase.auth.signOut();
    router.refresh();
  };
  return <UserCircleIcon className="h-12" onClick={logout} />;
};

export default Avatar;
