import React from 'react';
import {
    BoxGeometry,
    DirectionalLight,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from 'three';

import { useWindowSize } from './hooks/useWindowSize';

const Three: React.FC = () => {
    const { width, height } = useWindowSize();

    const onCanvasLoaded = (canvas: HTMLCanvasElement | null): void => {
        if (canvas === null) return;

        const scene = new Scene();

        const camera = new PerspectiveCamera(
            45,
            canvas.clientWidth / canvas.clientHeight,
            1,
            10000
        );
        camera.position.set(0, 0, 1000);

        const geometry = new BoxGeometry(500, 500, 500);
        const material = new MeshStandardMaterial({ color: 0x0000ff });
        const box = new Mesh(geometry, material);
        scene.add(box);

        const light = new DirectionalLight(0xffffff);
        light.intensity = 2;
        light.position.set(1, 1, 1);
        scene.add(light);

        const renderer = new WebGLRenderer({ canvas, antialias: true });
        renderer.setClearColor('#1d1d1d');
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.render(scene, camera);

        tick();

        function tick(): void {
            window.requestAnimationFrame(tick);

            box.rotation.x += 0.01;
            box.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
    };

    return (
        <div>
            <canvas ref={onCanvasLoaded}></canvas>
        </div>
    );
};

export default Three;
