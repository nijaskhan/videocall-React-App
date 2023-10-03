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
                <iframe
                    src="https://www.youtube.com/embed/cWDJoK8zw58"
                    height={'100%'}
                    width={'100%'}
                    title='videoStream'
                />
            </GridItem>

            {/* RightSide-panel */}
            <Rightsidepanel isRightPanelThanLg={isRightPanelThanLg} isLargerThanLg={isLargerThanLg} />
        </>
    )
}

export default VideoContainer;
