'use client'
import * as Blockly from 'blockly'
import BlocklyComponent from '@/components/BlocklyComponent'
import { buttonVariants } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [exercise, setExercise] = useState({
    title: '',
    content: '',
    blocklyXML: '',
  })
  function getWorkspaceXML() {
    const workspace = Blockly.getMainWorkspace()
    const xml = Blockly.Xml.workspaceToDom(workspace)
    const newXml = removeUnwantedAttributes(xml)
    const xmlText = Blockly.Xml.domToText(newXml)
    return xmlText
  }

  useEffect(() => {
    if (exercise.blocklyXML !== '') {
      createExercise()
    }
  }, [exercise.blocklyXML])

  function createExercise() {
    fetch('/api/exercises/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercise),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  function removeUnwantedAttributes(xmlElement: Element) {
    const newXml = xmlElement.cloneNode(true) as Element
    const blocks = newXml.getElementsByTagName('*')
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].removeAttribute('x')
      blocks[i].removeAttribute('y')
      blocks[i].removeAttribute('id')
    }
    return newXml
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
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="w-full px-4 py-2 border"
              onChange={(e) =>
                setExercise({ ...exercise, title: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <textarea
              id="content"
              name="content"
              placeholder="Content"
              className="w-full px-4 py-2 border h-48"
              onChange={(e) =>
                setExercise({ ...exercise, content: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className={buttonVariants({ variant: 'default' })}
          >
            Create
          </button>
        </form>
      </div>
    </main>
  )
}
