import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

/**RootLayout - layout raiz do aplicativo  */

export default function RootLayout() {

  const colorScheme = useColorScheme?.();

  return (
    <>
      {/* GestureHandlerRootView: necessário para o react-native-gesture-handler funcionar */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* envolve todo app para gestos funcionarem (swipes, onPress, etc) */}
        {/* ThemeProvider: aplicar tema (escuro/claro) */}
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>{/* Esconder o header padrão. usea headers custom nas telas se precisar */}
            {/* Tela inicial - Splash screen que redireciona para login */}
            <Stack.Screen name="index" />
           {/*Grupoauth) - contem telas de autenticação (login, cadastro, etec) */}
            <Stack.Screen name= "(auth)" />
            <Stack.Screen name="(tabs)" />

            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GestureHandlerRootView>
    </>
  );
}
