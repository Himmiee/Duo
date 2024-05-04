import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="h-20 w-full px-4 sm:px-24 flex justify-between items-center  border-slate-100 border-b-2">
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <Image src="/mainlogo.svg" alt="hangman" height={40} width={40} />
        <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
          {" "}
          Duo{" "}
        </h1>
      </div>
      <div className="flex items-center gap-x-3">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button size="lg" variant="ghost">
              <SignInButton
                mode="modal"
                forceRedirectUrl="/learn"
                signUpFallbackRedirectUrl="/learn"
              />
            </Button>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
