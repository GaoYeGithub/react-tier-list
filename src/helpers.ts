export function arrayMove<T>(array: T[], from: number, to: number) {
    const item = array[from];
    array.splice(from, 1);
    array.splice(to, 0, item);
}

export function arrayTransfer<T>(
    oldArray: T[],
    newArray: T[],
    oldIndex: number,
    newIndex: number
) {
    newArray.splice(newIndex, 0, oldArray[oldIndex]);
    oldArray.splice(oldIndex, 1);
}
