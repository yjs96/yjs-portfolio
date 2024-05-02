import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  const pageNumber = 20;
  return (
    <>
      <div className="w-screen h-screen hidden justify-center items-center overflow-hidden lg:flex">
        <Carousel className="w-[calc(100%-200px)]">
          <CarouselContent>
            {Array.from({ length: pageNumber }, (_, index) => (
              <CarouselItem key={index}>
                <Image
                  src={`/${index}.png`}
                  width="2880"
                  height="1620"
                  alt={index.toString()}
                ></Image>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-screen h-screen flex justify-center items-center overflow-hidden lg:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: pageNumber }, (_, index) => (
              <CarouselItem key={index}>
                <Image
                  src={`/${index}.png`}
                  width="1920"
                  height="1080"
                  alt={index.toString()}
                ></Image>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
