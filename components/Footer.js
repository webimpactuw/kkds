import Link from 'next/link'
import { sanityFetch } from '../sanity/lib/live'
import { SITE_SETTINGS_QUERY } from '../sanity/lib/queries'

const SOCIAL_LABELS = {
  instagram: 'IG',
  facebook: 'FB',
  youtube: 'YT',
  tiktok: 'TT',
  email: '@',
  other: '•',
}

export default async function Footer() {
  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS_QUERY })

  const hours = settings?.hours
  const address = settings?.address
  const socials = settings?.socialLinks || []

  return (
    <footer className="flex items-center justify-between bg-[#830033] px-16 py-4 text-[#FFFAEE]">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-[#D9D9D9]" />
        <div className="flex flex-col leading-tight">
          <span>Kalamandapam</span>
          <span>Kuchipudi Dance</span>
          <span>School</span>
        </div>
      </div>

      <ul className="flex list-none flex-col gap-0.4">
        <li>
          <Link href="/" className="hover:text-[#FFE299]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-[#FFE299]">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-[#FFE299]">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex flex-col gap-1 text-sm">
        <p>
          <strong>Hours:</strong>
        </p>
        {hours ? (
          <p className="whitespace-pre-line">{hours}</p>
        ) : (
          <p className="opacity-70">—</p>
        )}
        <p>
          <strong>Location:</strong>
        </p>
        {address ? (
          <p className="whitespace-pre-line">{address}</p>
        ) : (
          <p className="opacity-70">[Address]</p>
        )}
      </div>

      <div className="flex gap-4">
        {socials.length > 0 ? (
          socials.map((s, i) => (
            <a
              key={`${s.platform}-${i}`}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.platform}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9D9D9] text-xs font-bold text-[#830033] hover:bg-[#FFE299]"
            >
              {SOCIAL_LABELS[s.platform] || '•'}
            </a>
          ))
        ) : (
          <>
            <div className="h-10 w-10 rounded-full bg-[#D9D9D9]" />
            <div className="h-10 w-10 rounded-full bg-[#D9D9D9]" />
            <div className="h-10 w-10 rounded-full bg-[#D9D9D9]" />
          </>
        )}
      </div>
    </footer>
  )
}
