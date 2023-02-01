import { Box, Container, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import Logo from '../../assets/images/logo.png'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import GooglePlay from '../../assets/images/footer/01.png'
import ApplePlay from '../../assets/images/footer/02.png'
import { HiOutlineMail, HiOutlinePhone, HiLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <Stack>
      <Stack
        backgroundColor={'#374455'}
        paddingY={'40px'}
      >
        <Container maxW={'7xl'}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'space-between' }}
            alignItems={'center'}
          >
            <Box
              display={{ base: 'none', md: 'block' }}
            >
              <Image src={Logo} w={'100%'} />
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={2}
              className="socialLinks"
            >
              <a href='/#' ><Icon as={FaFacebookF} /></a>
              <a href='/#' ><Icon as={FaTwitter} /></a>
              <a href='/#' ><Icon as={FaGooglePlusG} /></a>
              <a href='/#' ><Icon as={FaLinkedinIn} /></a>
              <a href='/#' ><Icon as={FaInstagram} /></a>
            </Box>
            <Box
              marginTop={{ base: '30px !important', md: '0px' }}
              display={'flex'}
              alignItems={'center'}
              gap={8}
            >
              <a href='/#'><Image src={GooglePlay} /></a>
              <a href='/#'><Image src={ApplePlay} /></a>
            </Box>
          </Stack>
        </Container>
      </Stack>
      <Stack
        backgroundColor={'#2F3C4C'}
        marginTop={'0 !important'}
        paddingTop={'80px'}
      >
        <Container maxW={'7xl'}>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            spacing={0}
          >
            <Box
              w={{ base: '48%', md: '24%' }}
              paddingBottom={'50px'}
            >
              <Heading
                color={'#fff'}
                fontWeight={'500'}
                pb={'30px'}
                fontSize={{ base: '24px', md: '28px' }}
              >Contact Us (UK)</Heading>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Icon mb={'-3px'} mr={'8px'} as={HiLocationMarker} />20 Gunthorpe Drive,Sherwood Nottingham, NG5 3DW</Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Icon mb={'-3px'} mr={'8px'} as={HiOutlineMail} />info@mujaddidalifsani.com</Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Icon mb={'-3px'} mr={'8px'} as={HiOutlinePhone} />00447972377903</Text>
            </Box>
            <Box
              w={{ base: '48%', md: '24%' }}
              paddingBottom={'50px'}
            >
              <Heading
                color={'#fff'}
                fontWeight={'500'}
                pb={'30px'}
                fontSize={{ base: '24px', md: '28px' }}
              >Contact Us (Pak)</Heading>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Icon mb={'-3px'} mr={'8px'} as={HiLocationMarker} />House No 83 sector 4f, mujhaid colony Orangi town S.I.T.E Karachi</Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Icon mb={'-3px'} mr={'8px'} as={HiOutlineMail} />info@mujaddidalifsani.com</Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Icon mb={'-3px'} mr={'8px'} as={HiOutlinePhone} />02136740009, 03002230155</Text>
            </Box>
            <Box
              w={{ base: '48%', md: '24%' }}
              paddingBottom={'50px'}
            >
              <Heading
                color={'#fff'}
                fontWeight={'500'}
                pb={'30px'}
                fontSize={{ base: '24px', md: '28px' }}
              >Company</Heading>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Link to={'/'}>Home</Link></Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Link to={'/'}>About Us</Link></Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Link to={'/'}>Our Services</Link></Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Link to={'/'}>Future Projects</Link></Text>
            </Box>
            <Box
              w={{ base: '48%', md: '24%' }}
              paddingBottom={'50px'}
            >
              <Heading
                color={'#fff'}
                fontWeight={'500'}
                pb={'30px'}
                fontSize={{ base: '24px', md: '28px' }}
              >Quick Links</Heading>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Link to={'/'}>News</Link></Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Link to={'/'}>Donation</Link></Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Link to={'/'}>Contact Us</Link></Text>
              <Text fontSize={{ base: '14px', md: '15px' }} color={'#fff'} pb={'15px'}><Link to={'/'}>Privacy Policy</Link></Text>
            </Box>
          </Stack>
          <Stack
            paddingY={'35px'}
            borderTop={'1px solid #fff'}
          >
            <Text fontSize={{ base: '14px', md: '15px' }}
              color={'#fff'}
              textAlign={'center'}
            >&copy; 2023 Mujaddid Alf Sani. All Rigths Reserved.</Text>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  )
}
