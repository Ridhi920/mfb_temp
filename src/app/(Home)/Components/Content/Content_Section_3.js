"use client"

import React from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


function Content_Section_3({ data }) {


    gsap.fromTo(".box",
        {
            scale: 0.8, // Initial scale (slightly smaller)
            opacity: 0, // Initial opacity
        },
        {
            scale: 1, // Scale to normal size
            opacity: 1, // Full opacity
            duration: 1,
            scrollTrigger: {
                trigger: ".box",
                start: "top 80%",  // Animation starts when the top of the element reaches 80% of the viewport height
                end: "top 20%",   // Animation ends when the top of the element reaches 20% of the viewport height
                scrub: true,      // Smooth scrubbing effect
                toggleActions: "play none none reverse", // Reverses the animation when scrolling back up
            },
        });

    console.log("ContentData ", data);

    return (
        <div className='box w-full h-[694px] gap-[68px]  bg-[#F7F3E8] text-[#3C4617] flex flex-col items-center justify-center text-center py-[100px]'>

            {data?.logo &&
                <div className='w-[275.71px] h-[56px] flex items-center justify-center '>

                    <Image width={275.71} height={56} src={data?.logo} alt={data?.label} />
                </div>
            }


            <div className='w-[1054px] h-[294px] gap-[24px] flex flex-col items-center justify-center'>


                {data?.heading?.[0] &&
                    <h3 className="text-[#3C4617] text-[42px] font-bold w-[726px] h-[46px] leading-[45px] font-ESDokument tracking-9 uppercase gap-[16px]">
                        {data.heading[0]}
                    </h3>
                }


                {data?.description?.[0] &&
                    <p className='w-[744px] font-Spezia text-[18px] text-center'>
                        {data?.description[0]}
                    </p>
                }

                {data?.description?.[1] &&
                    <p className='w-[744px] font-Spezia text-[18px] text-center'>
                        {data?.description[1]}
                    </p>
                }



                {/* <h3 className="text-[#3C4617] text-[30px] font-bold w-[744px] h-[32px] font-ESDokument tracking-5">
                     {data?.heading[1]}
                </h3> */}

                {data?.heading?.[1] &&
                    <h3 className="text-[#3C4617] text-[30px] font-bold w-[744px] h-[32px] font-ESDokument tracking-5 ">
                        {data.heading[1]}
                    </h3>
                }



            </div>


            <div className='flex items-center justify-between gap-5 leading-9'>
                {data?.button?.[0] &&

                    <button className='w-[283px] h-[48px] border-[0.5px] border-[#AB8456] text-[#AB8456] text-[14px] leading-[24px] tracking-5 text-center font-ESDokument hover:bg-[#AB8456] hover:text-[#F7F3E8] bg-[#F7F3E8] uppercase duration-500'>
                        {data?.button[0]}
                    </button>
                }

                {data?.button?.[1] &&

                    <button className='w-[283px] h-[48px] border-[0.5px] border-[#AB8456] text-[#AB8456] text-[14px] leading-[24px] tracking-5 text-center font-ESDokument hover:bg-[#AB8456] hover:text-[#F7F3E8] bg-[#F7F3E8] uppercase duration-500'>
                        {data?.button[1]}
                    </button>
                }

                {data?.button?.[2] &&

                    <button className='w-[283px] h-[48px] border-[0.5px] border-[#AB8456] text-[#AB8456] text-[14px] leading-[24px] tracking-5 text-center font-ESDokument hover:bg-[#AB8456] hover:text-[#F7F3E8] bg-[#F7F3E8] uppercase duration-500'>
                        {data?.button[2]}
                    </button>
                }

            </div>



            {/* border-image-source: linear-gradient(0deg, var(--oyester, #F7F3E8), var(--oyester, #F7F3E8)),
            linear-gradient(0deg, #AB8456, #AB8456); */}

        </div>
    )
}

export default Content_Section_3;