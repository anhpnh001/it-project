'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from '@/components/Toolbar'

const Tiptap = ({ onChange, content }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent)
  }
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'w-full px-4 py-2 h-48',
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML())
    },
  })

  return (
    <div className="flex flex-col mt-1 border">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: 'pre-line' }} editor={editor} />
    </div>
  )
}

export default Tiptap
