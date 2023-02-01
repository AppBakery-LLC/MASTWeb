import React from 'react'
import { Box, Button, Container, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import SectionHeading from '../SectionHeading'
import YellowButton from '../Buttons/YellowButton.js'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function index() {

    return (
        <div className="features-area pt-130 pb-100">
            <Container maxW={'7xl'}>
                <Stack
                    paddingBottom={'45px'}
                >
                    <SectionHeading commonColor={'#fff'} width={'900px'} smallHeading={'Donate'} mainHeading={'We are always waiting for your helping hands'} marginPosition={'auto'} textAlignment={'center'} />
                    <Text textAlign={'center'} paddingX={{ base: '0px', lg: '200px' }} paddingTop={10} fontSize={'18px'}>some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage</Text>
                </Stack>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={10}
                >
                    <YellowButton text={'Donate Now'} icon={AiOutlineArrowRight} backgroundColor={'#CF9E2A'} padding={'30px'} url={'/online-donate'} />
                    <Box
                        textAlign={{ base: 'right', lg: 'center' }}
                    >
                        <Text fontWeight={'600'} fontSize={'22px'}>Contact Us</Text>
                        <Text>00447972377903, 00922136740009, 00923002230155</Text>
                    </Box>
                </Stack>
            </Container>
        </div>
    )
}