import { motion } from "motion/react"
import {useState,useEffect} from "react";
import Cards from "./components/Card.jsx";
import {Card, Theme} from "@radix-ui/themes";
import {Link} from "react-router-dom";
import LpNavbar from "./components/LpNavbar.jsx";
import LpHeader from "./components/LpHeader.jsx";
import BubbleBackground from "./components/BubbleBackground.jsx";
import ScrollRevealItem from "./components/ScrollRevealItem.jsx";
import LPSlider from "./components/LPSlider.jsx";



export default function Test() {




    return(
        <Theme appearance={"dark"}>
            <BubbleBackground>
                <div
                    className={'py-8 px-12 flex flex-col  gap-1 bg-gradient-to-br from-black to-indigo-500/60    min-h-screen'}>
                    <ScrollRevealItem delay={0.2} ><LpNavbar/></ScrollRevealItem>
                    <ScrollRevealItem delay={0.4}><LpHeader/></ScrollRevealItem>

                        <nav className={'flex justify-center items-center'}>
                            <LPSlider/>
                        </nav>


                </div>
            </BubbleBackground>

        </Theme>
    );


}
