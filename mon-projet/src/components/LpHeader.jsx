import RevealText from "./RevealText.jsx";
import ScrollRevealItem from "./ScrollRevealItem.jsx";

export default function LpHeader() {

    return(
        <div
            className={'px-64 py-14'}

        >


            <div className={'mt-10 flex flex-col gap-6 items-center justify-center'}>


                <ScrollRevealItem>
                    <nav
                        className={'flex items-center gap-2 text-sm border-[0.2px] border-gray-500 rounded-lg px-2 py-1'}>
                        <img className={'w-8 rounded-lg'}
                             src={'https://img.logo.dev/sonder.com?token=pk_QyZYYVI6QBejCt9wU_0qdw'}/>
                        <p className={''}>
                            Radison AI - automation partner
                        </p>
                    </nav>
                </ScrollRevealItem>
                <p className={'text-center text-5xl font-bold leading-tight'}>Transforming workflow with AI powered
                    automation</p>
                <p className={'text-center px-16 leading-relaxed'}>Experience the future of business with intelligent,
                    scalable automation solutions tailored to your need</p>


                <div className={'flex justify-center items-center gap-8 '}>
                    <button className={"bg-indigo-700 border-gray-500 flex items-center gap-2 border-[0.2px] text-sm p-2 rounded-lg"}>
                        <RevealText>Our services</RevealText>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                        </svg>
                    </button>



                        <button
                            className={" border-[0.2px] border-gray-500 hover:bg-white transition ease-in-out duration-300 hover:text-black text-sm  p-2 rounded-lg"}>
                            <RevealText>See plans</RevealText>
                        </button>

                </div>
            </div>


        </div>
    );
}