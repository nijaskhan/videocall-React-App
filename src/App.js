import { Box, Grid, useMediaQuery } from '@chakra-ui/react';
import Sidepanel from './components/Sidepanel';
import VideoContainer from './components/VideoContainer';
import './App.css';

const App = () => {
  const [isLargerThanLg] = useMediaQuery("(min-width: 1024px)");
  const [isRightPanelThanLg] = useMediaQuery("(min-width: 830px)");

  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid
          h='100vh'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(18, 1fr)'
          gap={2}
          padding={3}
        >
          <Sidepanel isLargerThanLg={isLargerThanLg} />
          <VideoContainer isLargerThanLg={isLargerThanLg} isRightPanelThanLg={isRightPanelThanLg} />
        </Grid>
      </Box>
    </>
  );
}

export default App;
