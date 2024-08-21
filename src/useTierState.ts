import { useState } from 'react';

export function useTierState() {
    return useState([
        { name: 'S', data: [], className: 'bg-rose-500' },
        { name: 'A', data: [], className: 'bg-orange-300' },
        { name: 'B', data: [], className: 'bg-amber-200' },
        { name: 'C', data: [], className: 'bg-green-400' },
        { name: 'D', data: [], className: 'bg-teal-400' },
        { name: 'F', data: [], className: 'bg-fuchsia-400' },
        {
            name: 'Unranked',
            className: 'bg-slate-100',
            data: [
                {
                    id: '1',
                    imageUrl: 'https://i.ibb.co/DRd2Fg4/image.png',
                },
                {
                    id: '2',
                    imageUrl: 'https://i.ibb.co/JxbTpcY/image.png',
                },
                {
                    id: '3',
                    imageUrl: 'https://i.ibb.co/JFpNxkd/image.png',
                },
                {
                    id: '4',
                    imageUrl: 'https://i.ibb.co/cxqYt00/image.png',
                },
                {
                    id: '5',
                    imageUrl: 'https://i.ibb.co/zRzwsCD/image.png',
                },
            ],
        },
    ]);
}
