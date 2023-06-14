import React from 'react'
import TabsForSections from './components/TabsForSections/TabsForSections.jsx'
import Selector from './components/Selector/Selector.jsx'
import FreckleRemovalService from './components/ServiceInformation/ServiceInformation.jsx'
import ReuseableFreckleRemovalServiceItem from './components/ReuseableServiceInformationItem/ReuseableServiceInformationItem.jsx'
import ServiceInformation from './components/ServiceInformation/ServiceInformation.jsx'
import StepBar from './components/StepBar/StepBar.jsx'
import AnswerQuestionSection from './components/AnswerQuestionSection/AnswerQuestionSection.jsx'

const App = () => {
  return (
    <div>
      {/* <TabsForSections/> */}
      {/* <Selector/> */}
      {/* <FreckleRemovalService/> */}
      {/* <ServiceInformation/> */}
      {/* <ReuseableFreckleRemovalServiceItem/> */}
      {/* <StepBar/> */}
      <AnswerQuestionSection/>
    </div>
  )
}

export default App