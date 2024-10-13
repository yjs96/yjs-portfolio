'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const isClickable = (index: number) => {
  return [1, 2, 8, 12, 16].includes(index);
};

const pageButtons = [
  {
    index: 1,
    urls: [
      {
        name: 'Figma',
        url: 'https://rb.gy/esjs3a',
      },
      {
        name: 'Github',
        url: 'https://www.github.com/YJS96',
      },
    ],
  },
  {
    index: 2,
    urls: [
      {
        name: 'URL',
        url: 'https://rodi-fork.vercel.app/admin/home',
      },
      {
        name: 'Github',
        url: 'https://github.com/yjs96/RODI-backup',
      },
    ],
  },
  {
    index: 8,
    urls: [
      {
        name: 'Youtube',
        url: 'https://youtu.be/8FcnqC_jvRc',
      },
      {
        name: 'Github',
        url: 'https://github.com/We-Eokam/Ea-ra',
      },
    ],
  },
  {
    index: 12,
    urls: [
      {
        name: 'Youtube',
        url: 'https://youtu.be/OFRlNj3RuyI',
      },
      {
        name: 'Github',
        url: 'https://github.com/doHuick/H-uick',
      },
    ],
  },
  {
    index: 16,
    urls: [
      {
        name: 'URL',
        url: 'https://www.pop-ping.com/main/8243591073',
      },
      {
        name: 'Youtube',
        url: 'https://youtu.be/fMUzQTPCpe8',
      },
      {
        name: 'Github',
        url: 'https://github.com/popping-ashe',
      },
    ],
  },
];

export default function Home() {
  const pageNumber = 21;
  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  const openModal = (idx: number) => {
    setOpenDialogIndex(idx);
  };

  const closeModal = () => {
    setOpenDialogIndex(null);
  };

  const getButtonsForIndex = (index: number | null) => {
    if (index === null) return null;
    const buttonData = pageButtons.find((item) => item.index === index);
    if (!buttonData) return null;

    return buttonData.urls.map((url, i) => (
      <Button variant={'outline'} key={i} onClick={() => window.open(url.url, '_blank')} className='relative'>
        <Image
          src={`/icons/${url.name}.png`}
          width={24}
          height={24}
          alt={`${url.name} icon`}
          className='absolute left-2'
        />
        {url.name}
      </Button>
    ));
  };

  return (
    <>
      <div className="w-screen h-screen hidden justify-center items-center overflow-hidden lg:flex">
        <Carousel className="w-[calc(100%-200px)]">
          <CarouselContent>
            {Array.from({ length: pageNumber }, (_, index) => (
              <CarouselItem key={index}>
                <div
                  onClick={() => isClickable(index) && openModal(index)}
                  className={
                    isClickable(index) ? 'cursor-pointer' : 'cursor-default'
                  }
                >
                  <Image
                    src={`/${index}.png`}
                    width="2880"
                    height="1620"
                    alt={index.toString()}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Dialog open={openDialogIndex !== null} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>페이지 이동</DialogTitle>
            <DialogDescription>
              {openDialogIndex !== null && (
                <p>버튼을 클릭하면 해당 페이지로 이동해요</p>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-3 justify-between">
            {getButtonsForIndex(openDialogIndex)}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
