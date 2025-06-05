import React, { useState, useRef } from 'react';
import { MessageSquare, X } from 'lucide-react';
import {
    ButtonContainer,
    PromptOverlay,
    PromptModal,
    CloseButton,
    ImagePreviewContainer,
    ImagePreview,
    RemoveImageButton,
} from './PromptButton.styles';
import type { PromptButtonProps } from './PromptButton.types';

const PromptButton: React.FC<PromptButtonProps> = ({ className }) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0] || null;
        setFile(selected);
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(selected ? URL.createObjectURL(selected) : null);
    };

    const removeImage = () => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Prompt submitted', { text, file });
        setOpen(false);
        setText('');
        setFile(null);
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(null);
    };

    return (
        <>
            <ButtonContainer className={className} onClick={() => setOpen(true)}>
                <MessageSquare size={20} />
            </ButtonContainer>
            {open && (
                <PromptOverlay>
                    <PromptModal>
                        <CloseButton onClick={() => setOpen(false)}>
                            <X size={16} />
                        </CloseButton>
                        <form onSubmit={handleSubmit}>
                            {previewUrl && (
                                <ImagePreviewContainer>
                                    <ImagePreview src={previewUrl} alt="preview" />
                                    <RemoveImageButton type="button" onClick={removeImage}>
                                        <X size={12} />
                                    </RemoveImageButton>
                                </ImagePreviewContainer>
                            )}
                            <textarea
                                placeholder="Type your prompt..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </PromptModal>
                </PromptOverlay>
            )}
        </>
    );
};

export default PromptButton;
