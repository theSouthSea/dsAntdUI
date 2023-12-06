import { useEffect } from 'react'
import { ItemsList } from './slow-components'
export const useLogOnRender = (name: string) => {
  useEffect(() => {
    console.info('Re-render: ', name)
  })
}

export const Issues = () => {
  useLogOnRender('Issues')
  return <div className="issues">List of issues</div>
}

export const Projects = () => {
  console.log('PROJECTS TRIGGER')
  useLogOnRender('Projects')

  return (
    <div className="projects">
      My projects: very slow list of them
      <br />
      <br />
      <ItemsList />
    </div>
  )
}

export const Reports = () => {
  console.log('REPORTS TRIGGER')
  useLogOnRender('Reports')

  return <div className="reports">Available reports</div>
}
