import Image from 'next/image'
import Link from 'next/link'
import { sanityFetch } from '../../sanity/lib/live'
import { urlFor } from '../../sanity/lib/image'
import { CLASSES_QUERY, SITE_SETTINGS_QUERY } from '../../sanity/lib/queries'

export const metadata = {
  title: 'Classes — Kalamandapam Kuchipudi Dance School',
  description:
    'Beginner, Intermediate, and Advanced Kuchipudi classes at Kalamandapam in Sammamish, WA.',
}

export default async function ClassesPage() {
  const [{ data: classes }, { data: settings }] = await Promise.all([
    sanityFetch({ query: CLASSES_QUERY }),
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
  ])

  const scheduleSrc = settings?.scheduleImage
    ? urlFor(settings.scheduleImage).width(2400).fit('max').url()
    : '/schedule-default.png'
  const scheduleAlt =
    settings?.scheduleImage?.alt || 'Kalamandapam 2025–2026 class schedule'
  const registerHref = settings?.registrationLink || '#register'

  const classList =
    classes && classes.length > 0
      ? classes
      : DEFAULT_CLASSES

  return (
    <section className="bg-[#FFFAEE] text-black">
      {/* Page header */}
      <header className="flex h-[292px] w-full items-center justify-center bg-[#FFE299]">
        <h1 className="text-[72px] font-bold leading-none">Classes</h1>
      </header>

      {/* Schedule / calendar */}
      <section className="flex justify-center px-6 py-16 md:px-20">
        <figure className="w-full max-w-6xl rounded-[10px] bg-white p-4 shadow-md md:p-8">
          <Image
            src={scheduleSrc}
            alt={scheduleAlt}
            width={2400}
            height={1800}
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="h-auto w-full object-contain"
            priority
          />
        </figure>
      </section>

      {/* Class level cards */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 md:px-20">
        {classList.map((c) => (
          <ClassRow key={c._id || c.title} item={c} />
        ))}
      </section>

      {/* Register CTA */}
      <section className="flex justify-center pb-24" id="register">
        <Link
          href={registerHref}
          className="inline-flex h-[75px] items-center justify-center rounded-[15px] bg-[#830033] px-[50px] text-[24px] font-bold text-white transition-transform duration-200 hover:scale-105"
        >
          Register
        </Link>
      </section>
    </section>
  )
}

function ClassRow({ item }) {
  const imgSrc = item.image
    ? urlFor(item.image).width(900).height(900).fit('crop').url()
    : null
  const altText = item.image?.alt || `${item.title} class photo`

  return (
    <article className="flex flex-col items-stretch gap-6 rounded-[20px] bg-[#F2F2F2] p-6 md:flex-row md:gap-[54px] md:p-10">
      <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded-[10px] bg-white md:h-[304px] md:w-[301px]">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, 301px"
            className="object-cover"
          />
        ) : (
          <PlaceholderX />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center gap-6">
        <h2 className="text-[40px] font-bold leading-none md:text-[60px]">
          {item.title}
        </h2>
        <p className="text-[20px] leading-snug tracking-[0.5px] text-black md:text-[28px]">
          {item.description ||
            item.shortDescription ||
            'Class description coming soon.'}
        </p>
      </div>
    </article>
  )
}

// Visual stand-in for the "no image yet" boxes shown in the Figma design
// (the X-through-rectangle placeholder). Used only when no Sanity image exists.
function PlaceholderX() {
  return (
    <svg
      role="img"
      aria-label="Image placeholder"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-full w-full text-black/40"
    >
      <rect x="0" y="0" width="100" height="100" fill="white" stroke="currentColor" strokeWidth="0.5" />
      <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
      <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}

// Used until the Sanity dataset has class documents — keeps the page
// looking right out of the box. Once a `class` document exists, these are
// replaced entirely.
const DEFAULT_CLASSES = [
  {
    _id: 'default-beginner',
    title: 'Beginner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    _id: 'default-advanced',
    title: 'Advanced',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    _id: 'default-intermediate',
    title: 'Intermediate',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
]
