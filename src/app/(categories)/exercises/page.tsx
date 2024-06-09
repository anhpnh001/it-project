'use client'
import * as Blockly from 'blockly'
import BlocklyComponent from '@/components/BlocklyComponent'
import { buttonVariants } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [exercise, setExercise] = useState({
    title: '',
    content: '',
    blocklyXML: '',
  })
  function getWorkspaceXML() {
    const workspace = Blockly.getMainWorkspace()
    const xml = Blockly.Xml.workspaceToDom(workspace)
    removeUnwantedAttributes(xml)
    const xmlText = Blockly.Xml.domToText(xml)
    return xmlText
  }

  useEffect(() => {
    if (exercise.blocklyXML !== '') {
    }
  }, [exercise.blocklyXML])

  function removeUnwantedAttributes(xmlElement: Element) {
    const blocks = xmlElement.getElementsByTagName('block')
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].removeAttribute('x')
      blocks[i].removeAttribute('y')
      blocks[i].removeAttribute('id')
    }
  }

  return (
    <main className="flex container">
      <BlocklyComponent />
      <div className="w-1/3 border p-6">
        <form
          className="form flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            setExercise({
              ...exercise,
              blocklyXML: getWorkspaceXML(),
            })
          }}
        >
          <div className="form-group">
            <h1 id="title" className="w-full px-4 py-2 border">
              Title
            </h1>
          </div>
          <div className="form-group">
            <p id="content" className="w-full px-4 py-2 border h-48">
              Content
            </p>
          </div>
          <button
            type="submit"
            className={buttonVariants({ variant: 'default' })}
          >
            Check
          </button>
        </form>
      </div>
    </main>
  )
}
