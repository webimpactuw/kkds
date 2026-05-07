// https://www.sanity.io/docs/structure-builder-cheat-sheet
//
// Singletons (siteSettings) get a custom list item that opens the single
// document directly. All other document types use the default listing.

const SINGLETON_TYPES = new Set(['siteSettings'])

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !SINGLETON_TYPES.has(listItem.getId()),
      ),
    ])
