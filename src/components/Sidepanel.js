import { Grid, GridItem, Image } from '@chakra-ui/react';
import avatarIcon from '../images/avatar.svg';
import icon from '../images/videoSidepanel.svg';
import icon1 from '../images/alerticon.svg';
import calenderIcon from '../images/calender.svg';
import settingsIcon from '../images/settings.svg';
import videoIcon from '../images/videoIcon.svg';
import icon3 from '../images/icon3.svg'
import React from 'react';

const Sidepanel = ({ isLargerThanLg }) => {
    return (
        <>
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
                            <Image src={icon} style={{ paddingTop: '24px', width: '50px', height: '50px', cursor: 'pointer' }} alt="icon" />
                            <Image src={icon1} style={{ paddingTop: '24px', width: '50px', height: '50px', cursor: 'pointer' }} alt="icon" />
                            <span
                                style={{
                                    borderRadius: '50%',
                                    backgroundColor: '#19A6F4',
                                    width: '50px', height: '50px',
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    marginTop: '24px', 
                                    cursor: 'pointer'
                                }}>
                                <Image src={videoIcon} alt="icon" />
                            </span>
                            <Image src={icon3} style={{ paddingTop: '24px', width: '50px', height: '50px', cursor: 'pointer' }} alt="icon" />
                            <Image src={calenderIcon} style={{ paddingTop: '24px', width: '50px', height: '50px', cursor: 'pointer' }} alt="icon" />
                            <Image src={settingsIcon} style={{ paddingTop: '24px', width: '50px', height: '50px', cursor: 'pointer' }} alt="icon" />
                        </span>
                    </GridItem>
                </Grid>
            </GridItem>
        </>
    )
}

export default Sidepanel;
