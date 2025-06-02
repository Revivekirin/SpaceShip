import React from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';

export default function AstronautViewer() {
  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={async (gl) => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
          0.1,
          1000
        );
        camera.position.z = 2;

        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        // 단순한 3D 박스 (우주복 대체용)
        const geometry = new THREE.BoxGeometry(1, 1.5, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x66ccff });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // 애니메이션 루프
        const animate = () => {
          requestAnimationFrame(animate);
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        animate();
      }}
    />
  );
}
