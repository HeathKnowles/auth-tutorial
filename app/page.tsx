import Head from "next/head";
import { Button } from "@/components/ui/button"; // Assuming this is the correct path to your Button component
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-sky-400 to-blue-800 flex flex-col items-center justify-center">
      <Head>
        <title>Simple Authentication Service</title>
        <meta name="description" content="A simple authentication service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center p-10">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
          )}>
          🔐Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign-in
            </Button>
          </LoginButton> 
        </div>
      </main>
    </div>
  );
}
