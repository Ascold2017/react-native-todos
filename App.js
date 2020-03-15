import React, { useState } from 'react';
import * as Font from 'expo-font'

import { AppLoading } from 'expo';
import { TodoState } from './src/context/todo';
import { Layout } from './src/Layout';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false)

  const loadApp = () => Font.loadAsync({
    'Roboto': require('./assets/Roboto-Regular.ttf'),
    'RobotoBold': require('./assets/Roboto-Bold.ttf')
  })

  if (!isAppReady) return (
    <AppLoading
      startAsync={loadApp}
      onFinish={() => setIsAppReady(true)}
      onError={console.error}
    />
  );

  return (
    <TodoState>
      <Layout />
    </TodoState>
  )
}


