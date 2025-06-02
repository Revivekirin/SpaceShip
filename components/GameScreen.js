import React, { useRef, useEffect } from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import { PerspectiveCamera, Scene, BoxGeometry, MeshStandardMaterial, Mesh, AmbientLight } from 'three';

export default function GameScreen() {
  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    scene.add(new AmbientLight(0xffffff, 1));

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshStandardMaterial({ color: 'skyblue' });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    const render = () => {
      requestAnimationFrame(render);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    render();
  };

  return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
}


// import React, { useState } from 'react';
// import { StyleSheet, View, Button, Text, Modal } from 'react-native';
// import { GameEngine } from 'react-native-game-engine';
// import { Character } from './entities/Character';
// import { MoveSystem } from './systems/MoveSystem';
// import { useNavigation } from '@react-navigation/native';

// export default function GameScreen() {
//   const [engineRef, setEngineRef] = useState(null);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const navigation = useNavigation();

//   const handleEvent = (e) => {
//     if (e.type === 'show-popup') setPopupVisible(true);
//     if (e.type === 'hide-popup') setPopupVisible(false);
//     if (e.type === 'go-to') navigation.navigate(e.target);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <GameEngine
//         ref={(ref) => setEngineRef(ref)}
//         style={styles.container}
//         systems={[MoveSystem]}
//         onEvent={handleEvent}
//         entities={{
//           character: {
//             position: [100, 100],
//             direction: 'down',
//             nearEmotionZone: false,
//             renderer: Character
//           }
//         }}
//       />

//       <Modal visible={popupVisible} transparent>
//         <View style={styles.popup}><Text style={styles.popupText}>🧠 감정 기록 컴퓨터 접근</Text></View>
//       </Modal>

//       <View style={styles.controls}>
//         <View style={styles.row}>
//           <Button title="⬆️" onPress={() => engineRef?.dispatch({ type: 'move-up' })} />
//         </View>
//         <View style={styles.row}>
//           <Button title="⬅️" onPress={() => engineRef?.dispatch({ type: 'move-left' })} />
//           <Button title="➡️" onPress={() => engineRef?.dispatch({ type: 'move-right' })} />
//         </View>
//         <View style={styles.row}>
//           <Button title="⬇️" onPress={() => engineRef?.dispatch({ type: 'move-down' })} />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black'
//   },
//   controls: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 10
//   },
//   row: {
//     flexDirection: 'row',
//     marginVertical: 5,
//     gap: 10
//   },
//   popup: {
//     position: 'absolute',
//     top: 80,
//     left: 50,
//     right: 50,
//     backgroundColor: 'rgba(0,0,0,0.8)',
//     padding: 20,
//     borderRadius: 10
//   },
//   popupText: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center'
//   }
// });
