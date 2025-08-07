import React, { useEffect, useRef } from 'react';

const CKEditorClassic = ({ value, onChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        let editorInstance;

        const loadEditor = async () => {
            if (!window.ClassicEditor) {
                const script = document.createElement('script');
                script.src = '/ckeditor5/ckeditor5.js';
                script.onload = initializeEditor;
                document.body.appendChild(script);
            } else {
                initializeEditor();
            }
        };

        const initializeEditor = () => {
            const textarea = document.querySelector('#ckeditor');

            if (textarea && window.ClassicEditor) {
                window.ClassicEditor
                    .create(textarea)
                    .then(editor => {
                        editorInstance = editor;
                        editorRef.current = editor;

                        editor.setData(value || '');

                        editor.model.document.on('change:data', () => {
                            onChange(editor.getData());
                        });
                    })
                    .catch(error => {
                        console.error('Editor init error:', error);
                    });
            }
        };

        loadEditor();

        // Cleanup: destroy editor instead of removing DOM
        return () => {
            if (editorRef.current) {
                editorRef.current.destroy().catch(error => {
                    console.error('Error destroying editor:', error);
                });
            }
        };
    }, []);

    return (
        <textarea
            id="ckeditor"
            defaultValue={value}
            className="border rounded w-full p-2"
        />
    );
};

export default CKEditorClassic;
