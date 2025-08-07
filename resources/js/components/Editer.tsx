// components/EditorComponent.jsx
import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';

const EditorComponent = ({ value, onChange }) => {
    const editorRef = useRef(null);
    const ejInstance = useRef(null);

    useEffect(() => {
        if (!editorRef.current) return;

        ejInstance.current = new EditorJS({
            holder: editorRef.current,
            tools: {
                header: Header,
                paragraph: Paragraph,
            },
            data: value ? JSON.parse(value) : {},
            onChange: async () => {
                const content = await ejInstance.current.save();
                onChange(JSON.stringify(content));
            },
        });

        return () => {
            if (ejInstance.current?.destroy) {
                ejInstance.current.destroy();
                ejInstance.current = null;
            }
        };
    }, []);

    return <div id="editorjs" ref={editorRef} className="border rounded p-4 bg-white" />;
};

export default EditorComponent;
