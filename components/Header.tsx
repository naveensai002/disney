import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
  return (
    <header className="flex justify-between top-0 items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 fixed w-full z-20">
      <Link href="/">
        <Image
          src="/disney.png"
          alt="Disney logo"
          width={120}
          height={100}
          className=" mr-10 cursor-pointer invert-0 dark:invert"
        />
      </Link>

      <div className="flex space-x-2 items-center">
        {/* GenreDropDown*/}

        <GenreDropdown />
        {/* SearchInput */}
        <SearchInput />

        {/* ThemeToggler */}
        <ThemeToggler />
        {/* Avatar */}
      </div>
    </header>
  );
}

export default Header;
