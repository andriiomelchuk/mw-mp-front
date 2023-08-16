import {useEffect} from "react";

export const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(
        () => {
            const listener = (e: any) => {
                if(!ref.current || ref.current.contains(e.target)) return
                handler(e)
            }

            document.addEventListener('mousedown', listener)
            document.addEventListener('touchstart', listener)

            return () => {
                document.addEventListener('mousedown', listener)
                document.addEventListener('touchstart', listener)
            }
        },
        [ ref, handler ]
    )
}

export default useOnClickOutside