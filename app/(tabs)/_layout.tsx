import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props}/>;
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.app.white,
        headerShown: false,
        tabBarStyle:{
          backgroundColor:Colors.app.black,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => <TabBarIcon name="home" color={focused ? Colors.app.green : Colors.app.white}
          />
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Senhas',
          tabBarIcon: ({focused}) => <TabBarIcon name="lock" color={focused ? Colors.app.green : Colors.app.white}
          />,
        }}
      />
    </Tabs>
  );
}
