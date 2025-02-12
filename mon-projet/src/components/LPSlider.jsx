import {useAnimation,motion} from "framer-motion";
import {useEffect} from "react";
import ScrollRevealItem from "./ScrollRevealItem.jsx";


const LPSlider = () => {
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                await controls.start({ x: '-180%', transition: { duration: 20, ease:'linear' } });
                await controls.start({ x: '180%', transition: { duration: 0 } });

            }
        };
        sequence();
    }, [controls]);

    return (

            <div className={'flex flex-col'}>

                <div
                    className="flex  justify-between backdrop-blur items-center rounded-lg w-96  py-2 overflow-hidden">
                    <motion.div className="flex gap-8" animate={controls}>
                        <div>
                            <img className="w-12 rounded-lg"
                                 src="https://img.logo.dev/lowes.com?token=pk_QyZYYVI6QBejCt9wU_0qdw" alt="logo"/>
                        </div>
                        <div>
                            <img className="w-12 rounded-lg"
                                 src="https://img.logo.dev/deepl.com?token=pk_QyZYYVI6QBejCt9wU_0qdw" alt="logo"/>
                        </div>
                        <div>
                            <img className="w-12 rounded-lg"
                                 src="https://img.logo.dev/techcrunch.com?token=pk_QyZYYVI6QBejCt9wU_0qdw" alt="logo"/>
                        </div>
                        <div>
                            <img className="w-12 rounded-lg"
                                 src="https://img.logo.dev/glassdoor.com?token=pk_QyZYYVI6QBejCt9wU_0qdw" alt="logo"/>
                        </div>
                    </motion.div>
                </div>
            </div>

    );
};

export default LPSlider;