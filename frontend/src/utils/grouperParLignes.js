export function grouperParLignes(elements, parLigne = 3) {
    const rangees = [];
    for (let i = 0; i < elements.length; i += parLigne) {
        rangees.push(elements.slice(i, i + parLigne));
    }
    return rangees;
}
