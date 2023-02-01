import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading'

export default function Intro() {

    const location = useLocation();
    const mainIntro = "Mujaddid Alf Sani Welfare Trust International is serving the indigent and underprivileged humanity for the betterment of the society. Established by Shaykh Hazrat Peer-e-tarreeqat Rehbar-e-shariat Sufi-e-basafah Hazrat-e-Aqdas Nisar-ul-Haq Naqshbandi Mujaddadi Rehmat-ul-Allah elahe was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor, giving people a chance to live a dignified life and spreading happiness. We are an organization that believes in lighting up the lives of underprivileged people across the world. We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark. We feed thousands of hungry people each day, many are educated to become leaders of tomorrow and several are given the opportunity to stand on their feet financially. Shaykh Hazrat Peer-e-tarreeqat Rehbar-e-shariat Sufi-e-basafah Hazrat-e-Aqdas Nisar-ul-Haq Naqshbandi Mujaddadi Rehmat-ul-Allah elahe, saw the poor at close quarters realized that apart from food, a major problem of theirs was health, therefore in 2014 he founded the “MUJADDID ALF SANI (R.A) WELFARE TRUST” to institutionalize philanthropic work and to provide free of cost medicines and medical care to the poor. Then as they say, Log saathaataygaye, or Karwaan Banta Gaya, likeminded people joined him in this cause The trust is helping the poor and needy in almost every field of life, of them health and education being the most important.";
    const philosophyText = "Alhamdulillah “MUJADDID ALF SANI (R.A) WELFARE TRUST” believes in the philosophy of Welfare for all..without any discrimination of Color, Cast or Creed. Strictly following Islamic Principles as a guideline for rendering free of cost services to humanity, the organization is extending the domain of its services day by day. Accountability, being the top priority of the Trust, the welfare activities are carried out to reach every deserving person. We aim at providing relief to the indigent humanity and to every destitute person who requires a helping hand. As the famous Chinese proverb goes, “Give a man a fish; you have fed him for today. Teach a man to fish; and you have fed him for a lifetime”, “MUJADDID ALF SANI (R.A) WELFARE TRUST” strives to create opportunities for the people to develop self reliance and to make them a useful member of the society.";
    const visionText = "“MUJADDID ALF SANI (R.A) WELFARE TRUST” has a vision of making Pakistan a great country to live in, where even person has means to feed his family, kids has a right to education, every patient has resources to get treatment. We have and endeavor for a society whose key characteristic is patience and tolerance, something badly needs. We pledge to serve Pakistan and nurture good human beings.";

    useEffect(() => {
        if (location.pathname === '/about/philosophy') {
            window.scrollTo({
                top: 450,
                behavior: 'smooth'
            })
        }else if(location.pathname === '/about/vision'){
            window.scrollTo({
                top: 700,
                behavior: 'smooth'
            })
        }else{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [location])


    return (
        <Stack
            paddingY={'80px'}
        >
            <Container
                maxW={'7xl'}
            >
                <SectionHeading width={'900px'} smallHeading={'Introdution'} mainHeading={'Aims & Objects'} marginPosition={'auto'} textAlignment={'center'} />
                <Heading
                    color={'#233F4D'}
                    fontWeight={'500'}
                    fontSize={'24px'}
                    textAlign={'center'}
                    paddingY={6}
                >
                    History of Mujaddid Alf Sani Welfare Trust International
                </Heading>
                <Text
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >{mainIntro}</Text>
                <Heading
                    color={'#233F4D'}
                    fontWeight={'500'}
                    fontSize={'24px'}
                    textAlign={'center'}
                    paddingY={6}
                >
                    Philosophy
                </Heading>
                <Text
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >{philosophyText}</Text>
                <Heading
                    color={'#233F4D'}
                    fontWeight={'500'}
                    fontSize={'24px'}
                    textAlign={'center'}
                    paddingY={6}
                >
                    Vision
                </Heading>
                <Text
                    maxW={'6xl'}
                    marginX={'auto'}
                    fontSize={'16px'}
                    color={'#748188'}
                >{visionText}</Text>
            </Container>
        </Stack>
    )
}
