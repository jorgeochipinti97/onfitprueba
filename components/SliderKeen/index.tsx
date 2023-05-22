import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import { Box } from "@mui/system";
import Image from "next/image";

const animation = { duration: 45000, easing: (t: number) => t }


export const SliderKeen = () => {
  const [ref] = useKeenSlider<HTMLDivElement>();


  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide ">
        <Box>
          <Image width={1800-200} height={1000-200} src='/slider1.png' alt='' />
        </Box>
      </div>
      <div className="keen-slider__slide ">
        <Box>
          <Image width={1800-200} height={1000-200} src='/slider2.png' alt='' />
        </Box>
      </div>

    </div>
  );
};
