import React from 'react'
import TabsForSections from './components/TabsForSections/TabsForSections.jsx'
import Selector from './components/Selector/Selector.jsx'
import FreckleRemovalService from './components/ServiceInformation/ServiceInformation.jsx'
import ReuseableFreckleRemovalServiceItem from './components/ReuseableServiceInformationItem/ReuseableServiceInformationItem.jsx'
import ServiceInformation from './components/ServiceInformation/ServiceInformation.jsx'

const App = () => {
  return (
    <div>
      {/* <TabsForSections/> */}
      {/* <Selector/> */}
      {/* <FreckleRemovalService/> */}
      <ServiceInformation/>
      {/* <ReuseableFreckleRemovalServiceItem/> */}
    </div>
  )
}

export default App