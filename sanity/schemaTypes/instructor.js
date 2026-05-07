import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'instructor',
  title: 'Instructor / Dancer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Founder', value: 'founder' },
          { title: 'Youth Instructor', value: 'youth' },
          { title: 'Teaching Assistant', value: 'ta' },
          { title: 'Featured Dancer', value: 'dancer' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within the same role.',
      initialValue: 100,
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Role then Order',
      name: 'roleOrderAsc',
      by: [
        { field: 'role', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
    prepare({ title, subtitle, media }) {
      const roleLabels = {
        founder: 'Founder',
        youth: 'Youth Instructor',
        ta: 'Teaching Assistant',
        dancer: 'Featured Dancer',
      }
      return { title, subtitle: roleLabels[subtitle] || subtitle, media }
    },
  },
})
