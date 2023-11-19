import { devotionalVideo } from '@/utils/global-types'
import {NextResponse} from 'next/server'
import { cache } from 'react'



// get all videos from youtube playlist
export const GET = async (req:Request) => {
    const url: string = process.env.YT_API_URL || "";
    const getDevotionalVideos = cache(async (url : string) => {
        const response = await fetch(url, {cache: "force-cache"})
        const data = await response.json();
        return data;
    })
    try {
        // get raw response from youtube v3 API
        const data = await getDevotionalVideos(url);

        // fitering unavailable videos
        const today = new Date(Date.now()).getDate()
        const filteredData = data!.items.filter((item:any) => (item.snippet.thumbnails.default !== undefined))

        // extract fields from response for cleaner data return
        const items:devotionalVideo[] = filteredData.map((item:any) => (
            {      
            title: item.snippet.title,
            id: item.snippet.resourceId.videoId,
            description: item.snippet.description,
            thumbnails: {
                default: {
                    url: item.snippet.thumbnails.default.url,
                    width: item.snippet.thumbnails.default.width,
                    height: item.snippet.thumbnails.default.height
                },
                standard: {
                    url: item.snippet.thumbnails.standard.url,
                    width: item.snippet.thumbnails.standard.width,
                    height: item.snippet.thumbnails.standard.height
                }
            }
        })
        );

        return NextResponse.json(items);
    }
    catch(e) {
        console.log(e);
    }
}

