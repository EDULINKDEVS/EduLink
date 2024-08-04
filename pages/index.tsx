import IntroPage from "@/components/home/IntroPage";
import { useAuth } from "@/context/AuthContext";
import * as React from "react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import UserPanel from "@/components/UserPanel";

export default function Home() {
  const authContext = useAuth();
  const registerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/#register") {
      registerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router]);

  return (
    <main>
      {authContext.user ? (
        authContext.user === 'employee' ? <UserPanel type="employee" /> : <UserPanel type="employer" />
      ) : (
        <IntroPage registerRef={registerRef} />
      )}
    </main>
  );
}
