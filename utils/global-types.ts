type videoThumbnail = {
    url: string,
    width: number,
    height: number,
}
export type devotionalVideo = {
    id: string,
    title: string,
    description: string,
    thumbnails: {
        default: videoThumbnail,
        standard: videoThumbnail
    }
}
export type cardGridRenderProps = {
    category :string,
    title: string,
    image: string
    link: string
}

export interface youtubeResponse {
    kind: string;
    etag: string;
    items?: (ItemsEntity)[] | null;
  }
  export interface ItemsEntity {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
  }
   interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceId;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
  }
   interface Thumbnails {
    default: videoThumbnail;
    medium: videoThumbnail;
    high: videoThumbnail;
    standard: videoThumbnail;
    maxres: videoThumbnail;
  }
   interface ResourceId {
    kind: string;
    videoId: string;
  }
  
