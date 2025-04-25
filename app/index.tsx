import { Text, View } from "react-native";
import { Link } from 'expo-router';


export default function Index() {
  return (
    <View
     className="flex-1 justify-center items-center"
    >
      <Text className="font-bold text-accent text-5xl">Welcome!!!</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="./movie/avengerssss">Avengers Link</Link>

    </View>
  );
}
