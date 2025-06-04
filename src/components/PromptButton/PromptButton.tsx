import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import {
    ButtonContainer,
    PromptOverlay,
    PromptModal,
    CloseButton,
} from './PromptButton.styles';
import type { PromptButtonProps } from './PromptButton.types';

const PromptButton: React.FC<PromptButtonProps> = ({ className }) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Prompt submitted', { text, file });
        setOpen(false);
        setText('');
        setFile(null);
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
                            <textarea
                                placeholder="Type your prompt..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
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
