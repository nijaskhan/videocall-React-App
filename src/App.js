import { Box, Grid, GridItem, Image, useMediaQuery } from '@chakra-ui/react';
import avatarIcon from './images/avatar.svg';
import icon from './images/videoSidepanel.svg';
import icon1 from './images/alerticon.svg';
import calenderIcon from './images/calender.svg';
import settingsIcon from './images/settings.svg';
import videoIcon from './images/videoIcon.svg';
import icon3 from './images/icon3.svg';
import './App.css';

function App() {

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
          {/* sidebar */}
          <GridItem
            rowSpan={2}
            colSpan={1}
            bg="#f8f8f8"
            borderRadius={12}
            border="solid"
            borderColor="#e0e0e0"
            paddingY={4}
            paddingX={1}
            display={isLargerThanLg ? "block" : "none"}
          >
            <Grid
              h='100%'
              templateRows='repeat(10, 1fr)'
            >
              <GridItem
                rowSpan={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={avatarIcon} alt="Your Image" />
              </GridItem>
              <GridItem
                rowSpan={7}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <span style={{ display: 'block' }}>
                  <Image src={icon} style={{ paddingTop: '24px', width: '50px', height: '50px' }} alt="Your Image" />
                  <Image src={icon1} style={{ paddingTop: '24px', width: '50px', height: '50px' }} alt="Your Image" />
                  <span style={{ display: 'block', borderRadius: '50%', backgroundColor: '#19A6F4', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '24px' }}>
                    <Image src={videoIcon} alt="Your Image" />
                  </span>
                  <Image src={icon3} style={{ paddingTop: '24px', width: '50px', height: '50px' }} alt="Your Image" />
                  <Image src={calenderIcon} style={{ paddingTop: '24px', width: '50px', height: '50px' }} alt="Your Image" />
                  <Image src={settingsIcon} style={{ paddingTop: '24px', width: '50px', height: '50px' }} alt="Your Image" />
                </span>

              </GridItem>
            </Grid>
          </GridItem>
          <GridItem rowSpan={2} colSpan={isRightPanelThanLg ? '13' : '18'} bg='papayawhip' borderRadius={12} />
          <GridItem display={isRightPanelThanLg ? "block" : "none"} colSpan={isLargerThanLg ? '4' : '5'} bg='papayawhip' borderRadius={12} />
          <GridItem display={isRightPanelThanLg ? "block" : "none"} colSpan={isLargerThanLg ? '4' : '5'} bg='papayawhip' borderRadius={12} />
        </Grid>




      </Box>
    </>
  );
}

export default App;
