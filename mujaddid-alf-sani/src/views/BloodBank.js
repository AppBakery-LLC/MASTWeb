import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function BloodBank() {

    const [content, setcontent] = useState([
        {
            text: "Our recently established Blood Bank and Thalassemia Centre is furnished with modern equipment, well trained technicians, leading Hematologists, Pediatricians, and General Physicians, and offers free of cost supply of blood and blood components to the poor and the needy. Free and effective screening, counseling and continuous medical care is provided to the deserving patients with Thalassemia and other haemoglobinopathies."
        },
        {
            text: "Aims and objectives of our Blood Bank & Thalassemia Center are as under: Providing awareness about Thalassemia. Thalassemia screening and diagnosis. Safe blood transfusion. Thalassemic patients need post transfusion chelation therapy. This highly expensive therapy is also provided completely free of cost to patients"
        },
        {
            text: "We aim to conduct extensive research in the areas of thalassemia and other blood related diseases in order to keep patients, their families and the extended medical community abreast of modern research & developments."
        },
        {
            text: "Abu Huraira narrated that the Messenger of Allah [pbuh] said:"
        },
        {
            text: "O servants of Allah! Seek medical treatment, because Allah did not make a disease without making a cure for it save old age” [Bukhari and Muslim]"
        }
    ])  

    return (
        <Stack
            paddingY={'80px'}
        >
            <Container
                maxW={'7xl'}
            >
                <Stack
                    pb={12}
                >
                    <SectionHeading width={'100%'} smallHeading={"Future Projects"} mainHeading={'Blood Bank And Thalssemia Center'} marginPosition={'auto'} textAlignment={'center'} />
                </Stack>
                {
                    content.map((v, i) => {
                        return (
                            <Text
                                key={i}
                                paddingY={2}
                                maxW={'6xl'}
                                marginX={'auto'}
                                fontSize={'16px'}
                                color={'#748188'}
                            >{v.text}</Text>
                        )
                    })
                }
            </Container>
        </Stack>
    )
}
