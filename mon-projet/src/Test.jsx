import { motion } from "motion/react"
import {useState,useEffect} from "react";
import Cards from "./components/Card.jsx";
import {Card} from "@radix-ui/themes";
import {Link} from "react-router-dom";



export default function Test() {




    return(
        <div style={{textAlign: "center", padding: "20px"}}>
            <Link to="/">
                <motion.div
                    layoutId="shared-item"
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "20px",
                        backgroundColor: "red",
                        margin: "auto",
                        cursor: "pointer",
                    }}
                />
            </Link>
        </div>
    );


}
