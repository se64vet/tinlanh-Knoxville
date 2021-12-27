
import React from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const EditorWindow = ({submitData, height}) => {

    const handleOnChange = (event, editor) =>{
        const data = editor.getData();
        console.log({data, event, editor})
    }
    const handleOnBlur = (event, editor)=>{

    }
    const handleOnFocus = (event, editor)=>{

    }
    return (
        <div>
            <CKEditor editor={ClassicEditor}
                data=''
                onReady={(editor) => {
                    console.log(height)
                    editor.editing.view.change((writer) => {
                    writer.setStyle(
                        "height",
                        height,
                        editor.editing.view.document.getRoot()
                    );
                    });
                }}
                onChange={(event, editor) => handleOnChange(event, editor)}
                onBlur={(event, editor) => handleOnBlur()}
                onFocus={(event, editor)=> handleOnFocus()} 
            />
                
        </div>
    )
}

export default EditorWindow
