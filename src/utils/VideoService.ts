import * as Lodash from "lodash";

export enum VideoService {
  None = 0,
  YouTube = 1,
  Vimeo = 2,
}

export interface VideoContent {
  uid: string;
  name: string;
  service: VideoService;
  url: string;
  thumbnailImage: string;
  tags: Set<string>;
  description: string;
}

export class Video {
  private _content: VideoContent = {
    uid: "",
    name: "No Title",
    service: VideoService.None,
    url: "",
    thumbnailImage: "",
    tags: new Set(),
    description: "",
  };

  constructor(content: Partial<VideoContent>) {
    this._content = Lodash.cloneDeep({ ...this._content, ...content });
  }

  public get content(): Readonly<VideoContent> {
    return this._content;
  }

  public equals(other: Video): boolean {
    const equalsProps =
      other.content.uid === this.content.uid &&
      other.content.name === this.content.name &&
      other.content.service === this.content.service &&
      other.content.url === this.content.url &&
      other.content.thumbnailImage === this.content.thumbnailImage &&
      other.content.description === this.content.description;
    if (!equalsProps) {
      return false;
    }

    let equalsTags = other.content.tags.size === this.content.tags.size;
    if (!equalsTags) {
      return false;
    }

    for (const otherTag of other.content.tags.values()) {
      let equalsTag = false;
      for (const thisTag of this.content.tags.values()) {
        if (thisTag === otherTag) {
          equalsTag = true;
        }
      }
      if (equalsTag === false) {
        return false;
      }
    }

    return equalsTags;
  }
}
