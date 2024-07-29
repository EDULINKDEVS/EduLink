import IntroPage from "@/components/home/IntroPage";
import Employee from "@/components/userpanel/Employee";
import Employer from "@/components/userpanel/Employer";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import * as React from "react";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <main>
      {user ? (
        user.label === 'employee' ? <Employee /> : <Employer />
      ) : (
        <IntroPage />
      )}
    </main>
  );
}
