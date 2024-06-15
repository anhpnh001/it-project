'use client'
import * as Blockly from 'blockly'
import BlocklyComponent from '@/components/BlocklyComponent'
import { buttonVariants } from '@/components/ui/button'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'

export default function Exercise({ params }) {
  const [exercise, setExercise] = useState({
    title: '',
    content: '',
    blocklyXML: '',
    courses: [],
    diffculty: 1,
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
    }
  }, [exercise.blocklyXML])

  useEffect(() => {
    fetchExercise()
  }, [])

  async function fetchExercise() {
    const response = await fetch(`/api/exercises/${params.id}`)
    const { data } = await response.json()
    setExercise(data)
  }

  function checkExercise() {
    const workspaceXML = getWorkspaceXML()
    if (workspaceXML === exercise.blocklyXML) {
      toast.success('Correct!')
    } else {
      toast.error('Incorrect!')
    }
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
            checkExercise()
          }}
        >
          <div className="form-group">
            <label htmlFor="title">Tiêu đề</label>
            <h1 id="title" className="w-full px-4 py-2 border mt-1">
              {exercise.title}
            </h1>
          </div>
          <div className="form-group">
            <label htmlFor="content">Nội dung</label>
            <p
              id="content"
              className="w-full px-4 py-2 border mt-1 h-48"
              dangerouslySetInnerHTML={{ __html: exercise.content }}
            ></p>
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">Độ khó</label>
            <p
              id="difficulty"
              className="w-full px-4 py-2 border mt-1"
              onChange={(e) =>
                setExercise({ ...exercise, difficulty: e.target.value })
              }
            >
              {exercise.diffculty === 1
                ? 'Dễ'
                : exercise.diffculty === 2
                ? 'Trung bình'
                : 'Khó'}
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
