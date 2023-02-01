import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function NaiZindagi() {

    const [content, setcontent] = useState([
        {
            text: "The Prophet sallallahu alaihe wasallam has stated,"
        },
        {
            text: "“Marriage is the basis for blessings and children are an abundance of mercy.”"
        },
        {
            heading: "Marriage Assistance",
            text: "The aim of marriage grant is to provide financial assistance, provide necessary arrangements of goods required to the unmarried women who or their guardians cannot afford marriage expenses. We all know that today it is very hard for poor to arrange the expenses of marriage"
        },
        {
            heading: "Eligibility Criteria",
            text: "Any poor, needy and deserving woman or her parent/guardian can apply for this grant."
        },
        {
            heading: "Our Understanding",
            text: "Deeply rooted in tradition, culture and customary practices, child marriage remains a widespread practice across Pakistan. Yet, it is a serious violation of girls’ human rights. In Pakistan, one in three girls are married before reaching the age of 18.We understand that child marriage robs girls of their childhood and future prospects. Girls who marry are less likely to finish school and are at higher risk of domestic violence, abuse and health issues. Young girls aged 15-19 have had the highest reported cases of domestic violence in Pakistan.Child marriage also subjects girls to at-risk pregnancies, fistula, sexually transmitted infections or even death. Teen girls are also more likely to die from complications during childbirth than women in their 20s. Marrying at an early age also reduces a girl’s autonomy. in ten young women aged 15-19 have a say in their own health care, in making major household purchases and visiting their own family or relatives.Pakistan’s Child Marriage Restraint Act 1929 sets the legal age of marriage for boys to 18 and 16 for girls. In April 2014, the Sindh Assembly adopted the Sindh Child Marriage Restraint Act, which changed the minimum age to 18 for both girls and boys, punishable by law.International agreements, including the Convention on the Rights of the Child and the Convention on the Elimination of all Forms of Discrimination against Women outlaw child marriage. The International Conference on Population and Development in 1994 has also called on countries to eliminate child marriage."
        },
        {
            heading: "Our Purpose",
            text: "MAST does not advocate the tradition of giving dowry, but we provide this service to support struggling young women. Many young women are unable to get married owing to the lack of Jahaiz. Upon a request, MAST investigates the case and decide who to help. MAST does not provide any financial aid, we only provide domestic items of need."
        },
        {
            heading: "How to apply",
            text: "Meet personally with chairman at our head office or call us for guidance. MAST is committed to supporting lone young women having completed their education to establish a new home in a marriage of their choice."
        },
        {
            heading: "HOW DO WE HELP?",
            text: "Essential items of life are provided eg. provision of cooking utensils, clothes and shoes? | Furniture including a bed, dressing table, cupboard and a divider all locally sourced promoting a local economy. | A wedding celebration dinner of up to 200 people is arranged by MAST"
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
                    <SectionHeading width={'100%'} smallHeading={"Services"} mainHeading={'Nai Zindagi'} marginPosition={'auto'} textAlignment={'center'} />
                </Stack>
                {
                    content.map((v, i) => {
                        return (
                            <>
                                <Heading
                                    fontWeight={'700'}
                                    textAlign={'center'}
                                    color={'#233F4D'}
                                    fontSize={{base: '26px', md: '38px'}}
                                    paddingTop={8}
                                    maxW={'900px'}
                                    marginX={'auto'}
                                >{v.heading}</Heading>
                                <Text
                                    key={i}
                                    paddingY={2}
                                    maxW={'6xl'}
                                    marginX={'auto'}
                                    fontSize={'16px'}
                                    color={'#748188'}
                                >{v.text}</Text>
                            </>
                        )
                    })
                }
            </Container>
        </Stack>
    )
}
