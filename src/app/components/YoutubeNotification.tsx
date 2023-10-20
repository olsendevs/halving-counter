'use client';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function YoutubeNotification() {
  const { toast } = useToast();
  const [toasted, setToasted] = useState(false);

  const fetchData = async () => {
    await setToasted(true);
    const videoDataResponse = await axios.get(
      `http://localhost:3000//api`,
    );

    const lastVideo = videoDataResponse.data;

    setTimeout(() => {
      toast({
        title: 'Watch now the last news about Bitcoin:',
        description: (
          <a
            href={`https://www.youtube.com/watch?v=${lastVideo.id}`}
            target="_blank"
          >
            <Card className="p-4 cursor-pointer mt-4">
              <CardTitle className="text-xl">
                {lastVideo.title}
              </CardTitle>
              <CardDescription className="text-xs">
                {lastVideo.description}
              </CardDescription>
              <CardContent className="mt-2">
                <Image
                  alt="youtube last video thumb"
                  src={`${lastVideo.thumb}`}
                  width={320}
                  height={180}
                ></Image>
              </CardContent>
            </Card>
          </a>
        ),
      });
    }, 5000);
  };

  if (!toasted) {
    fetchData();
  }

  return <Toaster />;
}
