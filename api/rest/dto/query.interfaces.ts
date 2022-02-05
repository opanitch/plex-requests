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
    size: number;
    allowSync: boolean;
    art: string;
    identifier: string;
    librarySectionID: number;
    librarySectionTitle: string;
    librarySectionUUID: string;
    mediaTagPrefix: string;
    mediaTagVersion: number;
    thumb: string;
    title1: string;
    title2: string;
    viewGroup: string;
    viewMode: number;
    Metadata: MediaMetaData[];
  };
}

export interface MediaMetaData {
  ratingKey: string;
  key: string;
  guid: string;
  studio: string;
  type: string;
  title: string;
  contentRating: string;
  summary: string;
  rating: number;
  audienceRating: number;
  year: number;
  tagline: string;
  thumb: string;
  art: string;
  duration: number;
  originallyAvailableAt: string;
  addedAt: number;
  updatedAt: number;
  audienceRatingImage: string;
  primaryExtraKey: string;
  ratingImage: string;
  Media: MediaType[];
  Genre: GenreType[];
  Director: DirectorType[];
  Writer: WriterType[];
  Country: CountryType[];
  Role: RoleType[];
}

export interface MediaType {
  id: number;
  duration: number;
  bitrate: number;
  width: number;
  height: number;
  aspectRatio: number;
  audioChannels: number;
  audioCodec: string;
  videoCodec: string;
  videoResolution: string;
  container: string;
  videoFrameRate: string;
  videoProfile: string;
  Part: PartType[];
}

export interface PartType {
  id: number;
  key: string;
  duration: number;
  file: string;
  size: number;
  container: string;
  indexes: string;
  videoProfile: string;
}

export interface QueryPaginationResponse {
  MediaContainer: {
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
    Directory: TitlePagination[];
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
