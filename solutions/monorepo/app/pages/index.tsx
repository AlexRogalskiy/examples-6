import { useState, useEffect } from 'react'
import { Layout, Page, Text, List, Code } from '@vercel/edge-functions-ui'
import { Button } from '@company/ui'
import { matchingTextColor, randomColor } from '@company/utils'

export default function Index() {
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const changeColor = () => {
    const bg = randomColor()
    setBgColor(bg)
    setTextColor(matchingTextColor(bg))
  }

  useEffect(changeColor, [])

  return (
    <Page>
      <Text variant="h1" className="mb-6">
        Monorepo
      </Text>
      <Text className="mb-4">
        In this monorepo app we have a single site with two installed
        dependencies that are available in the same repository.
      </Text>
      <List className="mb-4">
        <li>
          <Code>app</Code> is the current Next.js site you're looking at
        </li>
        <li>
          <Code>packages/ui</Code> is a package that exports the button you see
          below
        </li>
        <li>
          <Code>packages/utils</Code> is a package that exports functions to
          generate random colors. Click the button to see it in action
        </li>
      </List>
      {bgColor && textColor && (
        <Button
          style={{
            backgroundColor: bgColor,
            color: textColor,
            borderColor: textColor,
          }}
          onClick={changeColor}
        >
          Change Color
        </Button>
      )}
    </Page>
  )
}

Index.Layout = Layout
