/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  filterKeyword: (state: any) => state.filterKeyword,
  test: (state: any, tagId: string) => state.tags.filter((x: { id: string }) => x.id === tagId)
}
