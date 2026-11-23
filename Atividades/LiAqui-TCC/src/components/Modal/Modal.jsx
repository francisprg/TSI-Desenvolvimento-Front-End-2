import { useRef } from "react";
import { createPortal } from "react-dom";



export default function Modal ({title, children, close }) {

    const outClicked = useRef(null);

    return createPortal(
        
        <div className="" onClick={e => e.target == outClicked.current && close()} ref={outClicked}>
            <div onClick={() => {}}></div>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
        </div>
   , document.body)







}