import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { FontFamily } from '@tiptap/extension-font-family';
import { Underline } from '@tiptap/extension-underline';
import { TextAlign } from '@tiptap/extension-text-align';
import { FontSize } from '../extensions/FontSize';
import {
    Bold, Italic, Underline as UnderlineIcon, AlignLeft, AlignCenter, AlignRight,
    Palette
} from 'lucide-react';

const RichTextEditor = ({ content, onChange, placeholder = 'Enter text...', className = '' }) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: false,
                bulletList: false,
                orderedList: false,
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

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
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
        </div>
    );
};

export default RichTextEditor;
