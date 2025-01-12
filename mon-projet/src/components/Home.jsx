import {Avatar, Box, Flex, Grid} from "@radix-ui/themes";
import {Text} from "@radix-ui/themes";
import {Card} from "@radix-ui/themes";
import {useEffect, useState} from "react";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");


export default function Home(){


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

            {name.map((item, index) => (
                <Card  key={index}>
                    <Flex  gap="3" align="center">
                        <Avatar
                            size="3"
                            // src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                            radius="full"
                            fallback={"T"}
                        />
                        <Box>
                            <Text color={'green'} as="div" size="2" weight="bold">
                                {item.Item}
                            </Text>
                            <Text as="div" size="2" color="gray">
                                {item.Category}
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            ))}
        </div>
    );
}