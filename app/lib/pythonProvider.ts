//importScripts('https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js')

import { loadPyodide as loadPyodideType, PyodideInterface } from 'pyodide'

declare global {
  interface Window {
    loadPyodide: typeof loadPyodideType
    pyodide: PyodideInterface
  }
}

export async function testOutput() {
  let pyodide = await self.loadPyodide();
  pyodide.runPython(`
    x = [3, 4]
  `);
  const pyX = pyodide.globals.get('x').toJs();
  return pyX;
}
