import React from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'

// TODO: Move to separate file and return empty component in production.
const DevTools = createDevTools(
  <DockMonitor
    changePositionKey='ctrl-q'
    defaultIsVisible={ false }
    toggleVisibilityKey='ctrl-h'
  >
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

export default DevTools
