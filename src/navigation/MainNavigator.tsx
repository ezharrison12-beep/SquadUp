import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DiscoverScreen, ProfileScreen } from '../screens';
import { colors } from '../theme';
import { MainTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.slate,
        tabBarStyle: { borderTopColor: colors.border, height: 84, paddingBottom: 24, paddingTop: 12 },
        tabBarLabelStyle: { fontSize: 13, fontWeight: '800' },
      }}
    >
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
