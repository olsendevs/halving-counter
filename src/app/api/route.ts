import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  id: string;
  title: string;
  description: string;
  thumb: string;
};

export async function GET() {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`,
  );
  const lastVideoData = response.data.items[0].snippet;

  return Response.json({
    id: response.data.items[0].id.videoId,
    title: lastVideoData.title,
    description: lastVideoData.description,
    thumb: lastVideoData.thumbnails.medium.url,
  });
}
