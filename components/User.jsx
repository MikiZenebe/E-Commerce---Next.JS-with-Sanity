/* eslint-disable @next/next/no-img-element */
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function User() {
  const route = useRouter();
  const { user } = useUser;

  if (!user) {
    return (
      <Link href="/api/auth/login">
        <FaUserCircle />
        <h3>Profile</h3>
      </Link>
    );
  }

  return (
    <div onClick={() => route.push("/profile")}>
      <img src={user.picture} alt="" />
      <h3>{user.name}</h3>
    </div>
  );
}
