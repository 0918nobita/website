import { useEffect, useState } from 'react';

type WindowSize = { width: number; height: number };

const getWindowSize: () => WindowSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
});

export const useWindowSize = (): WindowSize => {
    const [size, setSize] = useState<WindowSize>(getWindowSize());

    const handleResize = () => setSize(getWindowSize());

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
};
