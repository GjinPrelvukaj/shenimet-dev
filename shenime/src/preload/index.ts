import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation needs to be enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //Todo
  })
} catch (error) {
  console.log(error)
}
