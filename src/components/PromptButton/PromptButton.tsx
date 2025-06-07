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
    const apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
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

    const fileToDataUrl = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsDataURL(file);
        });
    };

    const handleButtonClick = () => {
        setOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!apiKey) {
            console.warn('No API key set');
            return;
        }

        const content: Array<{ type: 'text' | 'image_url'; text?: string; image_url?: { url: string } }> = [
            { type: 'text', text },
        ];
        if (file) {
            const dataUrl = await fileToDataUrl(file);
            content.push({ type: 'image_url', image_url: { url: dataUrl } });
        }

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'gpt-4o',
                    messages: [{ role: 'user', content }],
                }),
            });
            const data = await response.json();
            console.log('ChatGPT response', data);
        } catch (err) {
            console.error('Error sending to ChatGPT', err);
        }
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
            <ButtonContainer className={className} onClick={handleButtonClick}>
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
