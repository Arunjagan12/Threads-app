'use client';
import { OrganizationSwitcher, useAuth } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Topbar() {
  const { signOut } = useAuth();
  const router = useRouter();
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/logo.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
        <button
          onClick={async () => {
            await signOut();
            router.push("/sign-in");
          }}
          className='flex cursor-pointer gap-4 p-4'
        >
          <img
            src='/assets/logout.svg'
            alt='logout'
            width={24}
            height={24}
          />
          <p className='text-light-2 max-lg:hidden'>Logout</p>
        </button>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;