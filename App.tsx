import './global.css';

import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from './src/theme/ThemeProvider';
import {store} from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {StyleSheet} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <ThemeProvider>
            <AppNavigator />
            {/* //====== AppNavigator For Avoid Login Screen , DIRECT ACCESS TO HOME SCREEN// */}
            {/* <RootNavigator /> //======For loign Screen/// */}
          </ThemeProvider>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
