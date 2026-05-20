import Image from 'next/image'
import Button from '../components/Button'
import Dropdown from '../components/Dropdown'
import Header from '../components/Header'
import EmailForm from '../components/EmailForm'
import { sanityFetch } from '../sanity/lib/live'
import { urlFor } from '../sanity/lib/image'

import {
  CLASSES_QUERY,
  FAQS_QUERY,
  FEATURED_EVENTS_QUERY,
  SITE_SETTINGS_QUERY,
} from '../sanity/lib/queries'

export default async function Home() {
  const [
    { data: settings },
    { data: classes },
    { data: faqs },
    { data: events },
  ] = await Promise.all([
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
    sanityFetch({ query: CLASSES_QUERY }),
    sanityFetch({ query: FAQS_QUERY }),
    sanityFetch({ query: FEATURED_EVENTS_QUERY }),
  ])

  const heroTitle = settings?.heroTitle || 'Kalamandapam'
  const heroSubtitle = settings?.heroSubtitle || 'Kuchipudi Dance School'
  const heroDescription =
    settings?.heroDescription ||
    'Discover the vibrant world of Kuchipudi dance at our studio in Sammamish, Washington.'
  const heroImageSrc = settings?.heroImage
    ? urlFor(settings.heroImage).width(900).fit('max').url()
    : '/landingImage.png'
  const mission =
    settings?.missionStatement ||
    'At Kalamandapam, we believe in the power of dance to inspire, educate, and connect people. Our experienced instructors are passionate about sharing their knowledge and expertise, ensuring that each student recieves personalized attention to develop their skills, grace, and confidence. Through a blend of traditional techniques and modern teaching methods, we create a dyanmic learning experience that celebrate the heritage of Kuchipudi while encouraging individual expression.'
  const mapImageSrc = settings?.mapImage
    ? urlFor(settings.mapImage).width(1100).fit('max').url()
    : '/locationMap.png'

  const classList = classes?.length ? classes : DEFAULT_CLASSES
  const faqList = faqs?.length ? faqs : DEFAULT_FAQS
  const eventList = events?.length ? events : null

  return (
    <section className="bg-[#FFFAEE] text-black font-normal">
      {/* landing page */}
      <section className="flex min-h-screen flex-col items-center justify-between bg-[linear-gradient(270deg,#FFFFFF_22.69%,rgba(255,201,67,0.9)_100%)] p-10 md:flex-row">
        <div className="w-full md:ml-20 md:w-1/2 md:pr-10 text-center md:text-left">
          <h1 className="text-[#830033] font-[Oleo_Script_Swash_Caps] font-bold text-[96px] mb-1">
            {heroTitle}
          </h1>
          <h2 className="text-[48px] mb-4">{heroSubtitle}</h2>
          <p className="text-[32px] leading-relaxed mb-8">{heroDescription}</p>
          <Button text="Learn More" link="/about" />
        </div>

        <div className="mt-8 flex h-full w-[50vh] justify-center md:mt-0 md:w-1/2 md:justify-end">
          <img
            src={heroImageSrc}
            alt="Kuchipudi dancer"
            className="h-full object-contain"
          />
        </div>
      </section>

      {/* mission statement */}
      <div className="mx-auto flex h-107 items-center justify-center gap-2.5 p-10">
        <p className="text-center text-[32px] leading-12">{mission}</p>
      </div>

      {/* classes offered */}
      <section className="bg-[#FFE299] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
          <div className="mb-12">
            <Header>Classes Offered</Header>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
            {classList.slice(0, 3).map((c) => (
              <ClassCard key={c._id || c.title} item={c} />
            ))}
          </div>

          <div className="mt-12">
            <Button text="Enroll Now" link="/classes" />
          </div>
        </div>
      </section>

      {/* upcoming events */}
      <section className="flex flex-col items-center justify-center bg-[#FFFAEE] py-20">
        <div className="mb-22.25">
          <Header>Upcoming Events</Header>
        </div>

        <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-13 px-6 md:flex-row">
          {eventList ? (
            <EventsCollage events={eventList} />
          ) : (
            <>
              {/* placeholder layout shown until events are added in Sanity */}
              <div className="h-149.25 w-159.25 rounded-md bg-white" />
              <div className="flex w-120.25 flex-col items-start gap-6.25">
                <div className="h-71.5 rounded-md bg-white" />
                <div className="h-71.5 rounded-md bg-white" />
              </div>
            </>
          )}
        </div>

        <div className="mt-22.25 flex justify-center">
          <Button text="View All" link="/events" />
        </div>
      </section>

      {/* get in touch */}
      <section className="flex justify-between gap-16 bg-[#FFE299] px-16 py-31 md:flex-row items-center">
        <div className="flex w-full flex-col gap-9">
          <h2 className="text-left font-[Rambla] text-[64px] font-bold">Get In Touch</h2>

          <EmailForm />
        </div>

        <img
          src={mapImageSrc}
          alt="KKDS studio location map"
          className="h-175 w-136.25 object-contain"
        />
      </section>

      {/* FAQ */}
      <div className="flex gap-20 bg-[#FFFAEE] px-[89.5px] py-32">
        <div className="w-1/3">
          <h2 className="text-[64px] font-bold leading-[1.1]">
            Frequently <br />
            Asked <br />
            <span className="text-[#830033]">Questions</span>
          </h2>
        </div>

        <div className="w-2/3">
          {faqList.map((f) => (
            <Dropdown
              key={f._id || f.question}
              question={f.question}
              answer={f.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ClassCard({ item }) {
  const imgSrc = item.image
    ? urlFor(item.image).width(800).height(660).fit('crop').url()
    : '/placeholder.jpg'
  const altText = item.image?.alt || `${item.title} class`
  return (
    <div className="flex transform flex-col overflow-hidden rounded-t-[10px] bg-white shadow-md transition duration-300 hover:scale-105">
      <div className="relative h-82.25">
        <Image src={imgSrc} alt={altText} fill className="object-cover" />
      </div>
      <div className="flex h-14.75 items-center justify-center bg-[#830033] p-2.5">
        <p className="text-[32px] font-bold text-white">{item.title}</p>
      </div>
      <div className="h-62.75 rounded-b-[10px] bg-[#FFFAEE] p-6 text-[20px] text-gray-700">
        {item.shortDescription || item.description || ''}
      </div>
    </div>
  )
}

function EventsCollage({ events }) {
  // Mirrors the Figma layout: one large feature on the left,
  // up to two smaller stacked tiles on the right.
  const [feature, ...rest] = events
  const sideEvents = rest.slice(0, 2)
  return (
    <>
      <EventTile event={feature} className="h-149.25 w-159.25" />
      <div className="flex w-120.25 flex-col items-start gap-6.25">
        {sideEvents.map((e) => (
          <EventTile key={e._id} event={e} className="h-71.5 w-full" />
        ))}
      </div>
    </>
  )
}

function EventTile({ event, className }) {
  const imgSrc = event?.image
    ? urlFor(event.image).width(1200).fit('max').url()
    : null
  return (
    <div className={`relative overflow-hidden rounded-md bg-white ${className}`}>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={event.image?.alt || event.title}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-lg font-bold text-white">{event.title}</p>
        {event.date && (
          <p className="text-sm text-white/90">
            {new Date(event.date).toLocaleDateString(undefined, {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        )}
      </div>
    </div>
  )
}

const DEFAULT_CLASSES = [
  {
    _id: 'default-beginner',
    title: 'Beginner',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    _id: 'default-intermediate',
    title: 'Intermediate',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    _id: 'default-advanced',
    title: 'Advanced',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const DEFAULT_FAQS = [
  {
    _id: 'default-faq-1',
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    _id: 'default-faq-2',
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Detailed answer about classes, schedule, or dress code goes here.',
  },
  {
    _id: 'default-faq-3',
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Another detailed answer for your students.',
  },
  {
    _id: 'default-faq-4',
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Final question example.',
  },
]
