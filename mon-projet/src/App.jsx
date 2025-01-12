import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "@radix-ui/themes/styles.css";
import {Badge, Card, Em, Flex, Theme} from "@radix-ui/themes";
import {Text} from "@radix-ui/themes";
import Radix from "./components/Radix.jsx";
import Home from "./components/Home.jsx";
import Cards from "./components/Card.jsx";

const supabase = createClient("https://pxyqknxfvimxdcmplbff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk");

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from("countries").select();
        setCountries(data);
        console.log(data);
    }

    return (
        <div>
            <Theme appearance="Light" style={{ margin: '2px' }} className="flex gap-22">
                <div className={'p-14 flex flex-col gap-12'}>
                    <Text className={'text-3xl'}>
                        <Em >All menus</Em>
                    </Text>
                    <nav className={''}>
                        <Cards />
                    </nav>

                </div>







            </Theme>
        </div>

    );
}

export default App;