import React from 'react';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

import { useWindowSize } from './hooks/useWindowSize';

const Three: React.FC = () => {
    const { width, height } = useWindowSize();

    const onCanvasLoaded = (canvas: HTMLCanvasElement | null): void => {
        if (canvas === null) return;

        const scene = new Scene();

        const camera = new PerspectiveCamera(
            75,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );

        const renderer = new WebGLRenderer({ canvas, antialias: true });
        renderer.setClearColor('#1d1d1d');
        renderer.setSize(width, height);
        renderer.render(scene, camera);
    };

    return (
        <div>
            <canvas ref={onCanvasLoaded}></canvas>
        </div>
    );
};

export default Three;
