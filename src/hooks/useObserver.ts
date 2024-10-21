import {type MutableRefObject, useEffect} from "react";

export interface IUseObserverOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement> | null;
}
export function useObserver({wrapperRef,triggerRef,callback}: IUseObserverOptions):void{

    useEffect(()=>{
        let currentWrapper = wrapperRef?.current || null;
        let currentTrigger = triggerRef?.current || null;

        let options = {
            root: currentWrapper,
            rootMargin: "0px",
            threshold: 1.0,
        };

        let observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting && callback){
                callback()
            }
        }, options);

        if (currentTrigger) {
            observer.observe(currentTrigger)
        }
        return  ()=>{
            if(observer && currentTrigger) observer.unobserve(currentTrigger);
        }
    },[triggerRef,wrapperRef, callback]);



}