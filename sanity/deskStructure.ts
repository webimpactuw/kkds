import type { StructureBuilder } from "sanity/structure";

const SINGLETONS = [
  { id: "siteSettings", title: "Site Settings", schema: "siteSettings" },
  { id: "aboutPage", title: "About Page", schema: "aboutPage" },
  { id: "classSchedule", title: "Class Schedule", schema: "classSchedule" },
] as const;

export function deskStructure(S: StructureBuilder) {
  const singletonItems = SINGLETONS.map(({ id, title, schema }) =>
    S.listItem()
      .title(title)
      .id(id)
      .child(S.document().schemaType(schema).documentId(id)),
  );

  return S.list()
    .title("Content")
    .items([
      ...singletonItems,
      S.divider(),
      S.documentTypeListItem("instructor").title("Instructors"),
      S.documentTypeListItem("classLevel").title("Class Levels"),
      S.documentTypeListItem("classOffering").title("Class Offerings"),
      S.documentTypeListItem("scheduleBreak").title("Schedule Breaks"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("workshop").title("Workshops"),
      S.documentTypeListItem("galleryImage").title("Gallery"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("announcement").title("Announcements"),
    ]);
}
