import Link from "next/link";
import SearchInput from "./search-input";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href="/">
          <span className="font-sans text-xl font-semibold">kdeavila</span>
        </Link>
      </div>

      <SearchInput />
      <UserButton />
    </nav>
  );
}
