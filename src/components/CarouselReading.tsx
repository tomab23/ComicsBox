import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      className="w-full lg:max-w-3xl md:max-w-lg max-sm:max-w-62 sm:ml-14 max-sm:self-center"
    >
      <CarouselContent>
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
