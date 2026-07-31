"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const locale = searchParams.get("lang") || "en";

  const changeLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLocale = e.target.value;

    const params = new URLSearchParams(searchParams.toString());

    params.set("lang", newLocale);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <label htmlFor="language-switcher" className="sr-only">
        Select language
      </label>

      <select
        id="language-switcher"
        value={locale}
        onChange={changeLanguage}
        className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white outline-none backdrop-blur"
      >
        <option value="en" className="text-black">
          English
        </option>

        <option value="hi" className="text-black">
          हिन्दी
        </option>
      </select>
    </>
  );
}