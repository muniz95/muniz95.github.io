import ReactGA from 'react-ga'

export const searchClickTrack = () => {
  ReactGA.event({
    category: 'search',
    action: 'click',
    label: 'Search na Menu Bar'
  })
}

export const courseClickTrack = () => {
  ReactGA.event({
    category: 'cursos',
    action: 'click',
    label: 'Link Curso na Menu Bar'
  })
}

export const themeTracker = theme => {
  ReactGA.event({
    category: 'theme',
    action: 'view',
    label: `Usa ${theme} theme`,
    nonInteraction: true
  })
}

export const displayTracker = display => {
  ReactGA.event({
    category: 'display',
    action: 'view',
    label: `Usa ${display} view`,
    nonInteraction: true
  })
}

export const topClickTrack = () => {
  ReactGA.event({
    category: 'top',
    action: 'click',
    label: `Top na Menu Bar`
  })
}
