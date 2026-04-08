# Sanity Notes
- We need to implement sanity into the project and allow the client to update data on their own. Here is the process by which I think we should go about this (to my knowledge and understanding).
1) We need to know what parts the client may want to update on their own after we hand off the website. Do they want to update the calendar? Dancers? Upcoming events? What data do we have that stays static (the colors/design, the nav bar)
2) For the parts that the clients need to update, how would it look like? What do our figma wireframes say for this updatable content
3) We need to make the sanity schemas, etc. We need to interact with its APIs and add those features to our website and prepare sanity/our website for that

The following is some output i got from perplexity.ai, this provides a general outline for the flow/steps we need to take, but we do need to do stuff like schemas on our own since it is dependent on what the client needs.


Yes—Sanity is a very good fit for this setup. You’d use Next.js for the public website, and Sanity as the content editor/admin layer so the dance studio owner can update events, announcements, classes, and calendar items without touching code.

## Recommended setup

Build the site in two parts:

- **Next.js frontend**: homepage, about pages, class schedule, event listings, contact page, etc.
- **Sanity Studio**: the admin interface where the owner edits content through forms, not code.

That means the owner logs into Sanity Studio, changes content like “Spring Recital” or “Holiday Closure,” and your Next.js site reads that content and displays it live or on refresh.

## What to store in Sanity

For a dance school, I’d model your content as separate document types such as:

- `event` for workshops, performances, auditions, recitals.
- `announcement` for temporary homepage banners or news.
- `class` for weekly classes, levels, instructors, times.
- `page` for editable rich text pages like About or Policies.
- `siteSettings` for phone number, address, social links, and hero text.

This structure makes the site easy to maintain because the owner edits content in the right place instead of updating hardcoded text in Next.js.

## How the flow works

The practical flow is:

1. You build the layout and components in Next.js.
2. You define Sanity schemas for each content type.
3. You fetch Sanity content into your pages with GROQ queries.
4. You set up Sanity Studio for the owner to log in and edit content.
5. You deploy both the site and the studio, and optionally connect preview/draft editing.

If the owner changes an event in Sanity, your site updates automatically based on your rendering strategy. For example, homepage announcements can be fetched server-side so they stay current, while page content can be statically generated and revalidated when content changes.

## Best implementation approach

The cleanest approach for your case is:

- Use **Sanity Studio embedded in your project** or as a separate route, like `/studio`.
- Use **Next.js App Router** and fetch content from Sanity using `next-sanity`.
- Add **preview/draft mode** so the owner can see unpublished changes before they go live.
- Use **structured schemas** rather than one giant rich text blob, especially for events and schedules.

For a dance school, I’d especially recommend making `event` and `class` highly structured, with fields like date, time, location, instructor, audience level, and registration link. That makes it easy to render calendars, cards, and filtered schedules cleanly on the frontend.

## Owner editing experience

Sanity Studio can give the owner a non-technical editing experience similar to a CMS dashboard. Sanity’s visual editing tools and Presentation workflow are designed so editors can see content in context and jump from the page preview to the source document.

A good setup for the owner would be:

- Login to Sanity Studio.
- Edit “Upcoming Events” and “Announcements.”
- Save changes.
- See the Next.js site update after publish, or instantly in preview mode.

## Suggested first build

Start with these steps:

1. Install Sanity in your Next.js app.
2. Create schemas for `event`, `announcement`, and `siteSettings`.
3. Build frontend components that query and render those documents.
4. Add a Studio route or separate Sanity project for the owner.
5. Configure image handling, drafts, and revalidation.
6. Add roles so the owner only edits content, not code.

That will give you a maintainable CMS-backed dance studio site where you control the design once, and the owner controls the content afterward.

## Practical recommendation

For your use case, I’d keep **layout and design in Next.js** and use **Sanity only for content**. That gives you maximum control over the site frame while still letting the dance studio owner update everything that changes often, like calendars, events, and announcements, without developer help.

Would you like me to outline a concrete Sanity schema design for your dance school site, or show the exact Next.js integration steps?
