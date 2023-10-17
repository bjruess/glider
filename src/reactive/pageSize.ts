import { createRoot, createSignal, onCleanup, onMount } from "solid-js";

const getClientSize = () => {
    return {
        height: document.body.clientHeight,
        width: document.body.clientWidth    
    };
}

const pageSize = () => {

    const [value, setValue] = createSignal(getClientSize())

    onMount(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
    });

    const handleResize = () => {
        setValue(getClientSize());
    }

    const isXl = () => value().width > 1200;
    const isLg = () => value().width > 1024;


    return { isXl, isLg, value };
};

export default createRoot(pageSize);