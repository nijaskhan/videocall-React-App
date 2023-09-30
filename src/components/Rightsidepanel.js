import { GridItem } from '@chakra-ui/react';
import React from 'react';

const Rightsidepanel = ({ isRightPanelThanLg, isLargerThanLg }) => {
    return (
        <>
            <GridItem
                display={isRightPanelThanLg ? "block" : "none"}
                colSpan={isLargerThanLg ? '4' : '5'}
                bg='papayawhip'
                borderRadius={12} />
            <GridItem
                display={isRightPanelThanLg ? "block" : "none"}
                colSpan={isLargerThanLg ? '4' : '5'}
                bg='papayawhip'
                borderRadius={12}
            />
        </>
    )
}

export default Rightsidepanel;
