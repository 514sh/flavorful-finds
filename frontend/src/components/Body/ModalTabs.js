import {
  Tab,
  Tabs,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels
} from '@chakra-ui/react'
import React from 'react'
import Ingredients from './Ingredients'
import Instructions from './Instructions'

const ModalTabs = ({recipe}) => {
  return(
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>Ingredients</Tab>
        <Tab>Instructions</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="blue.500"
        borderRadius="1px"
      />
      <TabPanels>
        <TabPanel>
          <Ingredients recipe={recipe} />
        </TabPanel>
        <TabPanel>
          <Instructions recipe={recipe} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ModalTabs