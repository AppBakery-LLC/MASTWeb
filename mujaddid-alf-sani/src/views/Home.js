import { Box, Button, Icon, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import Image1 from '../assets/images/banner/slider-1.jpg'
import Image2 from '../assets/images/banner/slider-2.jpg'
import Image3 from '../assets/images/banner/slider-3.jpg'
import Image4 from '../assets/images/banner/slider-4.jpg'
import Image5 from '../assets/images/banner/slider-5.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Feature from '../components/Features'
import Bg1 from '../assets/images/banner/bg1.jpg'
import Bg2 from '../assets/images/banner/bg2.jpg'
import Services from '../components/Services'
import Waiting from '../components/Waiting'
import Cause from '../components/Cause'
import DonatePic from '../assets/images/banner/donatePic.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { GET } from '../utilities/ApiProvider.js'
import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../utilities/customUrls";

export default function Home() {

  let BanImages = [Image1, Image2, Image3, Image4, Image5]
  const [banImages, setBanImages] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  var testimonsilder = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const getSliderImages = async () => {
    setIsLoading(true);
    let photos = await GET(`${baseUrl}/PhotoSlider`,
      { authorization: `Basic ${btoa('admin:admin123')}` })
    console.log(photos);
    setBanImages(photos?.Data)
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }

  useEffect(() => {
    getSliderImages();
  }, [])


  return (
    <Stack
      bgColor={'#fff'}
      w={'100%'}
      color={'#fff'}
    >
      <Stack>
        <Carousel {...testimonsilder}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          stopOnHover={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          {
            isLoading ?
              <Stack 
              w={'100%'}
              direction={'row'}
              alignItems={'center'}
              justifyContent={'center'}  
            >
                <Spinner color="#000" />
              </Stack>
              :
              banImages?.length > 0 ?
                banImages?.map((v, i) =>
                  <div
                    key={i}
                    style={{ position: 'relative' }}
                  >
                    <Image
                      src={v.Image}
                      w={'80%'}
                      height={{ base: '265px', md: '500px' }}
                      marginX={'auto'}
                    />
                  </div>
                )
                :
                BanImages?.map((v, i) =>
                  <div
                    key={i}
                    style={{ position: 'relative' }}
                  >
                    <Image
                      src={v}
                      w={'80%'}
                      height={{ base: '265px', md: '500px' }}
                      marginX={'auto'}
                    />
                  </div>
                )
          }

        </Carousel>
      </Stack>
      <Stack
        paddingY={{ base: '40px', md: '80px' }}
      >
        <Feature />
      </Stack>
      <Stack
        paddingY={{ base: '40px', md: '80px' }}
        backgroundImage={Bg1}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        bgAttachment={'fixed'}
      >
        <Services />
      </Stack>
      <Stack>
        <Cause />
      </Stack>
      <Stack
        paddingTop={'80px'}
        backgroundImage={Bg2}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        bgAttachment={'fixed'}
        height={'850px'}
        marginBottom={{ base: '0px !important', md: '200px !important' }}
      >
        <Waiting />
        <Image w={{ base: '100%', md: '60%' }} position={'relative'} left={'50%'} transform={'translate(-50%, 100px)'} src={DonatePic} />
        <a href="https://www.facebook.com/watch/?v=1547377895470368&ref=sharing" target={'_blank'}>
          <Icon as={AiFillPlayCircle} fontSize={'102'} color={'#fff'} position={'relative'} left={'50%'} transform={{ base: 'translate(-50%, -50px)', md: 'translate(-50%, -200px)' }} />
        </a>
      </Stack>
    </Stack>
  );
}