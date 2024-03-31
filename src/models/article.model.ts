export interface IMediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface IMedia {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  'media-metadata': IMediaMetadata[];
}

export interface IMediaLegacy {
  xlarge: string;
  xlargewidth: number;
  xlargeheight: number;
}

export interface IHeadLine {
  main: string;
  kicker: string;
  content_kicker: string | null;
  print_headline: string | null;
  name: string | null;
  seo: string | null;
  sub: string | null;
}

export interface IKeyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface IPerson {
  firstname: string;
  middlename: string | null;
  lastname: string;
  qualifier: string | null;
  title: string | null;
  role: string;
  organization: string;
  rank: number;
}

export interface IByline {
  original: string;
  person: IPerson[];
  organization: string | null;
}

export interface IMeta {
  hits: number;
  offset: number;
  time: number;
}

export interface IMultiMedia {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: IMediaLegacy;
  subType: string;
  crop_name: string;
}

export interface IArticleDetails {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: IMultiMedia[];
  headline: IHeadLine;
  keywords: IKeyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: IByline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

export interface IArticle {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: unknown[];
  per_facet: unknown[];
  geo_facet: string[];
  media: IMedia[];
  eta_id: number;
}
