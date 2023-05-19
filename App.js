<script src="http://localhost:8097"></script>;
import React, {useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';

function App() {
  const today = new Date();
  console.log('양선우:' + today);

  return (
    <SafeAreaView>
      <DateHead date={today} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
