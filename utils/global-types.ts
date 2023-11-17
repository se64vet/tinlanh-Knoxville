export type devotionalVideo = {
    id: string,
    title: string,
    description: string,
    thumbnails: {
        default: videoThumbnail,
        standard: videoThumbnail
    }
}

type videoThumbnail = {
    url: string,
    width: number,
    height: number,
}