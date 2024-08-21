import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import Tier from './components/Tier';
import { useTierState } from './useTierState';
import { arrayMove, arrayTransfer } from './helpers';

export default function App() {
    const [tiers, setTiers] = useTierState();

    function onDragEnd(result: DropResult) {
        if (!result.destination) return;

        const oldIndex = result.source.index;
        const newIndex = result.destination.index;
        const oldTierName = result.source.droppableId;
        const newTierName = result.destination.droppableId;

        if (oldTierName === newTierName)
            setTiers((prevTiers) => {
                const tier = prevTiers.find(
                    (tier) => tier.name === oldTierName
                )!;

                arrayMove(tier.data, oldIndex, newIndex);

                return prevTiers;
            });
        else
            setTiers((prevTiers) => {
                const oldTier = prevTiers.find(
                    (tier) => tier.name === oldTierName
                )!;
                const newTier = prevTiers.find(
                    (tier) => tier.name === newTierName
                )!;

                arrayTransfer(oldTier.data, newTier.data, oldIndex, newIndex);

                return prevTiers;
            });
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                {tiers.map((tier) => (
                    <Tier
                        key={tier.name}
                        className={tier.className}
                        name={tier.name}
                        data={tier.data}
                    />
                ))}
            </div>
        </DragDropContext>
    );
}
