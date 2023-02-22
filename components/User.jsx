/* eslint-disable @next/next/no-img-element */
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function User() {
  const route = useRouter();
  const { user } = useUser;

  if (!user) {
    return (
      <div onClick={() => route.push("/api/auth/login")}>
        <FaUserCircle />
        <h3>Profile</h3>
      </div>
    );
  }

  return (
    <div onClick={() => route.push("/profile")}>
      <img src="" alt="" />
      <h3>user name</h3>
    </div>
  );
}
