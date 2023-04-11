import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const textureLoader = new THREE.TextureLoader();
const backgroup = textureLoader.load('assets/background.jpg')
const sunTextureMap = textureLoader.load('assets/8k_sun.jpg');
const earthTextureMap = textureLoader.load('assets/texture.jpg');
const moonTextureMap = textureLoader.load('assets/moon.jpg');
const mercuryTextureMap = textureLoader.load('assets/mercury.png');
const venusTextureMap = textureLoader.load('assets/venus.jpg');
const marsTextureMap = textureLoader.load('assets/mars.webp');
const jupiterTextureMap = textureLoader.load('assets/jupiter.jpg');
const saturnTextureMap = textureLoader.load('assets/saturn.webp');

const scene = new THREE.Scene();
scene.background = backgroup;

const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 4000);
camera.position. set (0, 30, 500); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const plight = new THREE. PointLight (0xffffff); // shadows
scene. add (plight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', renderer.render(scene, camera));

/* sun */
const geometry = new THREE.SphereGeometry( 38 );
const material = new THREE.MeshBasicMaterial( { map: sunTextureMap } );
const sun = new THREE.Mesh( geometry, material );
scene.add( sun );

/* mercury */
const mercury_geometry = new THREE.SphereGeometry( 6 );
const mercury_material = new THREE.MeshBasicMaterial( { map: mercuryTextureMap } );
const mercury = new THREE.Mesh( mercury_geometry, mercury_material );
mercury.position.set(75, 0, 0)
scene.add( mercury );

/* mercury orbit */
const mercuryOrbit = new THREE.EllipseCurve(0, 0, 75, 100, 0, 2 * Math.PI, false, 0);

const mercuryOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
const mercuryOrbitGeometry = new THREE.BufferGeometry().setFromPoints(mercuryOrbit.getPoints(200));
const mercuryOrbitMesh = new THREE.Line(mercuryOrbitGeometry, mercuryOrbitMaterial);
mercuryOrbitMesh.rotateX(-Math.PI/2)
scene.add(mercuryOrbitMesh);

/* venus */
const venus_geometry = new THREE.SphereGeometry( 12 );
const venus_material = new THREE.MeshBasicMaterial( { map: venusTextureMap } );
const venus = new THREE.Mesh( venus_geometry, venus_material );
venus.position.set(110, 0, 0)
scene.add( venus );

/* venus orbit */
const venusOrbit = new THREE.EllipseCurve(0, 0, 110, 150, 0, 2 * Math.PI, false, 0);

const venusOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
const venusOrbitGeometry = new THREE.BufferGeometry().setFromPoints(venusOrbit.getPoints(200));
const venusOrbitMesh = new THREE.Line(venusOrbitGeometry, venusOrbitMaterial);
venusOrbitMesh.rotateX(-Math.PI/2)
scene.add(venusOrbitMesh);


/* mars */
const mars_geometry = new THREE.SphereGeometry( 7 );
const mars_material = new THREE.MeshBasicMaterial( { map: marsTextureMap } );
const mars = new THREE.Mesh( mars_geometry, mars_material );
mars.position.set(200, 0, 0)
scene.add( mars );

/* mars orbit */
const marsOrbit = new THREE.EllipseCurve(0, 0, 200, 280, 0, 2 * Math.PI, false, 0);

const marsOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
const marsOrbitGeometry = new THREE.BufferGeometry().setFromPoints(marsOrbit.getPoints(200));
const marsOrbitMesh = new THREE.Line(marsOrbitGeometry, marsOrbitMaterial);
marsOrbitMesh.rotateX(-Math.PI/2)
scene.add(marsOrbitMesh);

/* jupiter */
const jupiter_geometry = new THREE.SphereGeometry( 20 );
const jupiter_material = new THREE.MeshBasicMaterial( { map: jupiterTextureMap } );
const jupiter = new THREE.Mesh( jupiter_geometry, jupiter_material );
jupiter.position.set(250, 0, 0)
scene.add( jupiter );

/* jupiter orbit */
const jupiterOrbit = new THREE.EllipseCurve(0, 0, 250, 320, 0, 2 * Math.PI, false, 0);

const jupiterOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
const jupiterOrbitGeometry = new THREE.BufferGeometry().setFromPoints(jupiterOrbit.getPoints(200));
const jupiterOrbitMesh = new THREE.Line(jupiterOrbitGeometry, jupiterOrbitMaterial);
jupiterOrbitMesh.rotateX(-Math.PI/2)
scene.add(jupiterOrbitMesh);

/* saturn */
const saturn_geometry = new THREE.SphereGeometry( 17 );
const saturn_material = new THREE.MeshBasicMaterial( { map: saturnTextureMap } );
const saturn = new THREE.Mesh( saturn_geometry, saturn_material );
saturn.position.set(300, 0, 0)
scene.add( saturn );

/* ring */
const saturnRing = new THREE.EllipseCurve(300, 0, 23, 23, 0, 2 * Math.PI, false, 0);
const saturnRingMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
const saturnRingGeometry = new THREE.BufferGeometry().setFromPoints(saturnRing.getPoints(200));
const saturnRingMesh = new THREE.Line(saturnRingGeometry, saturnRingMaterial);
saturnRingMesh.rotateX(-Math.PI/2)
scene.add(saturnRingMesh);

/* saturn orbit */
const saturnOrbit = new THREE.EllipseCurve(0, 0, 300, 360, 0, 2 * Math.PI, false, 0);

const saturnOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
const saturnOrbitGeometry = new THREE.BufferGeometry().setFromPoints(saturnOrbit.getPoints(200));
const saturnOrbitMesh = new THREE.Line(saturnOrbitGeometry, saturnOrbitMaterial);
saturnOrbitMesh.rotateX(-Math.PI/2)
scene.add(saturnOrbitMesh);

/* earth */
const e_material = new THREE.MeshBasicMaterial( { map: earthTextureMap } );
const e_geometry = new THREE.SphereGeometry( 13 );
const earth = new THREE.Mesh( e_geometry, e_material );
earth.position.set(150, 0, 0)


/* moon */
const moon_geometry = new THREE.SphereGeometry( 4 );
const moon_material = new THREE.MeshBasicMaterial( { map: moonTextureMap } );
const moon = new THREE.Mesh( moon_geometry, moon_material );
moon.position.set(160, 0, 0)
earth.add( moon );
scene.add( earth );

/* orbit */
// Create the Earth's orbit path
const earthOrbit = new THREE.EllipseCurve(0, 0, 150, 230, 0, 2 * Math.PI, false, 0);

// Create the Earth's orbit path mesh
const earthOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
const earthOrbitGeometry = new THREE.BufferGeometry().setFromPoints(earthOrbit.getPoints(200));
const earthOrbitMesh = new THREE.Line(earthOrbitGeometry, earthOrbitMaterial);
earthOrbitMesh.rotateX(-Math.PI/2)
scene.add(earthOrbitMesh);

const loopTime = 1; // 1 year for each orbit around sun
const mercuryOrbitSpeed = 0.00005;
const venusOrbitSpeed = 0.000018;
const marsOrbitSpeed = 0.000005;
const jupiterOrbitSpeed = 0.000001;
const saturnOrbitSpeed = 0.0000005;
const earthOrbitSpeed = 0.00001;
const moonOrbitRadius = 30;
const moonOrbitSpeed = 80;

function animate() {
	requestAnimationFrame( animate );

	/* sun */
	sun.rotation.y += 0.005;

	/* mercury */
	mercury.rotation.y -= 0.003;
	const mercury_time = mercuryOrbitSpeed * performance.now();
	const mercury_t = (mercury_time % loopTime) / loopTime;
	let mercury_p = mercuryOrbit.getPoint(-mercury_t);
	mercury.position.x = mercury_p.x;
	mercury.position.z = mercury_p.y;
	
	/* venus */
	venus.rotation.y += 0.003;
	const venus_time = venusOrbitSpeed * performance.now();
	const venus_t = (venus_time % loopTime) / loopTime;
	let venus_p = venusOrbit.getPoint(-venus_t);
	venus.position.x = venus_p.x;
	venus.position.z = venus_p.y;

	/* mars */
	mars.rotation.y += 0.01;
	const mars_time = marsOrbitSpeed * performance.now();
	const mars_t = (mars_time % loopTime) / loopTime;
	let mars_p = marsOrbit.getPoint(-mars_t);
	mars.position.x = mars_p.x;
	mars.position.z = mars_p.y;

	/* jupiter */
	jupiter.rotation.y += 0.02;
	const jupiter_time = jupiterOrbitSpeed * performance.now();
	const jupiter_t = (jupiter_time % loopTime) / loopTime;
	let jupiter_p = jupiterOrbit.getPoint(-jupiter_t);
	jupiter.position.x = jupiter_p.x;
	jupiter.position.z = jupiter_p.y;

	/* saturn */
	// saturn.rotation.y += 0.01;
	// const saturn_time = saturnOrbitSpeed * performance.now();
	// const saturn_t = (saturn_time % loopTime) / loopTime;
	// let saturn_p = saturnOrbit.getPoint(-saturn_t);
	// saturn.position.x = saturn_p.x;
	// saturn.position.z = saturn_p.y;


	/* earth */
	earth.rotation.y += 0.01;
	const time = earthOrbitSpeed * performance.now();
	const t = (time % loopTime) / loopTime;
	let p = earthOrbit.getPoint(-t);
	earth.position.x = p.x;
	earth.position.z = p.y;

	/* moon */
	moon.position.x = -Math.cos(time * moonOrbitSpeed) * moonOrbitRadius;
	moon.position.z = -Math.sin(time * moonOrbitSpeed) * moonOrbitRadius;

	renderer.render( scene, camera );
}


animate();

window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}
