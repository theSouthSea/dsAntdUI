import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react"

import { ModalBase } from "./BaseDialog"

// export const useModal = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const ref = useRef<HTMLElement>(null)
//   const [scroll, setScroll] = useState(0)

//   useEffect(() => {
//     const element = ref.current
//     if (!element) return

//     const handleScroll = () => {
//       setScroll(element?.scrollTop || 0)
//     }

//     element.addEventListener("scroll", handleScroll)
//     return () => {
//       element.removeEventListener("scroll", handleScroll)
//     }
//   })

//   const open = () => setIsOpen(true)
//   const close = () => setIsOpen(false)
//   // const Dialog = () => <ModalBase onClosed={close} isOpen={isOpen} ref={ref} />
//   const Dialog = useMemo(() => {
//     return () => <ModalBase onClosed={close} isOpen={isOpen} ref={ref} />
//   }, [isOpen])

//   return { isOpen, Dialog, open, close }
// }
/* 返回记忆化的函数,状态 */
// export const useModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const ref = useRef<HTMLElement>(null);
//   const [scroll, setScroll] = useState(0);

//   const open = useCallback(() => {
//     setIsOpen(true);
//   }, []);

//   const close = useCallback(() => {
//     setIsOpen(false);
//   }, []);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const handleScroll = () => {
//       setScroll(element?.scrollTop || 0);
//     };

//     element.addEventListener("scroll", handleScroll);
//     return () => {
//       element.removeEventListener("scroll", handleScroll);
//     };
//   });

//   const Dialog = useMemo(() => {
//     return () => <ModalBase onClosed={close} isOpen={isOpen} ref={ref} />;
//   }, [isOpen, close]);

//   return useMemo(
//     () => ({
//       isOpen,
//       Dialog,
//       open,
//       close
//     }),
//     [isOpen, Dialog, open, close]
//   );
// };
/* 抽取出useScroll也无效 */
const useScroll = (ref: RefObject) => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      setScroll(element?.scrollTop || 0)
    }

    element.addEventListener("scroll", handleScroll)
    return () => {
      element.removeEventListener("scroll", handleScroll)
    }
  })

  return scroll
}

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const scroll = useScroll(ref)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const Dialog = useMemo(() => {
    return () => <ModalBase onClosed={close} isOpen={isOpen} ref={ref} />
  }, [isOpen, close])

  return useMemo(
    () => ({
      isOpen,
      Dialog,
      open,
      close,
    }),
    [isOpen, Dialog, open, close]
  )
}
