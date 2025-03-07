'use client';

import { useEffect } from 'react';
import ChannelService from './ChannelTalk';

export default function ChannelTalkLoader() {
  useEffect(() => {
    ChannelService.loadScript();

    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_IO_KEY || '', // 여기에 플러그인 키 필요
    });

    return () => {
      ChannelService.shutdown();
    };
  }, []);

  return null;
}
