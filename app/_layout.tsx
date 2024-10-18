import { Link, Slot } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const _layout = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "90%" }}>
        <Slot />
      </View>
      <View>
        <Link href="/account">
          <Text>take me to accounts page</Text>
        </Link>
        <Link href="/">
          <Text>take me to fore you page</Text>
        </Link>
        cd
        <Link href="/explore">
          <Text>take me to explore page</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};
