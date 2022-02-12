export interface CountryType {
  tag: string;
}

export interface DirectorType {
  tag: string;
}

export interface GenreType {
  tag: string;
}

export interface MediaByLetterResponse {
  MediaContainer: {
    Metadata: MediaMetaData[];
    allowSync: boolean;
    art: string;
    identifier: string;
    librarySectionID: number;
    librarySectionTitle: string;
    librarySectionUUID: string;
    mediaTagPrefix: string;
    mediaTagVersion: number;
    size: number;
    thumb: string;
    title1: string;
    title2: string;
    viewGroup: string;
    viewMode: number;
  };
}

export interface MediaMetaData {
  Country: CountryType[];
  Director: DirectorType[];
  Genre: GenreType[];
  Media: MediaType[];
  Role: RoleType[];
  Writer: WriterType[];
  addedAt: number;
  art: string;
  audienceRating: number;
  audienceRatingImage: string;
  contentRating: string;
  duration: number;
  guid: string;
  key: string;
  originallyAvailableAt: string;
  primaryExtraKey: string;
  rating: number;
  ratingImage: string;
  ratingKey: string;
  studio: string;
  summary: string;
  tagline: string;
  thumb: string;
  title: string;
  type: string;
  updatedAt: number;
  year: number;
}

export interface MediaType {
  Part: PartType[];
  aspectRatio: number;
  audioChannels: number;
  audioCodec: string;
  bitrate: number;
  container: string;
  duration: number;
  height: number;
  id: number;
  videoCodec: string;
  videoFrameRate: string;
  videoProfile: string;
  videoResolution: string;
  width: number;
}

export interface PartType {
  container: string;
  duration: number;
  file: string;
  id: number;
  indexes: string;
  key: string;
  size: number;
  videoProfile: string;
}

export interface QueryPaginationResponse {
  MediaContainer: {
    Directory: TitlePagination[];
    allowSync: boolean;
    art: string;
    content: string;
    identifier: string;
    mediaTagPrefix: string;
    mediaTagVersion: number;
    size: number;
    thumb: string;
    title1: string;
    title2: string;
    viewGroup: string;
    viewMode: number;
  };
}

export interface RoleType {
  tag: string;
}

export interface TitlePagination {
  key: string;
  size: number;
  title: string;
}

export interface WriterType {
  tag: string;
}
