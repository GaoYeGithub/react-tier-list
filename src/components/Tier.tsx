import { Droppable } from '@hello-pangea/dnd';
import DataCard from './DataCard';

export default function Tier({
    name,
    data,
    className = '',
}: {
    name: string;
    data: { id: string; imageUrl: string }[];
    className?: string;
}) {
    return (
        <div className="flex">
            <div className={'w-32 py-8 text-center ' + className}>{name}</div>

            <Droppable droppableId={name} direction="horizontal">
                {(provided) => (
                    <div
                        className="pl-4 flex flex-wrap items-center gap-4 border w-full select-none"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {data.map((data, index) => (
                            <DataCard
                                key={data.id}
                                id={data.id}
                                index={index}
                                imageUrl={data.imageUrl}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
