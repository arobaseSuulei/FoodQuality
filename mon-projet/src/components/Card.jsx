import {Avatar, Badge, Box, Button, Code, Flex, Grid, Strong, Theme} from "@radix-ui/themes";
import {Text} from "@radix-ui/themes";
import {Card} from "@radix-ui/themes";
import React, {useEffect, useState} from "react";
import {createClient} from "@supabase/supabase-js";
import Home from "./Home.jsx";
import {Link} from "react-router-dom";
import Filter from "./Filter.jsx";
import { useParams } from "react-router-dom";
import {motion} from "motion/react";
import ScrollRevealItem from "./ScrollRevealItem.jsx";

const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");



export default function Cards() {

    const [name, setName] = useState([]);






    useEffect(() => {
        getThings();
    }, []);


    async function getThings() {
        const { data } = await supabase.from("foodInfo").select("*");
        setName(data);

        console.log(data);
    }






    return(

            <div>


                <nav className={'mb-4 flex items-center'}>
                    <Flex className={"items-center gap-14 justify-center"}>
                        <Text className={'text-3xl'}>
                            <Strong>All menus ({name.length}) </Strong>
                        </Text>

                    </Flex>
                </nav>

                <nav className={'mb-8'}>
                    <Filter/>
                </nav>


                <div className={'grid grid-cols-1 sm:grid-cols-3 gap-4'}>
                    {name.length > 0 ? name.map((item, index) => (
                            <Link to={`/Things/${item.id}`}>
                                <motion.div
                                    whileHover={{scale: 1.2}}
                                    whileTap={{scale: 0.9}}
                                    style={{
                                        padding: "10px 20px",
                                        fontSize: "16px",

                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <ScrollRevealItem>
                                        <div className={'border  h-32  p-4 rounded-lg'} key={index}>
                                            <nav className={'flex justify-between items-center'}>
                                                <p>{item.Item}</p>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                                        fill="currentColor" fill-rule="evenodd"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </nav>

                                            <Flex className={'mt-4'} gap={"4"}>
                                                <Badge>{item.Category}</Badge>
                                                <Badge
                                                    color={item.Healthiness === "Bon" ? "green" : "red"}>{item.Healthiness}</Badge>
                                            </Flex>
                                        </div>
                                    </ScrollRevealItem>
                                </motion.div>
                            </Link>
                        )) :

                        <Button loading>Bookmark</Button>

                    }


                </div>


            </div>


    );
}