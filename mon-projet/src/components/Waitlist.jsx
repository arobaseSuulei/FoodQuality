import {Button, Flex, Text} from "@radix-ui/themes";
import {TextField} from "@radix-ui/themes";

export default function Waitlist() {
    const backgroundImage = "../../public/bg.jpg";

    return (
        <div
            className={'px-64 py-14'}

        >

            <div className={'flex justify-between items-center'}>


                <nav className={'flex'}>
                    <a>Download as template</a>
                </nav>

                <nav className={'flex'}>
                    <a className={'rounded-lg bg-black text-white p-2'}>Get framer template</a>
                </nav>


            </div>


            <div className={'mt-10 flex flex-col gap-6 items-center justify-center'}>
                <p>🔥 Amazing Framer Templates & Resources!</p>
                <p className={'text-center text-5xl font-bold'}>Join The Waitlist for FramerIt Today!</p>
                <p className={'text-center mt-6 px-16 text-sm'}>Discover an Array of Incredible Framer Templates and Be Prepared for an Exciting Wave of New Resources on the Horizon. Sign up to Our Waitlist to be notified when we launch!</p>
            </div>


            <div className={'flex mt-24  justify-center gap-6'}>
                <input placeholder={'Your email address'} className={'p-4 rounded-lg border '}/>
                <nav className={'flex items-center rounded-lg bg-black text-white p-2'}>
                    <a className={''}>Get framer template</a>
                </nav>
            </div>


        </div>
    );
}
