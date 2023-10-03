import { GridItem } from '@chakra-ui/react';
import React from 'react';
import Rightsidepanel from './Rightsidepanel';

const VideoContainer = ({ isRightPanelThanLg, isLargerThanLg }) => {
    return (
        <>
            <GridItem
                rowSpan={2}
                colSpan={isRightPanelThanLg ? '13' : '18'}
                bg='papayawhip'
                borderRadius={12}
            >
                {/* video Iframe or videochat live stream goes here... */}
            </GridItem>

            {/* RightSide-panel */}
            <Rightsidepanel isRightPanelThanLg={isRightPanelThanLg} isLargerThanLg={isLargerThanLg} />
        </>
    )
}

export default VideoContainer;
