export interface PageProps<Segment extends string = never> {
  params: Promise<Record<Segment, string>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}
