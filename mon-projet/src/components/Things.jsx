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


                <Box maxWidth="340px">
                    <Card size="4">
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                                //src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                //alt="Bold typography"
                                style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: "100%",
                                    height: 140,
                                    backgroundColor: "var(--gray-5)",
                                }}
                            />
                        </Inset>
                        <div className={'flex gap-4 flex-col'}>
                            <p>{things[0]?.Item}</p>
                            <hr/>
                            <nav className={'flex justify-between'}>
                                <p>Category : </p>
                                <p>{things[0]?.Category}</p>
                            </nav>
                            <nav className={'flex justify-between'}>
                                <p>Category : </p>
                                <p>{things[0]?.Category}</p>
                            </nav>
                            <nav className={'flex justify-between'}>
                                <p>Category : </p>
                                <p>{things[0]?.Category}</p>
                            </nav>
                        </div>
                    </Card>
                </Box>


            </div>
        </Theme>
    );
}