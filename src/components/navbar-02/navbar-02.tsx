import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import CountCartItem from "@/app/(front)/components/CountCartItem";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navbar02Page = async() => {
  const session =await auth.api.getSession({
    headers: await headers() //get user data
  });
  return (
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
          </div>

          <div className="flex items-center gap-3"> 
          <Link href = "/cart">
            <Badge className="p-2 text-sm"><ShoppingBasket /> <CountCartItem />item (s)</Badge>
          </Link>
          {
            session && (
              <>
                <Button className="bg-purple-400 hover:bg-purple-200" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <div className="flex items-center">
                  Hello, {session.user.name}
                </div>
              </>
            )
          }

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar02Page;
