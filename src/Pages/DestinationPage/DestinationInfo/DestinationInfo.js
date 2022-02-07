import React, { useEffect, useState } from 'react';

import "./DestinationInfo.css"

const infoLocal = [
    {
        title: "about",
        description: `Named for a local swamp fish, Paraty sits on Brazil's southeastern coast, 125 miles south of Rio, with the Bocaino Mountains at its back. The small colonial town's center is a national historic monument with well-preserved buildings on its pedestrian-only streets. Take a boat trip out into the bay to the flotillas of islands and coves nearby.
        
        Explore sugarcane plantations and hike or take a train through Atlantica Forest.Keep an eye out for the monkeys that roam the cobblestone streets,The town is located on the Bay of Ilha Grande, which is dotted with many tropical islands.Rising as high as br 1,300 meters behind the town are tropical forests, mountains, and waterfalls. It is the southernmost and westernmost city in Rio de Janeiro state,The city's economic activity revived as a port for a new boom, the coffee trade of the Paraiba do Sul River Valley in the early 19th century, until a railway along the valley created cheaper transport to the port of Rio de Janeiro. 
        
        Another smaller revival came late in the 19th century with the production of cachaça, which is a sugarcane-derived spirit best known today as the basis for Brazil's most famous cocktail, the caipirinha. b here are many musical and cultural events, the most prominent of which is the FLIP Festa Literaria Internacional de Paraty (International Literary Festival of Paraty). 
        
        The town is also known for its local festivals on Catholic holy dates, such as the Feast of the Holy Ghost.`
    },
    {
        title: "neighbourhoods",
        description: `Last Wednesday morning, Christopher Rufo, the architect of the right-wing crusade against critical race theory, sent me a message asking if I wanted to talk, I suppose because I was one of the first people to write about his project back in February. He was feeling triumphant.A year ago, few conservatives outside of academia had heard of critical race theory, a graduate school approach to the study of race and power.
        
        Now it’s become a central issue in Republican politics, helping to fuel Glenn Youngkin’s victorious gubernatorial campaign in Virginiave unlocked a new terrain in the culture war, and demonstrated a successful strategy,” said Rufo, a documentary filmmaker-turned-conservative activist. With that done, he was getting ready for a new phase of his offensivee are right now preparing a strategy of laying siege to the institutions,” he said.
        
        In practice, this means promoting the traditional Republican school choice agenda: private school vouchers, charter schools and home-schooling. “The public schools are waging war against American children and American families,” he said. Families, in turn, should have “a fundamental right to exit.`
    },
    {
        title: "schools",
        description: `The historic center is the heart of Paraty. We have some recommendations like Pousada da Marquesa, Literária and Pousada do Sandi. These are the options for those looking for five-star comfort!For those looking for a more affordable option, but still being close to the historic center, ten minutes from Praça da Matriz, we have the neighborhood of Patitiba.
        
        And it’s very close to supermarkets, drugstores and banks.If you look for accommodation and will arrive in the city by bus, you can search for options on Avenida Roberto Silveira, the main street in the city. In this avenue, we have banks, shops, markets, bars and restaurants. It is a place to explore beyond the historic center.sides that, at this avenue we find some hostels for those looking for a more affordable price and interaction.

         One of the most sought after in the city is CheLagarto. And in the neighborhood of Patitiba, VibeHostel.`
    },
    {
        title: "jobs",
        description: `Jobs are diminishing. India's unemployment rate crept up to nearly 8% in December, according to the Centre for Monitoring Indian Economy (CMIE), an independent think tank.
        
        It was more than 7% in 2020 and for most of 2021.This is way higher than anything seen in India, at least over the last three decades, including the big [economic] crisis of 1991 [when the country did not have enough dollars to pay for imports],Kaushik Basu, former chief economist of the World Bank, told me Most countries saw joblessness rise in 2020. But India's rate exceeded most emerging economies like Bangladesh (5.3%), Mexico (4.7%) and Vietnam (2.3%), notes Prof Basu.Even salaried jobs have shrunk, according to the CMIE.
        
        Part of this could be because firms have used the pandemic to trim their workforce and reduce costs.Studies by Azim Premji University show young workers - 15 to 23 years old - were hardest hit during the 2020 lockdown.`
    },
    {
        title: "leisureandparks",
        description: `The National Park of Bocaina was created under the Federal Decree no. 68.172 of March 4th 1971, with an area of 134,00 hectare being further modified by Federal Decree no. 70.694 of 1972, totaling an area of 110.000 hectare. 60 per cent is located in the State of Rio de Janeiro and 40 per cent in Sao Paulo.The Park starts at the tip of Trindade in Paraty, in the border of Sao Paulo and Rio States. Following west, it meets the State Park of Serra do Mar in Ubatuba. 
        
        This region is unique because it is the only point where these two parks reach down to the coast, and also integrate the Protection Area of Cairuçu and the Ecological Reserve of Joatinga. From Picinguaba the park ascends up to the mountain as far as the plateau, going north through the state border and the cities of Cunha, Areias, and Sao Jose do Barreiro in Sao Paulo State, going down the hills towards Angra dos Reis and Paraty.`
    },
]

const DestinationInfo = ({ city }) => {
    const { articleImage1, articleImage2, articleImage3, info } = city;
    // console.log(info[0].title)

    const [activeNav, setActiveNav] = useState('about');
    // const infoData = [
    //     {
    //         title: `${info[0].title}`,
    //         description: `${info[0].description}`
    //     },
    //     {
    //         title: `${info[1].title}`,
    //         description: `${info[1].description}`
    //     },
    //     {
    //         title: `${info[2].title}`,
    //         description: `${info[2].description}`
    //     },
    //     {
    //         title: `${info[3].title}`,
    //         description: `${info[3].description}`
    //     },
    //     {
    //         title: `${info[4].title}`,
    //         description: `${info[4].description}`
    //     },
    // ]


    // console.log(infoData)
    return (

        <div className='destination-info container mx-auto text-left px-9'>
            <nav>
                <button onClick={() => setActiveNav("about")}>ABOUT</button>
                <button onClick={() => setActiveNav("neighbourhoods")}>NEIGHBORHOODS</button>
                <button onClick={() => setActiveNav("schools")}>SCHOOLS</button>
                <button onClick={() => setActiveNav("jobs")}>JOBS</button>
                <button onClick={() => setActiveNav("leisureandparks")}>LEISURE AND PARK</button>
            </nav>

            <div className='my-9 mx-13 text-left '>
                {
                    infoLocal.map(single => single.title === activeNav && <div className='container mx-auto mt-5 text-left ' style={{ whiteSpace: "pre-wrap", }}>{single.description}</div>)

                }


            </div>
            <div className='articles'>
                <h4 className='uppercase text-left mt-5 font-medium'>Articles about paraty</h4>
                <div className='flex justify-between gap-6 mt-5 text-left'>
                    <div className='destination-banner'>
                        <img className='w-full ' src={articleImage1} alt="" />
                        <div className='banner-body'>
                            <h6 className='font-medium '>Expat Life in Brazil: Living the Dream in South America</h6>
                            <p className='uppercase text-xs'>www.magnificentworld.com</p>
                        </div>
                    </div>
                    <div className='destination-banner'>
                        <img className='w-full ' src={articleImage2} alt="" />
                        <div className='banner-body'>
                            <h6 className='font-medium '>Expat Life in Brazil: Living the Dream in South America</h6>
                            <p className='uppercase text-xs'>www.magnificentworld.com</p>
                        </div>
                    </div>
                    <div className='destination-banner'>
                        <img className='w-full' src={articleImage3} alt="" />
                        <div className='banner-body'>
                            <h6 className='font-medium'>Expat Life in Brazil: Living the Dream in South America</h6>
                            <p className='uppercase text-xs'>www.magnificentworld.com</p>
                        </div>
                    </div>
                </div>

            </div>

            }
        </div>
    );
};

export default DestinationInfo;