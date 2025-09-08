import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestList } from "@/models/TestList";
import CardTest from "./CardTest";
import type Test from "@/models/Test";

type Props = {
    list: Test[]
}
const CarouselReading = ({ list } : Props) => {
    
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full lg:max-w-3xl md:max-w-lg max-sm:max-w-xs ml-14"
    >
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
        {list.map((test, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 max-sm:basis-1/1">
            <div className="p-1">
                <CardTest test={test} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselReading;
