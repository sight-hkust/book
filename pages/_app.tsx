import '../styles/globals.css'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import type { AppProps } from 'next/app'

const slideUp = {
  name: "Slide Up",
  variants: {
    initial: {
      opacity: 0,
      top: "100vh",
      scale: 0.4
    },
    animate: {
      opacity: 1,
      top: "0vh",
      scale: 1
    },
    exit: {
      opacity: 0,
      top: "100vh",
      scale: 0.4
    }
  },
  transition: {
    duration: 0.7
  }
};

const slideRight = {
  name: "Slide Right",
  variants: {
    initial: {
      opacity: 0,
      left: "-100%",
      scale: 0.6
    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      left: "100%",
      scale: 0.6
    }
  },
  transition: {
    duration: 0.7
  }
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode='popLayout' >
        <m.div
          key={router.route.concat(slideRight.name)}
          className="page-wrap"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideRight.variants}
          transition={slideRight.transition}
        >
          <Component {...pageProps} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}
