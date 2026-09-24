import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { FontFamily } from '@tiptap/extension-font-family';
import { Underline } from '@tiptap/extension-underline';
import { TextAlign } from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import { FontSize } from '../extensions/FontSize';
import {
    Bold, Italic, Underline as UnderlineIcon, AlignLeft, AlignCenter, AlignRight,
    Palette, Link as LinkIcon, List, ListOrdered
} from 'lucide-react';

const RichTextEditor = ({ content, onChange, placeholder = 'Enter text...', className = '' }) => {
    const [linkDialogOpen, setLinkDialogOpen] = useState(false);
    const [linkUrl, setLinkUrl] = useState('');
    const [linkText, setLinkText] = useState('');
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: false,
                bulletList: { keepMarks: true },
                orderedList: { keepMarks: true },
                blockquote: false,
                codeBlock: false,
                horizontalRule: false,
            }),
            TextStyle,
            Color,
            FontFamily,
            FontSize,
            Underline,
            TextAlign.configure({
                types: ['paragraph'],
            }),
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
            }),
        ],
        content: content || '',
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: `prose prose-sm max-w-none focus:outline-none ${className}`,
            },
        },
    });

    if (!editor) {
        return null;
    }

    const fontFamilies = [
        { name: 'Arial', value: 'Arial, sans-serif' },
        { name: 'Inter', value: 'Inter, sans-serif' },
        { name: 'Roboto', value: 'Roboto, sans-serif' },
        { name: 'Merriweather', value: 'Merriweather, serif' },
        { name: 'Playfair Display', value: 'Playfair Display, serif' },
        { name: 'Georgia', value: 'Georgia, serif' },
        { name: 'Times New Roman', value: 'Times New Roman, serif' },
        { name: 'Courier New', value: 'Courier New, monospace' },
    ];

    const fontSizes = [
        { name: 'XS', value: '10px' },
        { name: 'SM', value: '12px' },
        { name: 'MD', value: '14px' },
        { name: 'LG', value: '16px' },
        { name: 'XL', value: '20px' },
        { name: '2XL', value: '24px' },
    ];

    const ToolbarButton = ({ onClick, isActive, children, title }) => (
        <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={onClick}
            className={`p-2 rounded-lg transition-all duration-200 ${
                isActive 
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md scale-105' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
            title={title}
        >
            {children}
        </button>
    );

    const setLink = () => {
        setLinkUrl(editor.getAttributes('link').href || '');
        const { from, to } = editor.state.selection;
        setLinkText(editor.state.doc.textBetween(from, to, ' '));
        setLinkDialogOpen(true);
    };

    const saveLink = () => {
        if (linkUrl.trim() === '') {
            editor.chain().focus().unsetLink().run();
        } else if (editor.state.selection.empty) {
            editor.chain().focus().insertContent({
                type: 'text',
                text: linkText.trim() || linkUrl.trim(),
                marks: [{ type: 'link', attrs: { href: linkUrl.trim() } }],
            }).run();
        } else {
            editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl.trim() }).run();
        }
        setLinkDialogOpen(false);
    };

    return (
        <div className="relative border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Modern Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 bg-gradient-to-r from-gray-50 to-slate-50 border-b border-gray-200">
                {/* Font Family */}
                <select
                    onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}
                    className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer hover:border-blue-300"
                    title="Font Family"
                >
                    <option value="">🔤 Font</option>
                    {fontFamilies.map((font) => (
                        <option key={font.value} value={font.value}>
                            {font.name}
                        </option>
                    ))}
                </select>

                {/* Font Size */}
                <select
                    onChange={(e) => {
                        const size = e.target.value;
                        if (size) {
                            editor.chain().focus().setFontSize(size).run();
                        }
                    }}
                    className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer hover:border-blue-300"
                    title="Font Size"
                >
                    <option value="">📏 Size</option>
                    {fontSizes.map((size) => (
                        <option key={size.value} value={size.value}>
                            {size.name}
                        </option>
                    ))}
                </select>

                <div className="w-px h-6 bg-gradient-to-b from-gray-200 to-gray-300 mx-1 rounded-full"></div>

                {/* Text Formatting */}
                <div className="flex items-center bg-white rounded-lg border border-gray-200 p-0.5">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        isActive={editor.isActive('bold')}
                        title="Bold (Ctrl+B)"
                    >
                        <Bold size={15} />
                    </ToolbarButton>

                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        isActive={editor.isActive('italic')}
                        title="Italic (Ctrl+I)"
                    >
                        <Italic size={15} />
                    </ToolbarButton>

                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        isActive={editor.isActive('underline')}
                        title="Underline (Ctrl+U)"
                    >
                        <UnderlineIcon size={15} />
                    </ToolbarButton>
                </div>

                <div className="w-px h-6 bg-gradient-to-b from-gray-200 to-gray-300 mx-1 rounded-full"></div>

                <div className="flex items-center bg-white rounded-lg border border-gray-200 p-0.5">
                    <ToolbarButton
                        onClick={setLink}
                        isActive={editor.isActive('link')}
                        title="Add or edit link"
                    >
                        <LinkIcon size={15} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        isActive={editor.isActive('bulletList')}
                        title="Bullet list"
                    >
                        <List size={15} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        isActive={editor.isActive('orderedList')}
                        title="Numbered list"
                    >
                        <ListOrdered size={15} />
                    </ToolbarButton>
                </div>

                <div className="w-px h-6 bg-gradient-to-b from-gray-200 to-gray-300 mx-1 rounded-full"></div>

                {/* Text Alignment */}
                <div className="flex items-center bg-white rounded-lg border border-gray-200 p-0.5">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        isActive={editor.isActive({ textAlign: 'left' })}
                        title="Align Left"
                    >
                        <AlignLeft size={15} />
                    </ToolbarButton>

                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        isActive={editor.isActive({ textAlign: 'center' })}
                        title="Align Center"
                    >
                        <AlignCenter size={15} />
                    </ToolbarButton>

                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        isActive={editor.isActive({ textAlign: 'right' })}
                        title="Align Right"
                    >
                        <AlignRight size={15} />
                    </ToolbarButton>
                </div>

                <div className="w-px h-6 bg-gradient-to-b from-gray-200 to-gray-300 mx-1 rounded-full"></div>

                {/* Text Color */}
                <div className="flex items-center gap-1.5 bg-white rounded-lg border border-gray-200 px-2 py-1 hover:border-blue-300 transition-all">
                    <Palette size={14} className="text-gray-500" />
                    <input
                        type="color"
                        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
                        className="w-6 h-6 rounded-md cursor-pointer border-0 p-0"
                        title="Text Color"
                    />
                </div>
            </div>

            {/* Editor Content */}
            <div className="p-4 min-h-[70px] bg-white focus-within:bg-blue-50/30 transition-colors duration-300">
                <EditorContent editor={editor} />
            </div>

            {linkDialogOpen && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/20 p-4">
                    <form
                        className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-xl"
                        onSubmit={(event) => { event.preventDefault(); saveLink(); }}
                    >
                        <label className="block text-sm font-semibold text-slate-800" htmlFor="link-url">Add link</label>
                        <input
                            id="link-url"
                            type="url"
                            value={linkUrl}
                            onChange={(event) => setLinkUrl(event.target.value)}
                            placeholder="https://example.com"
                            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
                            autoFocus
                        />
                        <label className="mt-3 block text-sm font-medium text-slate-700" htmlFor="link-text">Link text</label>
                        <input
                            id="link-text"
                            type="text"
                            value={linkText}
                            onChange={(event) => setLinkText(event.target.value)}
                            placeholder="Optional when text is selected"
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        />
                        <div className="mt-3 flex justify-end gap-2">
                            <button type="button" onClick={() => setLinkDialogOpen(false)} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">Cancel</button>
                            <button type="submit" className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700">Save link</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default RichTextEditor;
