'use client'
import * as Blockly from 'blockly'
import BlocklyComponent from '@/components/BlocklyComponent'
import Tiptap from '@/components/Tiptap'
import { buttonVariants } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [exercise, setExercise] = useState({
    title: '',
    content: '',
    blocklyXML: '',
    difficulty: '1',
    courses: [] as string[],
  })
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.data)
      })
  }, [])

  function getWorkspaceXML() {
    const workspace = Blockly.getMainWorkspace()
    const xml = Blockly.Xml.workspaceToDom(workspace)
    const newXml = removeUnwantedAttributes(xml)
    const xmlText = Blockly.Xml.domToText(newXml)
    return xmlText
  }

  useEffect(() => {
    console.log(exercise)
    if (exercise.blocklyXML !== '') {
      createExercise()
    }
  }, [exercise.blocklyXML])

  function createExercise() {
    console.log(exercise)
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
          <div className="form-group ">
            <label htmlFor="title">Tiêu đề</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Tiêu đề"
              className="w-full px-4 py-2 border mt-1"
              onChange={(e) =>
                setExercise({ ...exercise, title: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Nội dung</label>
            <Tiptap
              content={exercise.content}
              onChange={(content: string) =>
                setExercise({ ...exercise, content })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">Độ khó</label>
            <select
              name="difficulty"
              id="difficulty"
              className="w-full px-4 py-2 border mt-1"
              onChange={(e) =>
                setExercise({ ...exercise, difficulty: e.target.value })
              }
            >
              <option value="1">Dễ</option>
              <option value="2">Trung bình</option>
              <option value="3">Khó</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="course">Khóa học</label>
            <select
              name="course"
              id="category"
              className="w-full px-4 py-2 border mt-1"
              multiple
              // Array of course ids
              onChange={(e) =>
                setExercise({
                  ...exercise,
                  courses: Array.from(e.target.selectedOptions).map(
                    (option) => option.value
                  ),
                })
              }
            >
              {courses.map((course: { _id: string; title: string }) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className={buttonVariants({ variant: 'default' })}
          >
            Tạo bài tập
          </button>
        </form>
      </div>
    </main>
  )
}
