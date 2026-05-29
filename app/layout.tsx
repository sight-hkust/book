import type { Metadata } from "next";
// import { LazyMotion, domAnimation, motion, AnimatePresence } from "motion/react";
import "./globals.css";

// const slideUp = {
//   name: "Slide Up",
//   variants: {
//     initial: {
//       opacity: 0,
//       top: "100vh",
//       scale: 0.4
//     },
//     animate: {
//       opacity: 1,
//       top: "0vh",
//       scale: 1
//     },
//     exit: {
//       opacity: 0,
//       top: "100vh",
//       scale: 0.4
//     }
//   },
//   transition: {
//     duration: 0.7
//   }
// };

// const slideRight = {
//   name: "Slide Right",
//   variants: {
//     initial: {
//       opacity: 0,
//       left: "-100%",
//       scale: 0.6
//     },
//     animate: {
//       opacity: 1,
//       left: 0,
//       scale: 1
//     },
//     exit: {
//       opacity: 0,
//       left: "100%",
//       scale: 0.6
//     }
//   },
//   transition: {
//     duration: 0.7
//   }
// };

export const metadata: Metadata = {
  title: "SIGHT BOOK",
  description: "Our Journey",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* <LazyMotion features={domAnimation}>
          <AnimatePresence mode='popLayout' >
            <motion.div
              key={slideRight.name}
              className="page-wrap"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideRight.variants}
              transition={slideRight.transition}
            > */}
              {children}
            {/* </motion.div>
          </AnimatePresence>
        </LazyMotion> */}
      </body>
    </html>
  );
}
