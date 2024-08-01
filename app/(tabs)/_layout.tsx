import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Seacrh',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search-circle-outline' : 'search-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'time-outline' : 'time-outline'} color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="wardrobe"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'time-outline' : 'time-outline'} color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="explore"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'time-outline' : 'time-outline'} color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="profile"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'time-outline' : 'time-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
