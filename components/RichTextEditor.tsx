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
import { editorContent as copy } from '../data/pages';
import {
    Bold, Italic, Underline as UnderlineIcon, AlignLeft, AlignCenter, AlignRight,
    Palette, Link as LinkIcon, List, ListOrdered, X
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
                    title={copy.fontFamily}
                >
                    <option value="">{copy.fontOption}</option>
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
                    title={copy.fontSize}
                >
                    <option value="">{copy.sizeOption}</option>
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
                        title={copy.bold}
                    >
                        <Bold size={15} />
                    </ToolbarButton>

                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        isActive={editor.isActive('italic')}
                        title={copy.italic}
                    >
                        <Italic size={15} />
                    </ToolbarButton>

                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        isActive={editor.isActive('underline')}
                        title={copy.underline}
                    >
                        <UnderlineIcon size={15} />
                    </ToolbarButton>
                </div>

                <div className="w-px h-6 bg-gradient-to-b from-gray-200 to-gray-300 mx-1 rounded-full"></div>

                <div className="flex items-center bg-white rounded-lg border border-gray-200 p-0.5">
                    <ToolbarButton
                        onClick={setLink}
                        isActive={editor.isActive('link')}
                        title={copy.linkTool}
                    >
                        <LinkIcon size={15} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        isActive={editor.isActive('bulletList')}
                        title={copy.bulletList}
                    >
                        <List size={15} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        isActive={editor.isActive('orderedList')}
                        title={copy.numberedList}
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
                        title={copy.alignLeft}
                    >
                        <AlignLeft size={15} />
                    </ToolbarButton>

                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        isActive={editor.isActive({ textAlign: 'center' })}
                        title={copy.alignCenter}
                    >
                        <AlignCenter size={15} />
                    </ToolbarButton>

                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        isActive={editor.isActive({ textAlign: 'right' })}
                        title={copy.alignRight}
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
                        title={copy.textColor}
                    />
                </div>
            </div>

            {/* Editor Content */}
            <div className="p-4 min-h-[70px] bg-white focus-within:bg-blue-50/30 transition-colors duration-300">
                <EditorContent editor={editor} />
            </div>

            {linkDialogOpen && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
                    onMouseDown={() => setLinkDialogOpen(false)}
                    role="presentation"
                >
                    <form
                        className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"
                        onMouseDown={(event) => event.stopPropagation()}
                        onSubmit={(event) => { event.preventDefault(); saveLink(); }}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-base font-semibold text-slate-900">{copy.addLinkDialogTitle}</h2>
                                <p className="mt-1 text-sm leading-5 text-slate-500">{copy.addLinkDialogDescription}</p>
                            </div>
                            <button type="button" onClick={() => setLinkDialogOpen(false)} className="-mr-1 -mt-1 flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800" aria-label={copy.closeDialog}><X size={18} /></button>
                        </div>
                        <label className="mt-5 block text-sm font-medium text-slate-700" htmlFor="link-url">{copy.urlLabel}</label>
                        <input
                            id="link-url"
                            type="url"
                            value={linkUrl}
                            onChange={(event) => setLinkUrl(event.target.value)}
                            placeholder={copy.urlPlaceholder}
                            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
                            autoFocus
                        />
                        <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="link-text">Display text <span className="font-normal text-slate-400">{copy.optional}</span></label>
                        <input
                            id="link-text"
                            type="text"
                            value={linkText}
                            onChange={(event) => setLinkText(event.target.value)}
                            placeholder={copy.linkTextPlaceholder}
                            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        />
                        <div className="mt-6 flex justify-end gap-2 border-t border-slate-100 pt-4">
                            <button type="button" onClick={() => setLinkDialogOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">{copy.cancel}</button>
                            <button type="submit" className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">{copy.addLinkDialogTitle}</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default RichTextEditor;
