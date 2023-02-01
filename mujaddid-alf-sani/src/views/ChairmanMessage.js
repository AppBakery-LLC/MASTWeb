import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import SectionHeading from '../components/SectionHeading'

export default function ChairmanMessage() {

    const mainIntro = "All praises be to Allah SWT, the Almighty, the Merciful and the creator of the Universe. And peace and blessings be upon Prophet Mohammed, the source of mercy to every existence in the Universe. I am truly humbled to share this message as the Chairman of Mujaddid Alf Sani Welfare Trust International. I am also grateful to Allah SWT, my beloved Shaykh Hazrat Peer-e-tarreeqat Rehbar-e-shariat Sufi-e-basafah Hazrat-e-Aqdas Nisar-ul-Haq Naqshbandi Mujaddadi Rehmat-ul-Allah elahe and all the members for ordaining this huge responsibility on me. My Shaykh has started this mission in a year 2015 and dedicated all his life toward its prosperity. With Allah’s guidance and blessings of Prophet Mohammed (Peace Be Upon Him) my Shaykh managed to help and support hundreds of people and made their lives better in terms of both religious and worldly development.";
    const subIntro = "As the Chairman I feel duty bound to embrace my Master’s visions and strive hard to continue the mission and make sure his legacy of this charity trust is going strength to strength. I will dedicate myself and work hard to raise the profile of the charity trust. There is no denying that there is a strong future need for the trust to exist and continue to help and support people around us.However, I strongly believe, this is our journey together, a journey to help and support people to bring health, happiness and prosperity in their lives. Every contribution makes a difference and will continue to do so long after we are all gone. The trust is here because of people like you who not only care and acknowledge the need in our society but also render all the help and support. Undoubtedly, the success of the trust would not be possible without your generosity.Lastly, with all sincerity I take this opportunity to thank everyone for their ongoing support. And I assure you, inshallah your help and support is equally acknowledged and will have lasting effect in your lives here and eternal life hereafter.";

    return (
        <Stack
            paddingY={'80px'}
        >
            <Container
                maxW={'7xl'}
            >
                <SectionHeading width={'100%'} smallHeading={"CHAIRMAN'S MESSAGE"} mainHeading={'Maulana Zakir Ahmad Naqshbandi'} marginPosition={'auto'} textAlignment={'center'} />
                <Text
                    paddingY={8}
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >{mainIntro}</Text>
                <Text
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >{subIntro}</Text>
            </Container>
        </Stack>
    )
}
