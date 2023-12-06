import { useState, useTransition, memo } from 'react'
import './styles.scss'
import { TabButton } from './components/tab-button'
import { Issues, Projects, Reports } from './components/screens'

type Screens = 'issues' | 'projects' | 'reports'

const IssuesMemo = memo(Issues)
const ProjectsMemo = memo(Projects)
const ReportsMemo = memo(Reports)

export default function App() {
  const [tab, setTab] = useState<Screens>('issues')
  const [isPending, startTransition] = useTransition()

  const onTabClick = (tab: Screens) => {
    startTransition(() => {
      setTab(tab)
    })
  }

  return (
    <div className="container">
      <div className="tabs">
        <TabButton isActive={tab === 'issues'} onClick={() => onTabClick('issues')} name="Issues" />
        <TabButton isActive={tab === 'projects'} onClick={() => onTabClick('projects')} name="Projects" />
        <TabButton isActive={tab === 'reports'} onClick={() => onTabClick('reports')} name="Reports" />
      </div>
      <div className="content">
        {tab === 'issues' && <IssuesMemo />}
        {tab === 'projects' && <ProjectsMemo />}
        {tab === 'reports' && <ReportsMemo />}
      </div>
    </div>
  )
}
