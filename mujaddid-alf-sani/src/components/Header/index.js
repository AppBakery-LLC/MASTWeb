import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Tag,
  TagLeftIcon,
  TagLabel,
  HStack,
  StackDivider
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from '../../assets/images/logo.png';
import { HiOutlineMail, HiOutlinePhone, HiChevronDown } from 'react-icons/hi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import AuditReport2015 from '../../assets/images/reports/AuditReport2015.pdf'
import { GET } from '../../utilities/ApiProvider';
import { baseUrl } from '../../utilities/customUrls.js'

export default function Header() {
  const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();
  const [TopHeadLinks, setTopHeadLinks] = useState([FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram])
  const [TopHeadLinkUrl, setTopHeadLinkUrl] = useState(['/', '/', '/', '/', '/'])
  const infocss = {
    color: '#fff',
    fontSize: '13px',
    fontWeight: '400',
  }

  const [auditDynamicLinks, setAuditDynamicLinks] = useState([]);
  const [taxDynamicLinks, setTaxDynamicLinks] = useState([]);

  const [totalNavItems, setTotalNavItems] = useState([
    {
      Title: 'Home',
      FileName: '/',
    },
    {
      Title: 'About Us',
      children: [
        {
          Title: 'Introduction',
          FileName: '/about',
        },
        {
          Title: 'Chairman Message',
          FileName: '/about/chairman',
        },
        {
          Title: 'Philosophy',
          FileName: '/about/philosophy',
        },
        {
          Title: 'Vision',
          FileName: '/about/vision',
        },

      ],
      icon: HiChevronDown
    },
    {
      Title: 'Services',
      // children: [
      //   {
      //     Title: 'Hifz / Nazra',
      //     FileName: '/services/hifz-nazra',
      //   },
      //   {
      //     Title: 'Qaida / Schooling',
      //     FileName: '/services/qaida-schooling',
      //   },
      //   {
      //     Title: 'Dars-e-nazami',
      //     FileName: '/services/dars-e-nizami',
      //   },
      //   {
      //     Title: 'Family Adoption',
      //     FileName: '/services/family-adoption',
      //   },
      //   {
      //     Title: 'Collective Qurbani',
      //     FileName: '/services/collective-qurbani',
      //   },
      //   {
      //     Title: 'Tajheez-o-takfeen',
      //     FileName: '/services/tajheez-o-takfeer',
      //   },
      //   {
      //     Title: 'Nai Zindagi',
      //     FileName: '/services/nai-zindagi',
      //   },
      //   {
      //     Title: 'Dastarkhwan',
      //     FileName: '/services/darterkhwan',
      //   },
      //   {
      //     Title: 'Provide Rashan',
      //     FileName: '/services/ration',
      //   },
      //   {
      //     Title: 'Eid Package',
      //     FileName: '/services/eid-package',
      //   },
      //   {
      //     Title: 'Ramadhan Package',
      //     FileName: '/services/ramadhan-package',
      //   },
      //   {
      //     Title: 'Renovate Masjid/Islami School',
      //     FileName: '/services/renovate-masjid',
      //   },
      //   {
      //     Title: 'RO Plant',
      //     FileName: '/services/ro-plant',
      //   },
      //   {
      //     Title: 'Online Istekhara',
      //     FileName: '/services/istekhara',
      //   },
      //   {
      //     Title: 'Online Sadaqah',
      //     FileName: '/services/saqaqah',
      //   },
      //   {
      //     Title: 'Aqiqah',
      //     FileName: '/services/Aqiqah',
      //   },
      // ],
      // icon: HiChevronDown
      FileName: '/all-services'
    },
    {
      Title: 'Future Projects',
      FileName: '/all-projects'
      // children: [
      //   {
      //     Title: 'University',
      //     FileName: '/future-projects/university',
      //   },
      //   {
      //     Title: 'City',
      //     FileName: '/future-projects/city',
      //   },
      //   {
      //     Title: 'Job Bank',
      //     FileName: '/future-projects/job-bank',
      //   },
      //   {
      //     Title: 'Online Quran Admission',
      //     FileName: '/future-projects/online-quran-admission',
      //   },
      //   {
      //     Title: 'Quran App/Tafteesh',
      //     FileName: '/future-projects/quran-app',
      //   },
      //   {
      //     Title: 'Blood Bank & Thalassemia center',
      //     FileName: '/future-projects/blood-bank',
      //   },
      //   {
      //     Title: 'Clinic',
      //     FileName: '/future-projects/clinic',
      //   },
      // ],
      // icon: HiChevronDown
    },
    {
      Title: 'Audit Reports',
      FileName: '/audit-reports'
      // icon: HiChevronDown
    },
    {
      Title: 'Tax Docs',
      FileName: '/tax-docs'
      // icon: HiChevronDown
    },
    {
      Title: 'Media',
      children: [
        {
          Title: 'Photo Gallery',
          FileName: '/media/photo-gallery',
        },
        {
          Title: 'Video Gallery',
          FileName: '/media/video-gallery',
        },
        {
          Title: 'Press Releases',
          FileName: '/media/press-release',
        },
        // {
        //   Title: 'Photo Releases',
        //   FileName: '/',
        // },
        {
          Title: 'Downloads',
          FileName: '/downloads',
        },
      ],
      icon: HiChevronDown
    },
    {
      Title: 'News',
      FileName: '/news',
    },
    {
      Title: 'Donate',
      children: [
        {
          Title: 'Donate Online Now',
          FileName: '/online-donate',
        },
        {
          Title: 'Bank Details',
          FileName: '/wire-transfer',
        },
        {
          Title: 'Cash & Cross Cheque',
          FileName: '/cashAndCheque',
        },
      ],
      icon: HiChevronDown
    },
    {
      Title: 'Contact us',
      FileName: '/contact'
    },
  ])

  const getAuditLinks = async () => {
    let auditLinks = await GET(`${baseUrl}/AuditReport`,
      { authorization: `Basic ${btoa('admin:admin123')}` })
    // console.log(auditLinks);
    setAuditDynamicLinks(auditLinks?.Data)

    let taxLinks = await GET(`${baseUrl}/TaxDoc`,
      { authorization: `Basic ${btoa('admin:admin123')}` })
    // console.log(taxLinks);
    setTaxDynamicLinks(taxLinks?.Data)
  }

  useEffect(() => {
    getAuditLinks()
  }, [])

  return (
    <Box w={'full'} id='Header'>
      <Flex display={{ base: 'none', lg: 'flex' }} justifyContent={'space-between'} className='top-nav' bg={'#233F4D'} w='full' py={{ base: 2, md: 2, }} px={{ base: 4, md: 30 }} display={{ base: 'none', lg: 'flex' }}>
        <HStack spacing={6}>
          <Tag size={'lg'} variant='subtle' bg={'transparent'} color={'white'}>
            <TagLeftIcon boxSize='18px' as={AiOutlineClockCircle} color={'#1FBDD0'} />
            <TagLabel><Link sx={infocss} as={ReactLink} to={'/'}>Mon – Fri: 9AM - 8PM, Sat: 9AM - 5PM, Sun (OFF)</Link></TagLabel>
          </Tag>
          <Tag size={'lg'} variant='subtle' bg={'transparent'} color={'white'}>
            <TagLeftIcon boxSize='18px' as={HiOutlineMail} color={'#1FBDD0'} />
            <TagLabel><Link sx={infocss} as={ReactLink} to={'/'}>info@mujaddidalifsani.com</Link></TagLabel>
          </Tag>
          <Tag size={'lg'} variant='subtle' bg={'transparent'} color={'white'}>
            <TagLeftIcon boxSize='18px' as={HiOutlinePhone} color={'#1FBDD0'} />
            <TagLabel><Link sx={infocss} as={ReactLink} to={'/'}>00447972377903, 00923002230155</Link></TagLabel>
          </Tag>

        </HStack>
        <HStack
          spacing={'4'}
        // divider={<StackDivider alignSelf={'auto'} borderColor={'#999'} h={'35%'} />}
        >
          {
            TopHeadLinks.map((v, i) => {
              return (
                <Link color={'#fafafa'} fontSize={'15px'} as={ReactLink} key={i} to={TopHeadLinkUrl[i]}><Icon as={v} /></Link>
              )
            })
          }
        </HStack>

      </Flex>

      <Stack
        direction={{ base: "row-reverse", xl: 'row' }}
        bg={useColorModeValue('#1FBDD0', '#1FBDD0')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        // py={{ base: 4, md: 6 }}
        px={{ base: 0, md: 0 }}
        pr={{ base: 4, md: 30 }}
        boxShadow={'base'}
        align={'center'}
        justifyContent={'space-between'}
      >

        <Flex
          ml={{ base: -2 }}
          display={{ base: 'flex', xl: 'none' }}>
          <IconButton
            id='hamb'
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            color={'#fff'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Box
          background={'#fff'}
          paddingY={4}
          paddingX={8}
          margin={'0 !important'}
        >
          <Box as={ReactLink} to={'/'} rel="home" >
            <Image alt={'Logo'} src={logo} draggable={false}
              margin={'0 auto'}
              w={{ base: '180px', md: '240px', '2xl': '350px' }}
            />
          </Box>
        </Box>

        <Flex justify={{ base: 'center', md: 'center' }} display={{ base: 'none', xl: 'flex' }}>


          <Flex justify={'center'} display={{ base: 'none', xl: 'flex' }} ml={10}>
            <DesktopNav auditDynamicLink={auditDynamicLinks} totalNavItems={totalNavItems} />
          </Flex>
        </Flex>

        {/* <Stack
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
        </Stack> */}
      </Stack>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav totalNavItems={totalNavItems} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ totalNavItems, auditDynamicLinks }) => {
  const linkColor = useColorModeValue('#fff', '#fff');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {totalNavItems.map((navItem, i) => (
        <Box key={navItem.Title}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={{ base: 1 }}
                py={{ base: 5 }}
                as={ReactLink}
                to={navItem.FileName ?? '#'}
                fontSize={{ base: '12px', xl: '12px', '2xl': '15px' }}
                fontWeight={500}
                color={linkColor}
                transition={'0.3s ease-in-out'}
                position={'relative'}
                fontFamily={'Poppins'}
                _hover={{
                  color: 'primaryHeading.100',
                  _before: {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  }
                }}
                _before={{
                  content: `""`,
                  position: 'absolute',
                  w: '100%',
                  h: '2px',
                  transform: 'scaleX(0)',
                  bottom: '10px',
                  left: '0px',
                  borderRadius: '25px',
                  backgroundColor: "#fff",
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.3s ease-in-out'
                }}>
                {navItem.Title}
                {
                  navItem?.icon &&
                  <Icon as={navItem?.icon} marginBottom={'-0.5'} />
                }
              </Link>
            </PopoverTrigger>

            {navItem.children?.length > 0 && (
              <PopoverContent
                className={`${navItem.Title}custom`}
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={2}
                rounded={'base'}
                minW={'base'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav subKey={i} key={child.Title} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ Title, FileName, subLabel, subKey }) => {
  return (
    <>
      {
        String(FileName).split('.')[3] == 'pdf' ?
          <a href={FileName} target="_blank" style={{ fontWeight: '500' }}>{Title}</a>
          :
          <Link
            as={ReactLink}
            to={FileName}
            role={'group'}
            display={'block'}
            px={2}
            py={1}
            rounded={'base'}
            _hover={{ bg: '#1FBDD0', color: '#fff' }}>
            <Stack direction={'row'} align={'center'}>
              <Box>
                <Text
                  transition={'all .3s ease'}
                  _groupHover={{ color: 'primaryHeading.100' }}
                  fontWeight={500}>
                  {Title}
                </Text>
                <Text fontSize={'sm'}>{subLabel}</Text>
              </Box>
              <Flex
                transition={'all .3s ease'}
                transform={'translateX(-10px)'}
                opacity={0}
                _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                justify={'flex-end'}
                align={'center'}
                flex={1}>
                <Icon color={'primaryHeading.100'} w={5} h={5} as={ChevronRightIcon} />
              </Flex>
            </Stack>
          </Link>
      }
    </>

  );
};

const MobileNav = ({ totalNavItems }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ lg: 'none' }}>
      {totalNavItems.map((navItem) => (
        <MobileNavItem key={navItem.Title} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ Title, children, FileName }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        onClick={() => { children === undefined ? document.getElementById('hamb').click() : console.log('') }}
        py={2}
        as={ReactLink}
        to={FileName ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {Title}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link onClick={() => { document.getElementById('hamb').click() }} key={child.Title} py={2} as={ReactLink} to={child.FileName}>
                {child.Title}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

// const NAV_ITEMS = [
//   {
//     label: 'Home',
//     href: '/',
//   },
//   {
//     label: 'About Us',
//     children: [
//       {
//         label: 'Introduction',
//         href: '/about',
//       },
//       {
//         label: 'Chairman Message',
//         href: '/about/chairman',
//       },
//       {
//         label: 'Philosophy',
//         href: '/about/philosophy',
//       },
//       {
//         label: 'Vision',
//         href: '/about/vision',
//       },

//     ],
//     icon: HiChevronDown
//   },
//   {
//     label: 'Services',
//     children: [
//       {
//         label: 'Hifz / Nazra',
//         href: '/services/hifz-nazra',
//       },
//       {
//         label: 'Qaida / Schooling',
//         href: '/services/qaida-schooling',
//       },
//       {
//         label: 'Dars-e-nazami',
//         href: '/services/dars-e-nizami',
//       },
//       {
//         label: 'Family Adoption',
//         href: '/services/family-adoption',
//       },
//       {
//         label: 'Collective Qurbani',
//         href: '/services/collective-qurbani',
//       },
//       {
//         label: 'Tajheez-o-takfeen',
//         href: '/services/tajheez-o-takfeer',
//       },
//       {
//         label: 'Nai Zindagi',
//         href: '/services/nai-zindagi',
//       },
//       {
//         label: 'Dastarkhwan',
//         href: '/services/darterkhwan',
//       },
//       {
//         label: 'Provide Rashan',
//         href: '/services/ration',
//       },
//       {
//         label: 'Eid Package',
//         href: '/services/eid-package',
//       },
//       {
//         label: 'Ramadhan Package',
//         href: '/services/ramadhan-package',
//       },
//       {
//         label: 'Renovate Masjid/Islami School',
//         href: '/services/renovate-masjid',
//       },
//       {
//         label: 'RO Plant',
//         href: '/services/ro-plant',
//       },
//       {
//         label: 'Online Istekhara',
//         href: '/services/istekhara',
//       },
//       {
//         label: 'Online Sadaqah',
//         href: '/services/saqaqah',
//       },
//       {
//         label: 'Aqiqah',
//         href: '/services/Aqiqah',
//       },
//     ],
//     icon: HiChevronDown
//   },
//   {
//     label: 'Future Projects',
//     children: [
//       {
//         label: 'University',
//         href: '/future-projects/university',
//       },
//       {
//         label: 'City',
//         href: '/future-projects/city',
//       },
//       {
//         label: 'Job Bank',
//         href: '/future-projects/job-bank',
//       },
//       {
//         label: 'Online Quran Admission',
//         href: '/future-projects/online-quran-admission',
//       },
//       {
//         label: 'Quran App/Tafteesh',
//         href: '/future-projects/quran-app',
//       },
//       {
//         label: 'Blood Bank & Thalassemia center',
//         href: '/future-projects/blood-bank',
//       },
//       {
//         label: 'Clinic',
//         href: '/future-projects/clinic',
//       },
//     ],
//     icon: HiChevronDown
//   },
//   {
//     label: 'Audit Report',
//     children: [
//       {
//         label: 'Audit Report 2015',
//         href: '/',
//       },
//       {
//         label: 'Audit Report 2016',
//         href: '/',
//       },
//       {
//         label: 'Audit Report 2017',
//         href: '/',
//       },
//       {
//         label: 'Audit Report 2018',
//         href: '/',
//       },
//     ],
//     icon: HiChevronDown
//   },
//   {
//     label: 'Tax Docs',
//     children: [
//       {
//         label: 'Tax Exemption 2023 Certificate',
//         href: '/',
//       },
//       {
//         label: 'Tax Exemption 2022 Certificate',
//         href: '/',
//       },
//       {
//         label: 'Tax Exemption 2021 Certificate',
//         href: '/',
//       },
//       {
//         label: 'Tax Exemption 2020 Certificate',
//         href: '/',
//       },
//       {
//         label: 'Tax Exemption 2019 Certificate',
//         href: '/',
//       },
//       {
//         label: 'Tax Exemption 2018 Certificate',
//         href: '/',
//       },
//       {
//         label: 'Tax Exemption 2017 Certificate',
//         href: '/',
//       },
//     ],
//     icon: HiChevronDown
//   },
//   {
//     label: 'Media',
//     children: [
//       {
//         label: 'Photo Gallery',
//         href: '/media/photo-gallery',
//       },
//       {
//         label: 'Video Gallery',
//         href: '/media/video-gallery',
//       },
//       {
//         label: 'Press Releases',
//         href: '/media/press-release',
//       },
//       // {
//       //   label: 'Photo Releases',
//       //   href: '/',
//       // },
//       {
//         label: 'Downloads',
//         href: '/downloads',
//       },
//     ],
//     icon: HiChevronDown
//   },
//   {
//     label: 'News',
//     href: '/news',
//   },
//   {
//     label: 'Donate',
//     children: [
//       {
//         label: 'Donate Online Now',
//         href: '/online-donate',
//       },
//       {
//         label: 'Bank Details',
//         href: '/wire-transfer',
//       },
//       {
//         label: 'Cash & Cross Cheque',
//         href: '/cashAndCheque',
//       },
//     ],
//     icon: HiChevronDown
//   },
//   {
//     label: 'Contact us',
//     href: '/contact'
//   },
// ];