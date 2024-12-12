"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PreWeddingTypes } from "@/data/PreWeddings";

function Page() {
  const pathname = usePathname();
  const [preWeddingData, setPreWeddingData] = useState(null);

  useEffect(() => {
    if (pathname) {
      const preWedding = PreWeddingTypes.find((preWedding) => preWedding.preWeddingHref === pathname);
      setPreWeddingData(preWedding || null);
    }
  }, [pathname]);

  if (!preWeddingData) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-20vh)] gap-4">
        <p className="text-lg font-light">Sorry, This Page Was Not Found</p>
        <h1 className="text-9xl">404</h1>
        <Link href={"/"} className="outline outline-1 group outline-black/40 hover:outline-black after:outline-black/40 hover:after:outline-black relative hover:text-white transition-all overflow-hidden after:transition-all after:duration-300 ease-in-out after:ease-in-out py-2 px-5 rounded-full font-medium text-lg after:bottom-[-100%] after:left-0 after:absolute after:bg-black after:h-full after:w-full after:rounded-[50%] hover:after:rounded-none hover:after:bottom-0">
          <div className="relative z-10 flex items-center gap-2">Back To Home <div className="transition-all duration-300 -rotate-45 group-hover:rotate-0"><ArrowRight /></div></div>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-40 py-20">
      <div className="flex flex-col items-center justify-center w-full gap-4 text-center">
        <motion.h1
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: 5,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="w-full text-6xl font-semibold sm:text-8xl lg:text-9xl font-SaltyFeathers">{preWeddingData.preWeddingName}</motion.h1>
      </div>

      <div className="grid items-center grid-cols-1 gap-4 w-fit md:grid-cols-2 xl:grid-cols-3">
        {preWeddingData.preWeddingImages.map((data, index) => (
          <motion.div
            key={index}
            initial={{
              filter: "blur(10px)",
              opacity: 0,
              y: 5,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.3 * index,
            }}>
            <Image key={index} src={data} quality={100} alt={data.preWeddingName} width={600} fetchPriority="high" loading="eager" height={300} className="object-cover duration-300 rounded-lg hover:scale-95" />
          </motion.div>
        ))}
      </div>

      <Link href={"/PreWeddings"} className="outline w-fit outline-1 outline-black/40 hover:outline-black after:outline-black/40 hover:after:outline-black relative hover:text-white transition-all overflow-hidden after:transition-all after:duration-300 ease-in-out after:ease-in-out py-2 px-5 rounded-md font-medium text-lg after:bottom-[-100%] after:left-0 after:absolute after:bg-black after:h-full after:w-full after:rounded-[50%] hover:after:rounded-none hover:after:bottom-0">
        <div className="relative z-10">Go Back</div>
      </Link>
    </div >
  );
}

export default Page;