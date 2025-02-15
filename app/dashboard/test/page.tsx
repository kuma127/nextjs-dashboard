'use client'

import Codeblock from '@/app/ui/codeblock'
import { PythonProvider } from 'react-py'

export default function Page() {
  return (
    <PythonProvider>
      <div
        style={{
          margin: '2em 1em',
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        }}
      >
        <h1>Next.js + react-py</h1>
        <div style={{ marginTop: '2em', marginBottom: '2em' }}>
          <Codeblock />
        </div>
        <hr />
      </div>
    </PythonProvider>
  )
}