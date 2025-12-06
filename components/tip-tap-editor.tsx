'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import { useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, Highlighter,
  Heading1, Heading2, Heading3, List, ListOrdered, Quote, Code2,
  Undo, Redo, Link2, Image as ImageIcon, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Minus, Save
} from 'lucide-react';

interface Props {
  title?: string;
  onTitleChange?: (title: string) => void;
  content?: string;
  onContentChange?: (html: string) => void;
  onSubmit: () => void;
  isPending: boolean;
  errors: any;
}

export default function TiptapEditor({
  title = '',
  onTitleChange,
  content = '',
  onContentChange,
  onSubmit,
  isPending,
  errors,
}: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Highlight.configure({ multicolor: true }),
      Link.configure({ openOnClick: false, autolink: true }),
      Image.configure({ inline: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: 'Start writing your masterpiece...' }),
    ],
    content,
    onUpdate: ({ editor }) => onContentChange?.(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[60vh] p-8 pb-32 text-lg leading-relaxed',
        spellcheck: 'false',
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content || '');
    }
  }, [content, editor]);

  const addImage = useCallback(() => {
    const url = window.prompt('Image URL:');
    if (url && editor) editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const setLink = useCallback(() => {
    const prev = editor?.getAttributes('link').href || 'https://';
    const url = window.prompt('Enter URL:', prev);
    if (url === null) return;
    if (url === '') editor?.chain().focus().unsetLink().run();
    else editor?.chain().focus().setLink({ href: url, target: '_blank' }).run();
  }, [editor]);

  if (!editor) return null;

  const btn = (active = false) =>
    `p-2.5 rounded-lg transition-all ${active ? 'bg-foreground text-background' : 'hover:bg-accent'}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto">
          {/* Title with shadcn Input + Label */}
          <div className="p-6 space-y-3">
            <Label htmlFor="title" className="text-lg font-medium">Blog Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => onTitleChange?.(e.target.value)}
              // placeholder="Enter a catchy title..."
              className="text-4xl p-4 font-bold h-auto border-none shadow-none "
              autoFocus
            />
            {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-1 p-3 flex-wrap border-t">
            <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btn(editor.isActive('bold'))}><Bold className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(editor.isActive('italic'))}><Italic className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={btn(editor.isActive('underline'))}><UnderlineIcon className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={btn(editor.isActive('strike'))}><Strikethrough className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleHighlight().run()} className={btn(editor.isActive('highlight'))}><Highlighter className="h-4 w-4" /></button>

            <div className="w-px h-8 bg-border mx-2" />

            <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={btn(editor.isActive('heading', { level: 1 }))}><Heading1 className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btn(editor.isActive('heading', { level: 2 }))}><Heading2 className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btn(editor.isActive('heading', { level: 3 }))}><Heading3 className="h-4 w-4" /></button>

            <div className="w-px h-8 bg-border mx-2" />

            <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(editor.isActive('bulletList'))}><List className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(editor.isActive('orderedList'))}><ListOrdered className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btn(editor.isActive('blockquote'))}><Quote className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={btn(editor.isActive('codeBlock'))}><Code2 className="h-4 w-4" /></button>

            <div className="w-px h-8 bg-border mx-2" />

            <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} className={btn(editor.isActive({ textAlign: 'left' }))}><AlignLeft className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} className={btn(editor.isActive({ textAlign: 'center' }))}><AlignCenter className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} className={btn(editor.isActive({ textAlign: 'right' }))}><AlignRight className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={btn(editor.isActive({ textAlign: 'justify' }))}><AlignJustify className="h-4 w-4" /></button>

            <div className="w-px h-8 bg-border mx-2" />

            <button type="button" onClick={setLink} className={btn(editor.isActive('link'))}><Link2 className="h-4 w-4" /></button>
            <button type="button" onClick={addImage}><ImageIcon className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus className="h-4 w-4" /></button>

            <div className="w-px h-8 bg-border mx-2" />

            <button type="button" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}><Undo className="h-4 w-4" /></button>
            <button type="button" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}><Redo className="h-4 w-4" /></button>

            <div className="ml-auto">
              <button
                type="button"
                onClick={onSubmit}
                disabled={isPending || !!errors.title || !!errors.content}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                {isPending ? 'Publishing...' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="max-w-5xl mx-auto">
        <EditorContent editor={editor} />
      </div>

      {/* Content Error */}
      {errors.content && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-destructive text-destructive-foreground px-6 py-3 rounded-lg shadow-lg z-50">
          {errors.content.message}
        </div>
      )}
    </div>
  );
}