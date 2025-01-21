import React, {useEffect, useState} from "react";
import {createClient} from "@supabase/supabase-js";
import {useParams} from "react-router-dom";
import {Badge, Box, Card, Inset, Text, Strong, Theme} from "@radix-ui/themes";
const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");

export default function Things() {



    const {id} = useParams();
    console.log(id);



    const [things, setThings] = useState([]);

    useEffect(() => {

            getProd();

    },[id]) // on passe l'id en depasse pour pas perdre l'id lors de l'actualisation de la page


    async function getProd() {
        const{data}=await supabase.from("foodInfo").select("*").eq("id",id);
        setThings(data);
        console.log(data);
    }






    return(
        <Theme >

            <div className={'p-14 flex flex-col gap-24 items-center'}>
                <Badge color={things[0]?.Healthiness === "Bon" ? "green" : "red"}>{things[0]?.Healthiness}</Badge>


               <Text>
                   <Box width={"450px"} maxWidth="940px">
                       <Card size="4">
                           <Inset clip="padding-box" side="top" pb="current">

                           </Inset>
                           <div className={'flex gap-4 flex-col'}>
                               <p>{things[0]?.Item}</p>
                               <hr/>
                               <nav className={'flex justify-between'}>
                                   <p>Category : </p>
                                   <p>{things[0]?.Category}</p>
                               </nav>
                               <nav className={'flex justify-between'}>
                                   <p>Protein : </p>
                                   <p>{things[0]?.Protein}</p>
                               </nav>
                               <nav className={'flex justify-between'}>
                                   <p>Sugar : </p>
                                   <p className={'text-red-500'}>{things[0]?.Sugars}</p>
                               </nav>
                               <nav className={'flex justify-between'}>
                                   <p>Protein : </p>
                                   <p className={''}>{things[0]?.Protein}</p>
                               </nav>
                               <nav className={'flex justify-between'}>
                                   <p>Vitamin A (%DailyValue) </p>
                                   <p className={''}>{things[0]?.percentVitaminA}</p>
                               </nav>
                               <nav className={'flex justify-between'}>
                                   <p>Total Fat : </p>
                                   <p className={''}>{things[0]?.TotalFat}</p>
                               </nav>


                           </div>
                       </Card>
                   </Box>
               </Text>


            </div>
        </Theme>
    );
}