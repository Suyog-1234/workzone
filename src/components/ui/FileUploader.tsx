"use client";

import { Cloud } from 'lucide-react'
import { FC, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

interface FileUploaderProps {
    onChange: (file:any) => void
}

const FileUploader: FC<FileUploaderProps> = ({ onChange }) => {
    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles)
    }, [])

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop })

    useEffect(() => {
        if (onChange) {
            onChange(acceptedFiles[0])
        }
    }, [acceptedFiles])
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} type='file' id='dropzone-file' className='hidden' />
            <label
                htmlFor='dropzone-file'
                className='flex flex-col items-center justify-center  p-8 w-full h-full rounded-sm cursor-pointer bg-transparent border border-borderV1 hover:border-theme'>
                <div className='flex flex-col items-center justify-center'>
                    <Cloud className='h-6 w-6 text-theme mb-2' />
                    <p className='mb-2 text-xs text-textV1'>
                        <span className='font-semibold '>
                            Click to upload
                        </span>{' '}
                        or drag and drop
                    </p>
                    <p className='text-xs text-zinc-500'>
                        Image (up to 5MB)
                    </p>
                </div>
                {acceptedFiles && acceptedFiles[0] ? (
                    <div className='max-w-xs bg-transparent border mt-4 border-theme flex items-center rounded-sm overflow-hidden outline-none'>
                        <div className='px-3 py-2 h-full text-xs truncate text-textV1'>
                            {acceptedFiles[0].name}
                        </div>
                    </div>
                ) : null}
                <input
                    {...getInputProps()}
                    type='file'
                    id='dropzone-file'
                    className='hidden'
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FileUploader