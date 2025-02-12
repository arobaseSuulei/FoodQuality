import {Button} from "@radix-ui/themes";
import RevealText from "./RevealText.jsx";

export default function LpNavbar() {


    return(
        <div className={'flex border-[0.2px] border-gray-500 rounded-lg p-3 bg-black/70  justify-between items-center'}>
            <div className={'flex items-center gap-3'}>
                <img className={'w-8 rounded-lg'} src={'https://img.logo.dev/sonder.com?token=pk_QyZYYVI6QBejCt9wU_0qdw'}/>
                <p className={'font-semibold text-sm'}>Radison</p>
            </div>


            <div className={'flex justify-center  items-center gap-2'}>
                <a className={"rounded-lg p-2 text-sm bg-inherit hover:bg-white/5 transition ease-in-out duration-500 "}
                   href={""}>Process</a>
                <a className={"rounded-lg p-2 text-sm bg-inherit hover:bg-white/5 transition ease-in-out duration-500 "}
                   href={""}>Services</a>
                <a className={"rounded-lg p-2 text-sm bg-inherit hover:bg-white/5 transition ease-in-out duration-500 "}
                   href={""}>Benefits</a>
                <a className={"rounded-lg p-2 text-sm bg-inherit hover:bg-white/5 transition ease-in-out duration-500 "}
                   href={""}>Plan</a>
                <a className={"rounded-lg p-2 text-sm bg-inherit hover:bg-white/5 transition ease-in-out duration-500 "}
                   href={""}>Contact</a>

            </div>


            <div>
                <button className={"bg-indigo-700 text-sm font-semibold p-2 rounded-lg"}>
                    <RevealText>Get in touch</RevealText>
                </button>
            </div>
        </div>
    );

}