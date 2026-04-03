import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function GlobeMVP() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      2000
    );
    camera.position.z = 300;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Globe
    const globe = new ThreeGlobe()
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png');

    // 20 countries
    const countries = [
      { name: "Saudi Arabia", lat: 25, lng: 45 },
      { name: "United States", lat: 38, lng: -97 },
      { name: "Canada", lat: 60, lng: -95 },
      { name: "Brazil", lat: -10, lng: -55 },
      { name: "United Kingdom", lat: 55, lng: -3 },
      { name: "France", lat: 46.2, lng: 2.2 },
      { name: "Germany", lat: 51, lng: 9 },
      { name: "India", lat: 20, lng: 77 },
      { name: "China", lat: 35, lng: 103 },
      { name: "Japan", lat: 36, lng: 138 },
      { name: "Australia", lat: -25, lng: 133 },
      { name: "Russia", lat: 61, lng: 105 },
      { name: "Mexico", lat: 23, lng: -102 },
      { name: "Italy", lat: 42.8, lng: 12.6 },
      { name: "South Africa", lat: -30, lng: 24 },
      { name: "Egypt", lat: 26, lng: 30 },
      { name: "Argentina", lat: -34, lng: -64 },
      { name: "Nigeria", lat: 10, lng: 8 },
      { name: "Spain", lat: 40, lng: -4 },
      { name: "South Korea", lat: 37, lng: 127 }
    ];

    globe.pointsData(countries)
      .pointLat(d => d.lat)
      .pointLng(d => d.lng)
      .pointColor(() => 'red')
      .pointAltitude(0.02)
      .pointRadius(1)
      .onPointClick(d => {
        navigator.clipboard.writeText(d.name);
        alert(`Copied: ${d.name}`);
      });

    scene.add(globe);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;
    controls.enablePan = false;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Responsive
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
}
