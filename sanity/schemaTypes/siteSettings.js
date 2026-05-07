import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one of these should ever exist.
  // The structure builder enforces this; see sanity/structure.js.
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Kalamandapam Kuchipudi Dance School',
    }),

    // Hero / landing section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'The large script header on the home page (e.g. "Kalamandapam").',
      group: 'home',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'home',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'home',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      group: 'home',
    }),
    defineField({
      name: 'missionStatement',
      title: 'Mission / Welcome Statement',
      type: 'text',
      rows: 6,
      group: 'home',
    }),

    // Classes page schedule
    defineField({
      name: 'scheduleImage',
      title: 'Schedule / Calendar Image',
      type: 'image',
      description: 'Shown at the top of the Classes page. Falls back to /schedule-default.png.',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
      group: 'classes',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
      description: 'Default "Register" / "Enroll" button destination.',
      group: 'classes',
    }),

    // Contact + footer
    defineField({
      name: 'address',
      title: 'Studio Address',
      type: 'text',
      rows: 2,
      group: 'contact',
    }),
    defineField({
      name: 'mapImage',
      title: 'Map Image',
      type: 'image',
      description: 'Shown next to the contact form on the home page.',
      options: { hotspot: true },
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'text',
      rows: 3,
      group: 'contact',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'Email', value: 'email' },
                  { title: 'Other', value: 'other' },
                ],
              },
            }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
      group: 'contact',
    }),
  ],
  groups: [
    { name: 'home', title: 'Home Page' },
    { name: 'classes', title: 'Classes Page' },
    { name: 'contact', title: 'Contact / Footer' },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
