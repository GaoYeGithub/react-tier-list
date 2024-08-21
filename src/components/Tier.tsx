import { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import DataCard from './DataCard';

export default function Tier({
    name,
    data,
    className = '',
    renameTier,
    addImageToTier,
}: {
    name: string;
    data: { id: string; imageUrl: string }[];
    className?: string;
    renameTier: (oldName: string, newName: string) => void;
    addImageToTier: (tierName: string, imageUrl: string) => void;
}) {
    const [newName, setNewName] = useState(name);
    const [imageUrl, setImageUrl] = useState('');

    const handleNameChange = () => {
        if (newName !== name) {
            renameTier(name, newName);
        }
    };

    const handleAddImage = () => {
        if (imageUrl) {
            addImageToTier(name, imageUrl);
            setImageUrl('');
        }
    };

    return (
        <div className="flex">
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onBlur={handleNameChange}
                className="w-32 py-8 text-center"
            />

            <Droppable droppableId={name} direction="horizontal">
                {(provided) => (
                    <div
                        className={`pl-4 flex flex-wrap items-center gap-4 border w-full select-none ${className}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {data.map((item, index) => (
                            <DataCard
                                key={item.id}
                                id={item.id}
                                index={index}
                                imageUrl={item.imageUrl}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <input
                type="text"
                value={imageUrl}
                placeholder="Image URL"
                onChange={(e) => setImageUrl(e.target.value)}
                className="ml-4"
            />
            <button onClick={handleAddImage} className="ml-2">
                Add Image
            </button>
        </div>
    );
}
