import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';

import { UserContext } from '../../contexts';

import { Box, UserHeader } from '../../components';

import getStyles from './styles';

const Home = () => {
  const { user } = useContext(UserContext);

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Box style={styles.boundaries}>
          <UserHeader />
        </Box>
      </ScrollView>
    </View>
  );
};

export default Home;
