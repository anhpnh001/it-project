import { type Editor } from '@tiptap/react'

import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from 'lucide-react'

type Props = {
  editor: Editor
  content: string
}

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) return null
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'text-gray-800' : 'text-gray-400'}
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive('italic') ? 'text-gray-800' : 'text-gray-400'
        }
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={
          editor.isActive('underline') ? 'text-gray-800' : 'text-gray-400'
        }
      >
        <Underline className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive('strike') ? 'text-gray-800' : 'text-gray-400'
        }
      >
        <Strikethrough className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'text-gray-800' : 'text-gray-400'}
      >
        <Code className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive({ heading: { level: 2 } })
            ? 'text-gray-800'
            : 'text-gray-400'
        }
      >
        <Heading2 className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList') ? 'text-gray-800' : 'text-gray-400'
        }
      >
        <List className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive('orderedList') ? 'text-gray-800' : 'text-gray-400'
        }
      >
        <ListOrdered className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive('blockquote') ? 'text-gray-800' : 'text-gray-400'
        }
      >
        <Quote className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="text-gray-400"
      >
        <Undo className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="text-gray-400"
      >
        <Redo className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Toolbar
