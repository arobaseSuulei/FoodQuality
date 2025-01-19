import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "@radix-ui/themes/styles.css";
import { Badge, Card, Em, Flex, Strong, Theme, Text } from "@radix-ui/themes";
import Cards from "./Card.jsx";

const supabase = createClient(
    "https://pxyqknxfvimxdcmplbff.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk"
);

function Home() {
    const [dark, setDark] = useState(false);

    function toggleDark() {
        setDark(!dark);
    }

    return (
        <Theme appearance={dark ? "dark" : "light"} className="flex gap-22">
            <div className="p-14 flex flex-col gap-12">
                <nav>
                    <button className={'border'} onClick={toggleDark}>toggle</button>
                    <Cards />
                </nav>
            </div>
        </Theme>
    );
}

export default Home;
