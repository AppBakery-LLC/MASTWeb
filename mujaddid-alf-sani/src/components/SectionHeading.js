import { RiHandHeartFill } from 'react-icons/ri'
import { Box, Heading, Icon, Stack } from '@chakra-ui/react'

export default function SectionHeading({ smallHeading, mainHeading, textAlignment, marginPosition, width, commonColor, mainHeadingFontSize }) {
    return (
        <Stack
            className="section-title text-center mb-80"
            alignItems={textAlignment}
            >
            <Box
                display={'flex'}
                alignItems={'center'}
                background={commonColor ?? '#233F4D'}
                gap={3}
                w={'fit-content'}
                pr={4}
                borderRadius={'50px'}
                fontSize={'17px'}
                textTransform={'uppercase'}
                color={commonColor ? '#233F4D' : '#fff'}
                fontWeight={'600'}
                marginX={marginPosition}
            >
                <Icon p={1} as={RiHandHeartFill} background={'#CF9E2A'} borderRadius={'100%'} color={'#fff'} fontSize={30} />{smallHeading}
            </Box>
            <Heading
                fontWeight={'700'}
                textAlign={textAlignment}
                color={commonColor ?? '#233F4D'}
                fontSize={mainHeadingFontSize ?? {base: '30px', md: '56px'}}
                maxW={width}
                marginX={'auto'}
            >{mainHeading}</Heading>
        </Stack>
    )
}
