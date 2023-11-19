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

