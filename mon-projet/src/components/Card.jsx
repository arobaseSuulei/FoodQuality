import {Avatar, Badge, Box, Flex, Grid} from "@radix-ui/themes";
import {Text} from "@radix-ui/themes";
import {Card} from "@radix-ui/themes";
import React, {useEffect, useState} from "react";
import {createClient} from "@supabase/supabase-js";
import Home from "./Home.jsx";

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
        <div >

            <div>
                <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto" >
                    {name.map((item, index) => (
                        <Card className={''} key={index}>
                            <Flex gap="3" align="center">
                                <Avatar
                                    size="3"
                                    radius="full"
                                    fallback="T"
                                />
                                <Box maxWidth={'350px'} >
                                    <Text color="green" as="div" size="2" weight="bold">
                                        {item.Item}
                                    </Text>
                                    <Text as="div" size="2" color="gray">
                                        {item.Category}
                                    </Text>



                                </Box>


                            </Flex>
                        </Card>
                    ))}
                </Grid>
            </div>
            );




        </div>

    );
}