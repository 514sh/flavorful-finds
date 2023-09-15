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
    <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList>
        <Tab>Ingredients</Tab>
        <Tab>Instructions</Tab>
      </TabList>
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