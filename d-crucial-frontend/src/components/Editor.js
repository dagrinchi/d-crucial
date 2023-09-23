"use client"

import React from 'react'

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const Editor = ({ value }) => {
  const [editor] = React.useState(() => withReact(createEditor()))
  const renderElement = React.useCallback(({ attributes, children, element }) => {
    switch (element.type) {
      case 'heading':
        return {
          1: <h1>{children}</h1>,
          2: <h2>{children}</h2>,
          3: <h3>{children}</h3>,
          4: <h4>{children}</h4>,
          5: <h5>{children}</h5>,
          6: <h6>{children}</h6>,
        }[element.level]
      case 'quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'layout':
        return <div {...attributes}>{children}</div>
      default:
        return <p {...attributes}>{children}</p>
    }
  }, [])

  return (
    <Slate editor={editor} initialValue={value}>
      <Editable readOnly renderElement={renderElement} />
    </Slate>
  )
}

export default Editor