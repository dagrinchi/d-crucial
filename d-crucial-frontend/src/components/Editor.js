"use client"

import React from 'react'
import Image from 'next/image'

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const Editor = ({ value }) => {
  const [editor] = React.useState(() => withReact(createEditor()))
  const renderElement = React.useCallback(({ attributes, children, element }) => {
    switch (element.type) {
      case 'heading':
        return {
          1: <h1 {...attributes} className="text-h1 font-medium text-center mb-4">{children}</h1>,
          2: <h2 {...attributes} className="text-h2 font-medium text-center mb-2">{children}</h2>,
          3: <h3 {...attributes} className="text-h3 font-medium text-center mb-2">{children}</h3>,
          4: <h4 {...attributes} className="text-h4 font-medium text-center mb-2">{children}</h4>,
          5: <h5 {...attributes} className="text-h5 font-medium text-center mb-2">{children}</h5>,
          6: <h6 {...attributes} className="text-h6 font-medium text-center mb-2">{children}</h6>,
        }[element.level]
      case 'quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'layout':
        return <div {...attributes} className={`flex flex-row gap-6`}>{children}</div>
      case 'layout-area':
        return <div {...attributes} className="flex flex-col items-center">{children}</div>
      case 'paragraph':
        return <p {...attributes} className="text-paragraph text-justify mb-4">{children}</p>
      case 'relationship':
        return <Image className="rounded-lg shadow-md overflow-hidden" src={element.data.data.file.url} alt={element.data.data.file} width={367} height={275} />
      default:        
        return <></>
    }
  }, [])

  return (
    <Slate editor={editor} initialValue={value}>
      <Editable readOnly renderElement={renderElement} />
    </Slate>
  )
}

export default Editor