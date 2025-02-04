import React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { signIn } from "@/app/actions/sign-in";
import { signOut } from "@/app/actions/sign-out";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = async () => {
  const session = await auth();

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6  mt-2 ">
      <div className="">
        <h1 className="text-4xl sm:text-3xl font-bold">GitHub Auth</h1>
      </div>

      <div className="Input">
        <Input type="text" placeholder="Enter text..." />
      </div>

      <div className="flex items-center justify-center gap-2">
        {session?.user ? (
          <>
            <h1 className="text-sm">Hi, {session.user.name}</h1>
            <Avatar>
              <AvatarImage src={session.user.image || ""} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <form action={signOut}>
              <Button className="">LogOut</Button>
            </form>
          </>
        ) : (
          <>
            <form action={signIn}>
              <Button className="">LogIn with GitHub</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
