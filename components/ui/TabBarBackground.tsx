import { BlurView } from 'expo-blur';

function TabBarBackground() {
  return (
    <BlurView
      tint="dark"
      intensity={50}
      style={{ flex: 1 }}
    />
  );
}

export default TabBarBackground;
