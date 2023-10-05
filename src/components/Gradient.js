import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Gradient = ({ position, rotationSpeed, scale, color }) => {
	const ref = useRef();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);
		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setClearColor(0x000000, 0);
		renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
		ref.current.appendChild(renderer.domElement);

		const geometry = new THREE.BoxGeometry(1, 1, 0.3);
		const material = new THREE.MeshBasicMaterial({ color });
		const rectangle = new THREE.Mesh(geometry, material);
		scene.add(rectangle);

		rectangle.scale.set(scale.x, scale.y, scale.z);

		camera.position.z = 5;

		const animate = () => {
			requestAnimationFrame(animate);

			rectangle.rotation.x += rotationSpeed.x;
			rectangle.rotation.y += rotationSpeed.y;
			rectangle.rotation.z += rotationSpeed.z;

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			ref.current.removeChild(renderer.domElement);
		};
	}, [rotationSpeed, scale, color]);

	return (
		<div
			ref={ref}
			style={{ position: 'absolute', ...position, filter: 'blur(60px)' }}
		/>
	);
};

export default Gradient;
